
let buttons = document.querySelectorAll(".button") 
let resetButton = document.querySelector("#reset-btn")
let newGame = document.querySelector("#new-game-btn")
let div = document.querySelector("div") 
let winingMsg = document.querySelector("#wining-msg")

let trunO: boolean = true // we have 2 Players , PlayerX and PlayerO , 


let winingPattrens = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]   //These all are wining patterns



buttons.forEach((buttons:any) =>{
    buttons.addEventListener("click",()=>{                 // our event is click, when  we click on buttons our click event occur as our click event is occured then what ever work we have done inside the arrow function will also occur
//for Player
        if(trunO == true){

            buttons.textContent = "X"
            trunO = false

        }else if(trunO == false){

            buttons.textContent = "O"
            trunO = true
        }

        buttons.disabled = true
        checkWinner()
        
     })
   
     
})



function disableResetButton(gettingResetBtn:any){

    gettingResetBtn.disabled = true    // as we won are disable Reset Button function is called and our reset button passed to the function parameter(gettingResetBtn) and finally reset button got disabled
}
function enableResetButton(gettingResetBtn:any){

    gettingResetBtn.disabled = false    // as we click the new game button we enable our reset  button
}
function enableButton(){

    buttons.forEach((buttons:any)=>{
        buttons.disabled = false     // when this function is called, the button get enabled
    })
}

function disbaleButton(){

    buttons.forEach((buttons:any)=>{
        buttons.disabled = true  // as we won this function is called and our buttons get disabled
    })
}


function winner(winner:any){

    div?.classList.remove("hide")
    winingMsg!.textContent = `Congratulations, Winner is ${winner}`
    disbaleButton()
    disableResetButton(resetButton)
    // also disale reset buttons as you win resestButton.disabled = true

}

function  checkWinner(){

    for(let val of winingPattrens){

    
        // (buttons[val[0]] , buttons[val[1]] , buttons[val[2]])   inside val we have all arrays, inside val[0] we have all elements of all array at index 0, now buttons[val[0]] here we are checking index of button if val[0] == 1 then buttons[val[0]] === buttons[1] (so we are checking buttons index 1 on  button index 1 there is a button) similarly for all .  we can  aslo check val[0] == 1 then buttons[val[0]].innerText === buttons[1],innerText this will give inner Text of button at index 1
        let pos1 = buttons[val[0]].textContent
        let pos2 = buttons[val[1]].textContent
        let pos3 = buttons[val[2]].textContent       // inside pos variables there is text content at the index of button like buttons[val[0]].innerText, if val[0] = 1 then  button[1].innerText either X or O
       
        if(pos1 !== "" && pos2 !=="" && pos3 !== "" ){
        
            if(pos1 === pos2 && pos2 === pos3){
                winner(pos1) 
                
             
            }

         }
    }
}



// if some one clicks the reset button

resetButton?.addEventListener("click", ()=>{    //if some one clicks reset button then game should be reset
    trunO = true
    enableButton()
    buttons.forEach((buttons)=>{
        buttons.textContent = ""
    })
    div?.classList.add("hide")
    
})

//if after win some one clicks on new game

newGame?.addEventListener("click",()=>{
    trunO = true
    enableButton()
    buttons.forEach((buttons)=>{
        buttons.textContent = ""
    })
    div?.classList.add("hide")
   
  enableResetButton(resetButton)
});


























// newGame?.addEventListener("click",()=>{

//     buttons.forEach((element:any) => {
      
//       element.textContent = ""
//       element.disabled = false
//     });
  
//     div?.classList.add("hide")
  
//   })