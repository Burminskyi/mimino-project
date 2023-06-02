// const refs = {

// }
import Notiflix from 'notiflix';

const openBookRoomBtn = document.querySelectorAll('.open-book-room-btn');
const modalCloseBtn = document.querySelector('.modal-close-button');
const bookRoomSubmitBtn = document.querySelector('.book-room-submit-btn');


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

bookRoomSubmitBtn.addEventListener('click', e => {
  e.preventDefault();
  bookRoomModal.classList.add('is-hidden');
  Notiflix.Notify.success('Вітаємо, бронювання успішно оформлене!');
});