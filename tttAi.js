function makeMove(board, player){
    var arrayval = [11, 12, 13, 21, 22, 23, 31, 32, 33]
    var bestMove = -1;
    var bestScore = -2;
    for(var i = 0; i < 9; ++i){
        var move = arrayval[i];
        if(board[move] == EMPTY){
            board[move] = player;
            var score = -minimax(board, player * -1);
            board[i] = EMPTY;
            if(score > bestScore){
                bestScore = score;
                bestMove = arrayval[i];
            }
        }
    }
    return bestMove;
}