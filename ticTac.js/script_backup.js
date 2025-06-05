const createPlayer = function(pName, marker){
    let score = 0
    showScore = () => score;
    increaseScore = () => score++;
    return {pName, marker, showScore, increaseScore }
};

const gameBoard = function() {
    const player1 = createPlayer('Uno', 'X')
    const player2 = createPlayer('Uno', 'O')
    const squares = document.querySelectorAll('.square')
    const squareList = []
    const squareList2 = []
    let ticker = 0
    let marker;

    squares.forEach((square) => {
        square.addEventListener('click', () => {
            ticker++
            if(ticker%2 == 0){
                marker = 'X'
                squareList2.push({location: gameFlow(square).location, marker})
            } else {
                marker = 'O'
                squareList.push({location: gameFlow(square).location, marker})
            }
            square.innerHTML = marker

            if (checkComb(squareList)){
                console.log('player1 wins')
            } else if (checkComb(squareList2)){
                console.log('player2 wins')
            }
        }); 
});
}

const gameFlow = function(sq) {
        const location = String(sq.dataset.row + sq.dataset.column + sq.dataset.diag)
        return {sq, location}
}

function checkComb(arr) {ce
    console.log(arr)
    //Case 1 - Position 11D1
    if(arr.length <= 2){
        return
    }    
    if(arr.includes('11D1') && (
        (arr.includes('120') && arr.includes('13D2')) || 
        (arr.includes('22M') && arr.includes('33D1')) || 
        (arr.includes('210') && arr.includes('31D2')) )) {
            console.log ('Case 1')
        }
    //Case 2 - Position 13D2
    if (arr.includes('13D2')  && (
        (arr.includes('22M') && arr.includes('31D2') ||
        arr.includes('230') && arr.includes('33D1') ))) {
            console.log ('Case 2')
        }
    //Case 3 - Position 320
    if(arr.includes('320')  && (
        (arr.includes('22M') && arr.includes('120')) || 
        (arr.includes('31D2') && arr.includes('33D1')) ) ){
            console.log ('Case 3')
        } else {
        console.log('Game Over')
    } 
    } 
gameBoard()

   

