const createPlayer = function(pName, marker, score){
    let details = document.querySelector(`.player-${marker}`)
    showScore = () => score;
    increaseScore = () => score++;
    
    return {pName, showScore, increaseScore, marker, details }
};

function GameBoard(play1, play2, sc1, sc2) {
    const squares = document.querySelectorAll('.square')
    const p1 = createPlayer(play1, 'X', sc1)
    const p2 = createPlayer(play2, 'O', sc2)
    let ticker = 0;
    let tempScore = [
        [],
        []
    ]

    p1.details.classList.toggle('js-current')

    squares.forEach((sq, i) => {
        const location = parseInt(sq.dataset.position)
        sq.addEventListener('click', () => {
            
            //Logic to not double select a position already selected
            if (sq.innerHTML){
                return
            } else {
                ticker++
                if(ticker%2 != 0){ 
                    p2.details.classList.toggle('js-current')
                    p1.details.classList.remove('js-current')
                    sq.innerHTML = p1.marker
                    tempScore[0].push(location)
                } else {
                    p1.details.classList.toggle('js-current')
                    p2.details.classList.remove('js-current')
                    sq.innerHTML = p2.marker
                    tempScore[1].push(location)
                }
            }

            //combo() checks if any player matched 3 in a row/column/diagonal
            if(ticker >= 9 && (!combo(tempScore[0]) && !combo(tempScore[1]))) {
                    alert('Game Over')
                    document.location.reload()
            } else {
                if(combo(tempScore[0])){
                    alert(`${p1.pName} wins!`)
                    p1.increaseScore()
                    localStorage.setItem('p1Score', `${p1.showScore()}`)
                    document.location.reload()
                } else if(combo(tempScore[1])){
                    alert(`${p2.pName} wins!`)
                    p2.increaseScore()
                    localStorage.setItem('p2Score', `${p2.showScore()}`)
                    document.location.reload() 
                }
            }         
        });
    });
}

function startGame() {
    let score1 = localStorage.getItem('p1Score')
    let score2 = localStorage.getItem('p2Score')
    const p1 = document.getElementById('p1').value
    const p2 = document.getElementById('p2').value
    const p1Score = document.getElementById('p1Score')
    const p2Score = document.getElementById('p2Score')

    if(!p1 || !p2) {
        alert("Please input players' names")
    }
    
    if (!score1) {
        p1Score.innerHTML = `score: 0`
    } else {
        p1Score.innerHTML = `score: ${score1}`
    }
    
    if (!score2) {
        p2Score.innerHTML = `score: 0`
    }  else {
        p2Score.innerHTML = `score: ${score2}`
    }
    GameBoard(p1, p2, score1, score2)
};

//IIFE to restart score 
(function restart(){
    restButton = document.querySelector('.restart')
    console.log(restButton);
    restButton.addEventListener('click', function() {
         localStorage.clear()
         document.location.reload()
    })
})();

function combo(arr) {
    //checks matching combiantions based on middle, top-left and bottom-right positions
   if((arr.includes(5) &&
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
        
        return true
    }
    return false;
}

   

