// Обработчик события клика на кнопку
function goBack() {
  window.history.back(); // Переход на предыдущую страницу
}

// Найти кнопку по её идентификатору или классу
var backButton = document.getElementById("backButton"); // Или document.getElementsByClassName('backButton');

// Добавить обработчик события клика на кнопку
backButton.addEventListener("click", goBack);

window.addEventListener('scroll', function() {
  var button = document.querySelector('.href');
  var scrollPosition = window.pageYOffset;
  var windowHeight = window.innerHeight;
  var fullHeight = document.documentElement.scrollHeight;

  if (scrollPosition > 100 && (scrollPosition + windowHeight) < fullHeight) {
    button.style.display = 'block'; // Показать кнопку при прокрутке страницы
  } else {
    button.style.display = 'none'; // Скрыть кнопку при возвращении вверх страницы или при достижении самого низа
  }
});

