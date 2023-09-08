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
