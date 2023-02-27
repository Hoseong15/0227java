let gallery = document.querySelector("#balloon-gallery");
let message = document.querySelector("#yay-no-balloons");
let popped = 0;
const balloons = document.querySelectorAll('.balloon');

balloons.forEach((b) => {
  b.addEventListener("mouseover", function (e) {
    b.style.backgroundColor = "#ededed";
    b.textContent = "POP!";
    if (!b.classList.contains('popped')) {
      popped++;
    }
    b.classList.add('popped');
    checkAllPopped();
  });
})

function checkAllPopped() {
  if (popped === 24) {
    gallery.innerHTML = "";
    message.style.display = "block";
  }
}





// let popped = 0;

// document.addEventListener('mouseover', function(e){
//     const balloons = document.querySelectorAll('.balloon');
//     balloons.forEach((balloon) => {
//         if (balloon === e.target){
//             balloon.style.backgroundColor = "#ededed";
//             balloon.textContent = "POP!";
//             popped++;
//             removeEvent(balloon);
//             checkAllPopped();
//         }
//     });
// });

// function removeEvent(balloon){
//     balloon.removeEventListener('mouseover', function(){
//     })
// };

// function checkAllPopped(){
//     if (popped === 24){
//         console.log('all popped!');
//         let gallery = document.querySelector('#balloon-gallery');
//         let message = document.querySelector('#yay-no-balloons');
//         gallery.innerHTML = '';
//         message.style.display = 'block';
//     }
// };
