import Notiflix from 'notiflix';

const openBookRoomBtn = document.querySelectorAll('.open-book-room-btn');
const openBookTableBtn = document.querySelectorAll('.open-book-table-btn');
const openRoomPriceModal = document.querySelectorAll('.open-room-price-btn');

const modalCloseBtns = document.querySelectorAll('.modal-close-button');
const bookRoomSubmitBtn = document.querySelector('.book-room-submit-btn');
const bookTableSubmitBtn = document.querySelector('.book-table-submit-btn');
const priceSubmitBtn = document.querySelector('.room-price-submit-btn');

const bookRoomModal = document.getElementById('bookRoomModal');
const bookTableModal = document.getElementById('bookTableModal');
const roomPriceModal = document.getElementById('roomPriceModal');

openBookRoomBtn.forEach(element => {
  element.addEventListener('click', e => {
    e.preventDefault();
    bookRoomModal.classList.remove('is-hidden');
  });
});

openBookTableBtn.forEach(element => {
  element.addEventListener('click', e => {
    e.preventDefault();
    bookTableModal.classList.remove('is-hidden');
  });
});

openRoomPriceModal.forEach(element => {
  element.addEventListener('click', e => {
    e.preventDefault();
    roomPriceModal.classList.remove('is-hidden');
  });
});

modalCloseBtns.forEach(modalCloseBtn => {
  modalCloseBtn.addEventListener('click', e => {
    e.preventDefault();
    e.currentTarget.parentNode.parentNode.parentNode.classList.add('is-hidden');
  });
});

bookRoomSubmitBtn.addEventListener('click', e => {
  e.preventDefault();
  bookRoomModal.classList.add('is-hidden');
  Notiflix.Notify.success('Вітаємо, бронювання успішно оформлене!');
});

bookTableSubmitBtn.addEventListener('click', e => {
  e.preventDefault();
  bookTableModal.classList.add('is-hidden');
  Notiflix.Notify.success('Вітаємо, бронювання успішно оформлене!');
});

priceSubmitBtn.addEventListener('click', e => {
  e.preventDefault();
  roomPriceModal.classList.add('is-hidden');
  Notiflix.Notify.success('Вітаємо, бронювання успішно оформлене!');
});
