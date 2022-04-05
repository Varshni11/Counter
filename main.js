let btn_increment=document.querySelector(".increment");
let btn_decrement=document.querySelector(".decrement");
let count=document.querySelector(".count");
btn_increment.addEventListener('click',function(){
  count.textContent=Number.parseInt(count.textContent)+1;
  if(count.textContent === "1"){
    btn_decrement.disabled=false;
  }
});
btn_decrement.addEventListener('click',function(){
  count.textContent=Number.parseInt(count.textContent)-1;
  if(count.textContent === "0"){
    btn_decrement.disabled=true;
  }
});
