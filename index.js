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
        place('o', 11)
    } else {
        place('x', 11)
    }
});

$(".p12").click(function () {
    console.log("clicked 12");

    if (player == true) {
        place('o', 12)
    } else {
        place('x', 12)
    }
});

$(".p13").click(function () {
    console.log("clicked 13");

    if (player == true) {
        place('o', 13)
    } else {
        place('x', 13)
    }
});

$(".p21").click(function () {
    console.log("clicked 21");

    if (player == true) {
        place('o', 21)
    } else {
        place('x', 21)
    }
});

$(".p22").click(function () {
    console.log("clicked 22");

    if (player == true) {
        place('o', 22)
    } else {
        place('x', 22)

    }
});

$(".p23").click(function () {
    console.log("clicked 23");

    if (player == true) {
        place('o', 23)
    } else {
        place('x', 23)
    }
});

$(".p31").click(function () {
    console.log("clicked 31");

    if (player == true) {
        place('o', 31)
    } else {
        place('x', 31)
    }
});

$(".p32").click(function () {
    console.log("clicked 32");

    if (player == true) {
        place('o', 32)
    } else {
        place('x', 32)
    }
});

$(".p33").click(function () {
    console.log("clicked 33");

    if (player == true) {
        place('o', 33)
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
    if (player == true && winner == false) {
        place('o', aiMove(ttt, 'o'))
    }
    draw(ttt)
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
    var checkme;
    var value;
    for (var i = 0; i <= 1; i++) {
        if (i == 0) {
            value = 'x'
        } else {
            value = 'o'
        }

        if (ttt[11] == value && ttt[12] == value && ttt[13] == value) {
            $('.cross').css({ 'height': '240px', 'top': '15%', 'left': '50%','transform': 'translate(-50%, -50%) rotate(90deg)', 'opacity': '1', 'display': 'block' })
            $('.winner').css('display', 'block')
            console.log('wonnnn')
            winner = true
        }
        if (ttt[21] == value && ttt[22] == value && ttt[23] == value) {
            $('.cross').css({ 'height': '240px', 'top': '50%','left': '50%', 'transform': 'translate(-50%, -50%) rotate(90deg)', 'opacity': '1', 'display': 'block' })
            $('.winner').css('display', 'block')
            console.log('wonnnn')
            winner = true
        }
        if (ttt[31] == value && ttt[32] == value && ttt[33] == value) {
            $('.cross').css({ 'height': '240px', 'top': '85.6%', 'left': '50%', 'transform': 'translate(-50%, -50%) rotate(90deg)', 'opacity': '1', 'display': 'block' })
            $('.winner').css('display', 'block')
            console.log('wonnnn')
            winner = true
        }
        if (ttt[11] == value && ttt[21] == value && ttt[31] == value) {
            $('.cross').css({ 'height': '240px', 'top': '50%', 'left': '14.6%', 'transform': 'translate(-50%, -50%) rotate(0deg)', 'opacity': '1', 'display': 'block' })
            $('.winner').css('display', 'block')
            console.log('wonnnn')
            winner = true
        }
        if (ttt[12] == value && ttt[22] == value && ttt[32] == value) {
            $('.cross').css({ 'height': '240px', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%, -50%) rotate(0deg)', 'opacity': '1', 'display': 'block' })
            $('.winner').css('display', 'block')
            console.log('wonnnn')
            winner = true
        }

        if (ttt[13] == value && ttt[23] == value && ttt[33] == value) {
            $('.cross').css({ 'height': '240px', 'top': '50%', 'left': '85.4%', 'transform': 'translate(-50%, -50%) rotate(0deg)', 'opacity': '1', 'display': 'block' })
            $('.winner').css('display', 'block')
            console.log('wonnnn')
            winner = true
        }
        if (ttt[11] == value && ttt[22] == value && ttt[33] == value) {
            $('.cross').css({ 'height': '335px', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%, -50%) rotate(135deg)', 'opacity': '1', 'display': 'block' })
            $('.winner').css('display', 'block')
            console.log('wonnnn')
            winner = true
        }
        if (ttt[13] == value && ttt[22] == value && ttt[31] == value) {
            $('.cross').css({ 'height': '335px', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%, -50%) rotate(45deg)', 'opacity': '1', 'display': 'block' })
            $('.winner').css('display', 'block')
            console.log('wonnnn')
            winner = true
        }
        if (i == 1) {
            checkme == true
        }
        //check if all sqaures arfilled 
    }

    if (checkme == true) {
        var count = 0
        for (var i = 11; i <= 33; i++) {
            if (ttt[i] != ' ') {
                count++
            }
        }
        if (count == 9) {
            $('.winner').css('display', 'block')
            $('.winner').text('Draw')
            winner = true
        }
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

function aiMove(t) {
    bestscore = -1000
    var arrayval = [11, 12, 13, 21, 22, 23, 31, 32, 33];
    for (var i = 0; i < 9; i++) {
        var val = arrayval[i]
        if (t[val] == ' ') {
            t[val] = 'o'
            var score = minimax(t, 0, false)
            t[val] = ' '
            if (bestscore == null) {
                bestscore = score
                bestmove = val
            } else if (score > bestscore) {
                bestscore = score
                bestmove = val
            }
        }
    }
    return bestmove
}

/*/ function minimax(board, depth, isMaximizingPlayer):

    if current board state is a terminal state :
        return value of the board
    
    if isMaximizingPlayer :
        bestVal = -INFINITY 
        for each move in board :
            value = minimax(board, depth+1, false)
            bestVal = max( bestVal, value) 
        return bestVal

    else :
        bestVal = +INFINITY 
        for each move in board :
            value = minimax(board, depth+1, true)
            bestVal = min( bestVal, value) 
        return bestVal /*/

/*/ unction minimax(board, depth, isMaximizingPlayer):

    if current board state is a terminal state :
        return value of the board
    
    if isMaximizingPlayer :
        bestVal = -INFINITY 
        for each move in board :
            value = minimax(board, depth+1, false)
            bestVal = max( bestVal, value) 
        return bestVal

    else :
        bestVal = +INFINITY 
        for each move in board :
            value = minimax(board, depth+1, true)
            bestVal = min( bestVal, value) 
        return bestVal 
        /*/

function minimax(t, depth, isMaximizingPlayer) {
    var arrayval = [11, 12, 13, 21, 22, 23, 31, 32, 33];
    var result = checkWinner(t)
    if (result !== null) {
        return result
    }
    if (isMaximizingPlayer) {
        console.log('got here')
        var bestscore = -Infinity
        for (var i = 0; i < 9; i++) {
            var val = arrayval[i]
            if (t[val] == ' ') {
                t[val] = 'o'
                var score = minimax(t, depth + 1, false)
                t[val] = ' '
                bestscore = Math.max(score, bestscore)
            }
        }
        return bestscore
    } else {
        var bestscore = +Infinity
        for (var i = 0; i < 9; i++) {
            var val = arrayval[i]
            if (t[val] == ' ') {
                t[val] = 'x'
                var score = checkWinner(t)

                t[val] = ' '
                bestscore = Math.min(score, bestscore)
            }
        }
        return bestscore
    }
}

function checkWinner(t) {
    if (t[11] == 'x' && t[12] == 'x' && t[13] == 'x') {
        return -1
    }
    if (t[21] == 'x' && t[22] == 'x' && t[23] == 'x') {
        return -1
    }
    if (t[31] == 'x' && t[32] == 'x' && t[33] == 'x') {
        return -1
    }
    if (t[11] == 'x' && t[21] == 'x' && t[31] == 'x') {
        return -1
    }
    if (t[12] == 'x' && t[22] == 'x' && t[32] == 'x') {
        return -1
    }
    if (t[13] == 'x' && t[23] == 'x' && t[33] == 'x') {
        return -1
    }
    if (t[11] == 'x' && t[22] == 'x' && t[33] == 'x') {
        return -1
    }
    if (t[13] == 'x' && t[22] == 'x' && t[31] == 'x') {
        return -1
    }
    if (t[11] == 'o' && t[12] == 'o' && t[13] == 'o') {
        return 1
    }
    if (t[21] == 'o' && t[22] == 'o' && t[23] == 'o') {
        return 1
    }
    if (t[31] == 'o' && t[32] == 'o' && t[33] == 'o') {
        return 1
    }
    if (t[11] == 'o' && t[21] == 'o' && t[31] == 'o') {
        return 1
    }
    if (t[12] == 'o' && t[22] == 'o' && t[32] == 'o') {
        return 1
    }
    if (t[13] == 'o' && t[23] == 'o' && t[33] == 'o') {
        return 1
    }
    if (t[11] == 'o' && t[22] == 'o' && t[33] == 'o') {
        return 1
    }
    if (t[13] == 'o' && t[22] == 'o' && t[31] == 'o') {

        return 1
    }
    return null
}