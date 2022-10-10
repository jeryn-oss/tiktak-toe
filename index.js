var winner = false
var pos = 22;
var player = false
var arrayval = [11, 12, 13, 21, 22, 23, 31, 32, 33];
var ttt = {
    11: " ", 12: " ", 13: " ",
    21: " ", 22: " ", 23: " ",
    31: " ", 32: " ", 33: " ",
}

$('.reset').click(function () {
    reset();
});

$(".p11").click(function () {
    console.log("clicked 11");

    if (player == true) {
    } else {
        place('x', 11)
    }
});

$(".p12").click(function () {
    console.log("clicked 12");

    if (player == true) {
    } else {
        place('x', 12)
    }
});

$(".p13").click(function () {
    console.log("clicked 13");

    if (player == true) {
    } else {
        place('x', 13)
    }
});

$(".p21").click(function () {
    console.log("clicked 21");

    if (player == true) {
    } else {
        place('x', 21)
    }
});

$(".p22").click(function () {
    console.log("clicked 22");

    if (player == true) {
    } else {
        place('x', 22)

    }
});

$(".p23").click(function () {
    console.log("clicked 23");

    if (player == true) {
    } else {
        place('x', 23)
    }
});

$(".p31").click(function () {
    console.log("clicked 31");

    if (player == true) {
    } else {
        place('x', 31)
    }
});

$(".p32").click(function () {
    console.log("clicked 32");

    if (player == true) {
    } else {
        place('x', 32)
    }
});

$(".p33").click(function () {
    console.log("clicked 33");

    if (player == true) {
    } else {
        place('x', 33)
    }
});





function place(type, position) {
    if (winner == false) {
        if (type.toLowerCase() == 'x' || type.toLowerCase() == 'o') {
            if (ttt[position] == ' ') {
                ttt[position] = type
                if (player == true) {
                    player = false
                } else {
                    player = true
                }
                draw(ttt)
            }

        }
    }
    setTimeout(function () {
        if (player == true && winner == false) {
            var move = minimax(ttt, 'o').index
            if (move == undefined) {
                return
            }
            place('o', move)
        }
    }, 1000)

}



function draw(t) {
    if (player == true) {
        var r = 'o'
    } else {
        var r = 'x'
    }
    var arrayval = [11, 12, 13, 21, 22, 23, 31, 32, 33]
    for (var i = 0; i < 9; i++) {
        var val = arrayval[i]
        var rand = ttt[val]
        $(".p" + val).text(rand)
    }
    check()
}

function check() {
    var value;
    for (var i = 0; i <= 1; i++) {
        if (i == 0) {
            value = 'x'
        } else {
            value = 'o'
        }

        if (ttt[11] == value && ttt[12] == value && ttt[13] == value) {
            $('.cross').css({ 'height': '240px', 'top': '15%', 'left': '50%', 'transform': 'translate(-50%, -50%) rotate(90deg)', 'opacity': '1', 'display': 'block' })
            $('.winner').css('display', 'block')
            console.log('wonnnn')
            winner = true
            return value
        }
        if (ttt[21] == value && ttt[22] == value && ttt[23] == value) {
            $('.cross').css({ 'height': '240px', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%, -50%) rotate(90deg)', 'opacity': '1', 'display': 'block' })
            $('.winner').css('display', 'block')
            console.log('wonnnn')
            winner = true
            return value
        }
        if (ttt[31] == value && ttt[32] == value && ttt[33] == value) {
            $('.cross').css({ 'height': '240px', 'top': '85.6%', 'left': '50%', 'transform': 'translate(-50%, -50%) rotate(90deg)', 'opacity': '1', 'display': 'block' })
            $('.winner').css('display', 'block')
            console.log('wonnnn')
            winner = true
            return value
        }
        if (ttt[11] == value && ttt[21] == value && ttt[31] == value) {
            $('.cross').css({ 'height': '240px', 'top': '50%', 'left': '14.6%', 'transform': 'translate(-50%, -50%) rotate(0deg)', 'opacity': '1', 'display': 'block' })
            $('.winner').css('display', 'block')
            console.log('wonnnn')
            winner = true
            return value
        }
        if (ttt[12] == value && ttt[22] == value && ttt[32] == value) {
            $('.cross').css({ 'height': '240px', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%, -50%) rotate(0deg)', 'opacity': '1', 'display': 'block' })
            $('.winner').css('display', 'block')
            console.log('wonnnn')
            winner = true
            return value
        }

        if (ttt[13] == value && ttt[23] == value && ttt[33] == value) {
            $('.cross').css({ 'height': '240px', 'top': '50%', 'left': '85.4%', 'transform': 'translate(-50%, -50%) rotate(0deg)', 'opacity': '1', 'display': 'block' })
            $('.winner').css('display', 'block')
            console.log('wonnnn')
            winner = true
            return value
        }
        if (ttt[11] == value && ttt[22] == value && ttt[33] == value) {
            $('.cross').css({ 'height': '335px', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%, -50%) rotate(135deg)', 'opacity': '1', 'display': 'block' })
            $('.winner').css('display', 'block')
            console.log('wonnnn')
            winner = true
            return value
        }
        if (ttt[13] == value && ttt[22] == value && ttt[31] == value) {
            $('.cross').css({ 'height': '335px', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%, -50%) rotate(45deg)', 'opacity': '1', 'display': 'block' })
            $('.winner').css('display', 'block')
            console.log('wonnnn')
            winner = true
            return value
        }
        if (i == 1) {
            checkme(ttt)
        }
        //check if all sqaures arfilled 
    }
}

function checkme(board) {
    winner = true
    var count = 0
    for (var i = 0; i < 9; i++) {
        if (board[arrayval[i]] != ' ') {
            count++
        }
    }
    if (count == 9) {
        $('.winner').css('display', 'block')
        $('.winner').text('Draw')
    } else {
        winner = false
    }

}

function reset() {
    ttt = { 11: ' ', 12: ' ', 13: ' ', 21: ' ', 22: ' ', 23: ' ', 31: ' ', 32: ' ', 33: ' ' }
    player = false
    winner = false
    $('.winner').css('display', 'none')
    $('.cross').css('opacity', '0')
    $('.cross').css('display', 'none')
    draw(ttt)
}

function minimax(newBoard, player) {
    var avalable = getAvailable(newBoard)
    if (checkWin(newBoard, 'x')) {
        return { score: -10 }
    } else if (checkWin(newBoard, 'o')) {
        return { score: 10 }
    } else if (avalable.length == 0) {
        return { score: 0 }
    }

    let moves = []
    for (var i = 0; i < avalable.length; i++) {
        var move = {}
        move.index = avalable[i]
        newBoard[avalable[i]] = player
        if (player == 'o') {
            var result = minimax(newBoard, 'x')
            move.score = result.score
        }
        else {
            var result = minimax(newBoard, 'o')
            move.score = result.score
        }
        newBoard[avalable[i]] = ' '
        moves.push(move)
    }

    var bestmove;
    if (player == 'o') {
        var bestscore = -10000
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score > bestscore) {
                bestscore = moves[i].score
                bestmove = i
            }
        }
    }
    else {
        var bestscore = 10000
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score < bestscore) {
                bestscore = moves[i].score
                bestmove = i
            }
        }
    }
    return moves[bestmove]
}



function getAvailable(board) {
    var avalable = []
    for (var i = 0; i <= 9; i++) {
        val = arrayval[i]
        if (board[val] == ' ') {
            avalable.push(val)
        }
    }
    return avalable
}


function checkWin(board, player) {

    var winning = [
        { 1: 11, 2: 12, 3: 13 },
        { 1: 21, 2: 22, 3: 23 },
        { 1: 31, 2: 32, 3: 33 },
        { 1: 11, 2: 21, 3: 31 },
        { 1: 12, 2: 22, 3: 32 },
        { 1: 13, 2: 23, 3: 33 },
        { 1: 11, 2: 22, 3: 33 },
        { 1: 13, 2: 22, 3: 31 }]
    for (var o = 0; o < 2; o++) {
        var value = player
        for (var i = 0; i < 8; i++) {
            if (board[winning[i][1]] == board[winning[i][2]] && board[winning[i][1]] == board[winning[i][3]] && board[winning[i][1]] == value) {
                return true
            }
        }
    }
    return false
}