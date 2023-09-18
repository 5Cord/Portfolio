// Функция для открытия модального окна
function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Запретить прокрутку фона
  }
  
  // Функция для закрытия модального окна
  function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Включить прокрутку фона
  }
  
  // Закрыть модальное окно, если пользователь щелкает за его пределами
  window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
      closeModal();
    }
  }
  