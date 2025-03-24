let cells = document.querySelectorAll('.cells');

let choice = [0,0,0,0,0,0,0,0,0];
let player = 'X';

const evaluate = (choice) =>{
    if(checkDiagonalPattern(choice) || checkHorizontalPattern(choice) || checkVerticalPattern(choice)){
        let res = document.querySelector("#result");
        res.textContent = player + " has won the game"
        return true;
    }
    else if(checkforDraw(choice)){
        let res = document.querySelector("#result");
        res.textContent = "It's  a Draw";
        return true;
    }
    else 
     return false;
}

const checkHorizontalPattern = (choice) =>{
    if(choice[0]==undefined && choice[3]==undefined && choice[6]==undefined)
        return false;
    else if(choice[0]!=0 && choice[0]==choice[1] && choice[1]==choice[2])
        return true;
    else if(choice[3]!=0 && choice[3]==choice[4] && choice[4]==choice[5])
        return true;
    else if(choice[6]!=0 && choice[6]==choice[7] && choice[7]==choice[8])
        return true;
    return false;
}

const checkVerticalPattern = (choice) =>{
    if(choice[0]==0 && choice[1] == 0 && choice[2] == 0)
        return false;
    else if(choice[0] !=0 && choice[0]==choice[3] && choice[3]==choice[6])
        return true;
    else if(choice[1]!=0 && choice[1]==choice[4] && choice[4]==choice[7])
        return true;
    else if(choice[2]!=0 && choice[2]==choice[5] && choice[5]==choice[8])
        return true;
    else
        return false;
}

const checkDiagonalPattern = (choice) =>{
    if(choice[0]==0 && choice[2]==0)
        return false;
    else if(choice[0]!=0 && choice[0]==choice[4] && choice[4]==choice[8])
        return true;
    else if(choice[2]!=0 && choice[2]==choice[4] && choice[4]==choice[6])
        return true;
    else
        return false;
}

const checkforDraw = (choice) =>{
    if(choice[0]!=0 && choice[1]!=0 && choice[2]!=0 && choice[3]!=0 &&
        choice[4]!=0 && choice[5]!=0 && choice[6]!=0 && choice[7]!=0 && choice[8]!=0)
    return true;
    return false;
}
const changePlayer = (player) =>{
    if(player=='X')
        return 'O'
    else
       return 'X';
}

const addResult = (choice,pos) =>{
    let ch = document.createElement('p');
    ch.classList.add('displaychoice');
    ch.innerText = choice;
    cells[pos].append(ch);
}

const makeChoice = (pos) =>{
    if(choice[pos]==0){
        choice[pos] = player;
        addResult(choice[pos],pos);
        if(evaluate(choice)){
            setTimeout(()=>{window.location.reload()},5000);
        }
        else{
            player = changePlayer(player);
        }
    }
    else
    {
        let res = document.querySelector("#result");
        res.textContent = "Pos " + pos + " was already choosen by " + choice[pos];
    }
}

cells[0].addEventListener("click",(evt)=>{
    makeChoice(0);
})


cells[1].addEventListener("click",(evt)=>{
    makeChoice(1);
})


cells[2].addEventListener("click",(evt)=>{
    makeChoice(2);
})


cells[3].addEventListener("click",(evt)=>{
    makeChoice(3);
})


cells[4].addEventListener("click",(evt)=>{
    makeChoice(4);
})


cells[5].addEventListener("click",(evt)=>{
    makeChoice(5);
})


cells[6].addEventListener("click",(evt)=>{
    makeChoice(6);
})


cells[7].addEventListener("click",(evt)=>{
    makeChoice(7);
})


cells[8].addEventListener("click",(evt)=>{
    makeChoice(8);
})

// cells[1].addEventListener("click",(evt)=>{
//     if(choice[1]==0){
//         choice[1]=player;
//         player = changePlayer(player);
//         addResult(choice[1],1);
//     }
//     else
//         console.log("It was already choosen by",choice[1]);
// })

// cells[2].addEventListener("click",(evt)=>{
//     alert("Box-3");
//     console.log(evt);
// })