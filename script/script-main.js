const category = document.querySelector('.button-category')
const categoryList = document.querySelector('.button-category__list')
const chooseList = document.querySelector('.button-choose__list')
const categoryListItemDr = document.querySelector('.button-category__list-item-dr')
const categoryListItemEvent = document.querySelector('.button-category__list-item-event')
const categoryListItemDead = document.querySelector('.button-category__list-item-dead')
const categoryListItems = document.querySelector('.button-category__list-item-all')
const create = document.querySelector('.button-create')
const share = document.querySelector('.publish-button')
const choose = document.querySelector('.button-choose')
const newsForm = document.querySelector('.main-block__news-form')
let newsButtons = document.querySelectorAll('.news__button')
const chatDate = document.querySelector('.main-chat__right-date')

category.onclick = () => {
   categoryList.classList.toggle("button-category__list--acvtive")
}
categoryListItemDr.onclick = () => {
   const eventItems = document.querySelectorAll('.event')
   const deadItems = document.querySelectorAll('.dead')
   const drItems = document.querySelectorAll('.dr')
   drItems.forEach(el => el.classList.add('main-block__news-item--active'));
   deadItems.forEach(el => el.classList.remove('main-block__news-item--active'));
   eventItems.forEach(el => el.classList.remove('main-block__news-item--active'));
}
categoryListItemDead.onclick = () => {
   const eventItems = document.querySelectorAll('.event')
   const deadItems = document.querySelectorAll('.dead')
   const drItems = document.querySelectorAll('.dr')
   drItems.forEach(el => el.classList.remove('main-block__news-item--active'));
   deadItems.forEach(el => el.classList.add('main-block__news-item--active'));
   eventItems.forEach(el => el.classList.remove('main-block__news-item--active'));
}
categoryListItemEvent.onclick = () => {
   const eventItems = document.querySelectorAll('.event')
   const deadItems = document.querySelectorAll('.dead')
   const drItems = document.querySelectorAll('.dr')
   drItems.forEach(el => el.classList.remove('main-block__news-item--active'));
   deadItems.forEach(el => el.classList.remove('main-block__news-item--active'));
   eventItems.forEach(el => el.classList.add('main-block__news-item--active'));
}
categoryListItems.onclick = () => {
   const item = document.querySelectorAll('.main-block__news-item')
   item.forEach(el => el.classList.add('main-block__news-item--active'));
}

let isCreated = true
create.onclick = () => {

   if (create.innerHTML === "Вернуться") {
      location.reload()
   } else {
      category.classList.toggle('button-category--disabled')
      share.classList.toggle('button-share--active')
      choose.classList.toggle('button-choose--active')
      newsForm.classList.toggle('main-block__news-form--disabled')
      const items = document.querySelectorAll('.main-block__news-item')
      items.forEach(el => el.classList.remove('main-block__news-item--active'));

      newsButtons.forEach(el => {
         el.classList.remove('news__button--disabled')
      })

      const expandedElements = document.querySelectorAll('[class*="--expanded"]');
      expandedElements.forEach(el => {
         el.classList.forEach(cls => {
            if (cls.includes('--expanded')) {
               el.classList.remove(cls)
            }
         })
      })
   }

   newsButtons = document.querySelectorAll('.news__button')
   isCreated = !isCreated
   create.textContent = isCreated ? "Создать объявление" : "Вернуться"
   console.log(newsButtons)

}

let textareaTitle = document.querySelector('.main-block__input-title')

share.onclick = () => {
   const mainBlockNewsList = document.querySelector('.main-block__news-list')
   if (mainBlockNewsList) {
      const added = document.createElement('li');
      added.className = 'main-block__news-item ' + activeCategory;
      added.innerHTML = `
      <div class="main-block__news-title">${textareaTitle.value}</div>
                        <div class="main-block__news-info">
                           <div class="main-block__news-info-inner">
                              <div class="news__date">23.06.2025</div>
                              <div class="news__autor">Автор: Admin</div>
                           </div>
                           <div class="news__button button">Подробнее...</div>
                        </div>
      `;
      mainBlockNewsList.appendChild(added)
   }
   isCreated = !isCreated
   create.textContent = isCreated ? "Создать объявление" : "Вернуться"

   category.classList.toggle('button-category--disabled')
   share.classList.toggle('button-share--active')
   choose.classList.toggle('button-choose--active')
   newsForm.classList.add('main-block__news-form--disabled')
   const items = document.querySelectorAll('.main-block__news-item')
   items.forEach(el => el.classList.remove('main-block__news-item--active'));
   const item = document.querySelectorAll('.main-block__news-item')
   item.forEach(el => el.classList.add('main-block__news-item--active'));

   newsButtons = document.querySelectorAll('.news__button')
   console.log(newsButtons)
}

choose.onclick = () => {
   chooseList.classList.toggle("button-choose__list--active")
}

let activeCategory = 'dr'

document.querySelector('.button-choose__list-item-dr').onclick = () => {
   activeCategory = 'dr'
}
document.querySelector('.button-choose__list-item-event').onclick = () => {
   activeCategory = 'event'
}
document.querySelector('.button-choose__list-item-dead').onclick = () => {
   activeCategory = 'dead'
}

let isOpened = true

const newsList = document.querySelector('.main-block__news-list');

newsList.addEventListener('click', (e) => {
   const button = e.target.closest('.news__button');
   if (!button) return;

   let newsBlock = button.closest('.main-block__news-item');
   let newsBlockInfo = button.closest('.main-block__news-info');
   let newsBlockInfoInner = button.previousElementSibling;
   let newsBlockDate = newsBlockInfoInner?.querySelector('.news__date');

   document.querySelectorAll('.main-block__news-item').forEach(newsItem => {
      newsItem.classList.remove('main-block__news-item--active');
   });

   if (newsBlock) {
      newsBlock.classList.add('main-block__news-item--active');
      newsBlock.classList.toggle('main-block__news-item--expanded');
      newsBlockInfo?.classList.toggle('main-block__news-info--expanded');
      newsBlockInfoInner?.classList.toggle('main-block__news-info-inner--expanded');
      newsBlockDate?.classList.toggle('news__date--expanded');
   }
   isOpened = !isOpened;
   create.textContent = isOpened ? "Создать объявление" : "Вернуться";

   document.querySelectorAll('.news__button').forEach(el => {
      el.classList.add('news__button--disabled');
   });

   category.classList.toggle('button-category--disabled');
   share.classList.toggle('button-share--active');
});