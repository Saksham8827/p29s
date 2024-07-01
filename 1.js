let content=document.getElementById("div1").textContent;
 console.log(content)                         //golbal scope



function show(){
    let str="<h1>hello</h1>";
    let store=document.getElementById("div1");//function scope 
        store.innerHTML=str;
                                                       
}
function reset(){
    // let content="this is my content";
    let store =  document.getElementById("div1");
    store.innerHTML = content;
}