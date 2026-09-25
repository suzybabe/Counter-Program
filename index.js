//Counter program functionality

//asign values and store in const
const decBtn= document.getElementById("decBtn");
const resBtn=document.getElementById("resBtn");
const incBtn=document.getElementById("incBtn");
const countlabel = document.getElementById("countlabel");

let count = 0;

incBtn.onclick = function(){
    count++;
    countlabel.textContent= count;
}
decBtn.onclick = function(){
    count--;
    countlabel.textContent= count;
}
resBtn.onclick = function(){
     //reset count to 0
     count = 0;  
    countlabel.textContent= count;
}
