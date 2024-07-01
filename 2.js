function shownav(){
    let number=45;
    let nav=`<ul class="navstyle">
<li><a href="#">home${number}</a></li>
<li><a href="#">about</a></li>
<li><a href="#">contact</a></li>
<li><a href="#">blog</a></li>
</ul>`;


let store =document.getElementById('output');
store.innerHTML=nav;
}