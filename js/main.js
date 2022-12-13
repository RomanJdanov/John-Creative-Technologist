const viewAll = document.querySelector('.view-all');
const hiddenCard = document.querySelectorAll('.hidden');

viewAll.addEventListener('click', function(){
  if (viewAll.innerText === 'View all') {
    viewAll.innerText = 'Hide all'
  } else {
    viewAll.innerText = 'View all'
  }
  for (let i = 0; i < hiddenCard.length; i++) {
    const element = hiddenCard[i];
    element.classList.toggle('hidden')
  }
})

