//text animation
let getHappyText = document.querySelector('#happy');
let getNewText = document.querySelector('#new');
let getYearText = document.querySelector('#year');

let startAnimation = (getText) => {
   let text = getText.textContent;
   let splitText = text.split("");

   getText.textContent = "";

   splitText.forEach(t => {
      getText.innerHTML += "<span class='newtext'>"+t+"</span>";
   });

   let newtext = document.querySelectorAll('.newtext');
   let character = 0;
   let textAnimation = () => {
      newtext[character].classList.add("animation");
      character++;

      if(character == newtext.length){
      clear();
      }
   }

   let timer = setInterval(textAnimation, 200);

   let clear = () => {
      clearInterval(timer);
   }


}

startAnimation(getHappyText);
startAnimation(getNewText);
startAnimation(getYearText);

//date 

let two = document.querySelector("#two");
let three = document.querySelector("#three");
let twenty = document.querySelectorAll(".twenty");
let colors = ["#1e1f1f", "#ff1e96", "#1e90ff", "#bcd3c7"];
let count = 0;
let changeColor = (date) => {
   date.style.color = colors[count];
   count++;
   if(count > colors.length){
      count = 0;
   }
}

setInterval(() => {
   twenty.forEach(twy => {
      twy.classList.add("twyAnimation");
   })
}, 300)

setInterval(() => {
   changeColor(two);
   changeColor(three);
}, 400);


