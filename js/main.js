// Global Variables
let nums = document.querySelectorAll(".stats .box span");
let stats = document.querySelector(".stats") ;
let started = false; // Function Started ? No
let h1stats = document.querySelector('.stats h1');
//add event scroll
window.onscroll = function () {
  //make the stats in veiw port 
  if (window.scrollY >= stats.offsetTop) {
    //call the startcount() if not started
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
    h1stats.classList.add("fill-width");
  } 
  //call upDwon function
  upDwon();
  //call progress()
  progress();
}; 
//define the startCount()   
function startCount(el) {
  let goal = el.getAttribute('goal');
  let count = setInterval(() => {
    el.textContent++;
    //stop the setInterval()
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
} 
/* start an event behavuior */
// select variables 
let days = document.querySelector('.event .days');
let houres = document.querySelector('.event .hours');
let minutes = document.querySelector('.event .minutes');
let second = document.querySelector('.event .second');
//set the counter variable
let timer = setInterval(()=>{
  second.textContent -- ;
  if(second.textContent == 0){
    second.textContent = 60 ;
    minutes.textContent --;
    if(minutes.textContent == 0){
      minutes.textContent = 59 ;
      houres.textContent -- ;
      if(houres.textContent == 0){
        houres.textContent = 24 ;
        days.textContent -- ;
        if(days.textContent == 0){
          clearInterval(timer);
        }
      }
    }
   }
},1000);
// show and hide up & dwon icon
function upDwon(){
  
  if (window.scrollY > 1200){
    up.classList.add('show')
  }
  else{
    up.classList.remove('show') 
  }
  if (window.scrollY > 13000){
    dwon.classList.remove('show')
  }
  else{
    dwon.classList.add('show') 
  }
};
// start upDown section  -- select up & Dwon 
 let up = document.querySelector('.upDwon .up');
let dwon = document.querySelector('.upDwon .dwon');
//add event click
 up.onclick = ()=>{
   window.scrollTo({
     top : 0 ,
     behavior : "smooth"
  }) 
    }
 //add event click
 dwon.onclick = ()=>{
   window.scrollTo({
     top : 17000 ,
     behavior : "smooth"
   }) 
   };
// start skills section
let skills = document.querySelector('.our-skills');
let spans = document.querySelectorAll('.the-progress span') 
function progress(){
  if (window.scrollY >= skills.offsetTop ){
     spans.forEach((span)=>{
      span.style.width = span.dataset.progress;
    })
  }
}   
//define navigation menue
let otherLinks = document.querySelector('.header li a[href="#OtherLinks"]');
let menu = document.querySelector('.mega-menu .container');
 otherLinks.onclick=()=>{
  menu.classList.toggle('show');
}