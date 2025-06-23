const searchInput = document.querySelector('input'); // или точный селектор, например: '#searchInput'
const chatItems = document.querySelectorAll('.main-chat__left-item');

searchInput.addEventListener('input', () => {
   const filter = searchInput.value.toLowerCase();

   chatItems.forEach(item => {
      const authorElement = item.querySelector('.main-chat__item-author');
      if (!authorElement) return;

      const author = authorElement.textContent.toLowerCase();
      if (author.includes(filter)) {
         item.style.display = ''; // показать
      } else {
         item.style.display = 'none'; // скрыть
      }
   });
});