/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

// Ждем полной загрузки DOM перед выполнением
document.addEventListener('DOMContentLoaded', function() {
  
  const likeHeartArray = document.querySelectorAll('.like-icon');
  const likeButtonArray = document.querySelectorAll('.card__like-button');
  const iconButtonArray = document.querySelectorAll('.card__icon-button');

  iconButtonArray.forEach((iconButton, index) => {
    iconButton.onclick = () =>
      toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
  });

  likeButtonArray.forEach((button, index) => {
    button.onclick = () => toggleIsLiked(likeHeartArray[index], button);
  });

  function toggleIsLiked(heart, button) {
    heart.classList.toggle('is-liked');
    setButtonText(heart, button);
  }

  function setButtonText(heart, button) {
    if ([...heart.classList].includes('is-liked')) {
      setTimeout(
        () => (button.querySelector('.button__text').textContent = 'Unlike'),
        500
      );
    } else {
      setTimeout(
        () => (button.querySelector('.button__text').textContent = 'Like'),
        500
      );
    }
  }

  // ===== ОБРАБОТЧИКИ ДЛЯ КНОПОК "СОХРАНИТЬ НА ПАМЯТЬ" И "ОК" =====

  const saveButton = document.querySelector('.save__button');
  const dialog = document.getElementById('dialog');
  const closeButton = document.querySelector('.dialog__close');

  if (saveButton && dialog) {
    saveButton.addEventListener('click', function(event) {
      event.preventDefault();
      dialog.showModal();
    });
  }

  if (closeButton && dialog) {
    closeButton.addEventListener('click', function(event) {
      event.preventDefault();
      dialog.close();
    });
  }

  // Защита от перезагрузки для всех форм
  const forms = document.querySelectorAll('form');
  forms.forEach(function(form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
    });
  });
  
});