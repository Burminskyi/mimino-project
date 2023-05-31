// const refs = {

// }

const openBookRoomBtn = document.querySelectorAll('.open-book-room-btn');
const modalCloseBtn = document.querySelector('.modal-close-button');

const bookRoomModal = document.getElementById('bookRoomModal');

openBookRoomBtn.forEach(element => {
  element.addEventListener('click', e => {
    e.preventDefault();
    bookRoomModal.classList.remove('is-hidden');
  });
});

modalCloseBtn.addEventListener('click', e => {
  e.preventDefault();
  bookRoomModal.classList.add('is-hidden');
});
