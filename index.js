console.log("working...");
// function changeText() {
//      document.getElementById("heading").innerText = "MERN stack";
// };

// document.getElementsByTagName("h1")[0]

function currentTime() {
    let date = new Date();  
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  currentTime();

//   function changeText(){
//   let element = document.getElementById("four");
//   element.innerText = "Welcome to Elevation academy";
// }
 
function changeText(){
let element = document.getElementById("four");
element.innerText = "";
}

const array = [0,1,0,1,2,3,4,5,6]
var a = array.filter((y)=> {
    return y % 2 ==0;
})
console.log(a);
var b = array.filter((y)=> {
    return y % 2 !==0;
})
console.log(b);
let zeros = 0;
let one = 0;
for(let c=0;c<array.length;c++){
if(array[c]==0){
    zeros++
}
else if (array[c] ==1){
    one++
}

}
console.log(zeros);
console.log(one);


const str= "ravikant";
let number = 0;
str.split("").filter(x =>{
    if (x==="a"|| x==="e"||x==="i"||x==="o"||x==="u")
    number ++;
})
console.log(number);

