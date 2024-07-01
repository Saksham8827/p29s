// function home(){        // function for innerheight and innerwidth
//     window.location.href="windows.html";
//      window.open(index.html);
//    let h=window.innerHeight;
// /   let w=window.innerWidth;

//      console.log(h,w)
//    let x= window.event.clientX;
//    let y=window.event.clientY;

//    console.log(x,y)

// }

// //function for event 
// function run(){
//    let x=window.event.clientX;
//    let y=window.event.clientY
    

//    console.log(x,y)
// }

//fuction for prompt popup take input from user
// function windowexample(){

//    let number1=parseInt(window.prompt("enter number 1"));      //  parseint use
//    let number2=parseInt(window.prompt("enter number 2"));
//    window.alert(number1 + number2);
// }
function windowexample(){

let username=window.prompt("enter your user name");
let password=window.prompt("enter your password");                //username
window.alert(username+"\n"+password)                              //password
//if else part
 if(username){
          window.alert("successfull login");                                                                
 }else{
     window.alert("data not found");
 }
}

