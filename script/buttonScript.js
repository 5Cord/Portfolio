  document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'Index.html';
  });

  const customCursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    // Перемещаем курсор вместе с мышью
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
});

// Дополнительные эффекты можно добавить здесь, например, анимации при наведении на элементы

document.addEventListener("DOMContentLoaded", function () {
  const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches; // Указать медиа-запрос для мобильных экранов

  if (isMobile) {
      const modal = document.querySelector(".modall");

      // Показать модальное окно
      modal.style.display = "flex";

      // Закрыть модальное окно после 4 секунд (1 секунда на плавное исчезновение)
      setTimeout(function () {
          modal.style.display = "none";
      }, 4000);
  }
});
