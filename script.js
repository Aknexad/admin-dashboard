let ann = document.querySelector('#ann');
let tre = document.querySelector('#tre');

ann.addEventListener('click', (element) => {
  document.querySelector('.announcements').style.display =
    'flex';
  document.querySelector('.trending').style.display =
    'none';
});
tre.addEventListener('click', (element) => {
  document.querySelector('.trending').style.display =
    'flex';
  document.querySelector('.announcements').style.display =
    'none';
});
