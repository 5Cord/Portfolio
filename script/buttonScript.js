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

document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("myModal");

  modal.classList.add("active"); // Добавляем класс "active" для активации модального окна

  setTimeout(function() {
      modal.classList.remove("active"); // Убираем класс "active" для исчезновения модального окна
  }, 2000); // Закрыть модальное окно через 2 секунды
});
