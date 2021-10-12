const colors=["yellow","orange","grey","#4287f5","pink","red","green","violet","aqua","chocolate","darkkhaki"];
const btn=document.getElementById('btn');
const color=document.querySelector('.color');
btn.addEventListener("click",function(){
const randomValue=getRandomValue();
document.body.style.backgroundColor=colors[randomValue];
color.textContent=colors[randomValue];
});

function getRandomValue(){
    return Math.floor(Math.random() * colors.length);
}