const accordion=document.querySelector(".accordion")

accordion.addEventListener("click",(e)=>{
  console.log(e.target.closest(".panel"));
  const panel=e.target.closest(".panel");
  if(!panel) return;
  toggleAccordion(panel); 
})

function toggleAccordion(panel){
  const siblings=siblingFunc(panel)
  siblings.map(hide)
  const btn=panel.querySelector(".btns");
  const isPanelOpened=btn.getAttribute("aria-expanded");
  if(isPanelOpened==="true"){
    panel
      .querySelector(".btns")
      .setAttribute("aria-expanded",false)
    panel
      .querySelector(".content")
      .setAttribute("aria-hidden",true)
  }
  else{   
    panel
      .querySelector(".btns")
      .setAttribute("aria-expanded",true)
    panel
      .querySelector(".content")
      .setAttribute("aria-hidden",false)
  }
  
}
function hide(panel){
   panel
      .querySelector(".btns")
      .setAttribute("aria-expanded",false)
    panel
      .querySelector(".content")
      .setAttribute("aria-hidden",true)
}
const siblingFunc=(n) => [...n.parentElement.children].filter(c=>c!=n)