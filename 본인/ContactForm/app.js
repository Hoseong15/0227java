let sendButton =document.getElementById('send');
let resetButton = document.getElementById('reset');
let form = document.getElementById('form')

form.addEventListener('submit', function(e) {
  console.log('submit')
  e.preventDefault()
})

sendButton.addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  localStorage.setItem('name', name)
  localStorage.setItem('email', email)
  localStorage.setItem('message', message)
});


// resetButton.addEventListener('click', function() {
//   document.getElementById('name').value = '';
//   document.getElementById('email').value = '';
//   document.getElementById('message').value = '';
// })


//////// forEach문으로 작성 //////

resetButton.addEventListener('click', function() {
  const each = ['name', 'email', 'message'];
  each.forEach((a) => {
    const each1 = document.getElementById(a);
    each1.value = '';
  });
});


//////// for문으로 작성 //////

// resetButton.addEventListener('click', function() {
//   const each = ['name', 'email', 'message'];
//   for (let i = 0; i < each.length; i++) {
//     const each1 = document.getElementById(each[i]);
//     each1.value = '';
//   }
// });
