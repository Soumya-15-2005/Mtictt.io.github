let buttons=document.getElementsByClassName("box");
let msg=document.getElementById("msg");
let audioTurn = new Audio("ting.mp3");
let song= new Audio("Gmusic.mp3");

let turn="X";
const changeturn=()=>{
    if(turn==="X"){
        return "0";
    }
    else{
        return "X";
    }
}
const checkwin=()=>{
    let boxset=document.getElementsByClassName("box");
    let win=[
        [0,1,2], //e[o]==0,e[1]==1,
        [3,4,5], //e[o]==3,e[1]==4,
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    win.forEach((e)=>{
         if ((boxset[e[0]].innerText === boxset[e[1]].innerText) &&
             (boxset[e[1]].innerText === boxset[e[2]].innerText) &&
               (boxset[e[0]].innerText !== "")) {
                let msg=document.querySelector("#msg");
                boxset[e[0]].style.backgroundColor="#afeeee";
                boxset[e[1]].style.backgroundColor="#afeeee";
                boxset[e[2]].style.backgroundColor="#afeeee";
               msg.innerText= "Congratulations!"+ " "+boxset[e[0]].innerText+" "+"is"+" "+"winner";              
             
        }
    })

}
//logic

Array.from(buttons).forEach((element) => {
         element.addEventListener("click", () => {
        if(element.innerText===''){
            element.innerText = turn;
               audioTurn.play();
               song.play();
             }
             checkwin();
             turn=  changeturn();
              
    });
});
//addonclick listener
reset.addEventListener("click",()=>{
     Array.from(buttons).forEach((element)=>{
        element.innerText=" ";
        element.style.backgroundColor="";
        let msg=document.getElementById("msg");
        msg.innerText= "The Game Is Reset Now";  
    
        
     })
})
//addonclick listener
newbtn.addEventListener("click",()=>{
    Array.from(buttons).forEach((element)=>{
       element.innerText=" ";
       element.style.backgroundColor="";
       msg.innerText= "WELCOME TO TIC TAC TOE";     
      

       
    })
})
