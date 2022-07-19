let ann = document.querySelector('#ann');
let tre = document.querySelector('#tre');

ann.addEventListener('click', (element) => {
  document.querySelector('.announcements').style.display =
    'flex';
  document.querySelector('.trending').style.display =
    'none';
  ann.style.backgroundColor = '#fff';
  ann.style.color = '#06040d';
  ann.style.boxShadow = '2px 4px 8px black inset';

  tre.style.backgroundColor = '#06040d';
  tre.style.color = '#fff';
});
tre.addEventListener('click', (element) => {
  document.querySelector('.trending').style.display =
    'flex';
  document.querySelector('.announcements').style.display =
    'none';
  tre.style.backgroundColor = '#fff';
  tre.style.color = '#06040d';
  tre.style.boxShadow = '2px 4px 8px black inset';

  ann.style.backgroundColor = '#06040d';
  ann.style.color = '#fff';
});
