const createPlayer = function(pName, marker){
    let score = 0
    showScore = () => score;
    increaseScore = () => score++;
    return {pName, marker, showScore, increaseScore }
};

const gameBoard = function() {
    const p1 = createPlayer('player 1', 'X')
    const p2 = createPlayer('player 2', 'O')
    const squares = document.querySelectorAll('.square')
    const squareList = []
    const squareList2 = []
    let ticker = 0;
    let marker;

    squares.forEach((sq) => {
        const location = parseInt(sq.dataset.position)
        sq.addEventListener('click', () => {
            ticker++
            if(ticker%2 != 0){ 
                marker = 'X'
                squareList.push(location)
            } else {
                marker = 'O'
                squareList2.push(location)
            }
            sq.innerHTML = marker

            if(ticker < 8){
                if(combo(squareList, '1', ticker)){
                console.log(`player: 1 wins!`)
                } else if(combo(squareList2, '2', ticker)){
                    console.log(`player: 2 wins!`)
                }   
            } else {
                console.log(`Game Over`)
            }
        }); 
});
}

function combo(arr, playerName, ticker) {
    //Check possible combinations using the middle position (5) and the 2 diagonal extremes 1 and 9
    if(arr.length <= 2){
        return
    }
    if(ticker < 8){
        if(
            (arr.includes(5) &&
            ((arr.includes(1) && arr.includes(9) ) ||
            (arr.includes(2) && arr.includes(8) ) ||
            (arr.includes(3) && arr.includes(7) ) ||
            (arr.includes(4) && arr.includes(6) )))  ||
            
            (arr.includes(1) &&
            ((arr.includes(2) && arr.includes(3) ) ||
            (arr.includes(4) && arr.includes(7) ))) ||
            
            (arr.includes(9) &&
            ((arr.includes(6) && arr.includes(3) ) ||
            (arr.includes(7) && arr.includes(8) )
            )) ){
            return playerName
        }
    } else {
        return false;
    }
}
gameBoard()

   

