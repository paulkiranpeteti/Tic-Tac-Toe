let cells = document.querySelectorAll('.cells');

let choice = [0,0,0,0,0,0,0,0,0];
let player = 'X';

const evaluate = (choice) =>{
    if(checkHorizontalPattern(choice))
        console.log("You Win!!");
    else
        console.log("You Lose!");
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

cells[0].addEventListener("click",(evt)=>{
    if(choice[0]==0){
        choice[0]=player;
        player = changePlayer(player);
        addResult(choice[0],0);
    }
    else
        console.log("It was already choosen by",choice[0]);
})

cells[1].addEventListener("click",(evt)=>{
    if(choice[1]==0){
        choice[1]=player;
        player = changePlayer(player);
        addResult(choice[1],1);
    }
    else
        console.log("It was already choosen by",choice[1]);
})

cells[2].addEventListener("click",(evt)=>{
    alert("Box-3");
    console.log(evt);
})

cells[3].addEventListener("click",(evt)=>{
    if(choice[3]==0){
        choice[3]=player;
        player = changePlayer(player);
        addResult(choice[3],3);
    }
    else
        console.log("It was already choosen by",choice[3]);
})