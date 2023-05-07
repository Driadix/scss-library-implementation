# SCSS library implementation
Данный репозиторий содержит маленькую библиотеку компонентов, написанную с нуля на чистом SCSS. Данная библиотека создана исключительно в учебных целях как практика работы с препроцессорами.

Включает в себя 12-колончатую сетку, автоматически формирующиеся из переменных цвета (формирование по оттенку), сокращения для использования флекс свойств, а также шаблоны для ряда компонентов таких, как карточки, кнопки и навигационные панели.

Примеры использования библиотеки:

```html
//NAVBAR
<nav class="navbar bg-secondary text-black mb-2">
    <div class="container">
    <h2 class="navbar-title">Navbar</h2>
    <ul class="navbar-options gap-1">
      <li><a href="#" class="navbar-option">Nav option 1</a></li>
      <li><a href="#" class="navbar-option">Nav option 2</a></li>
      <li><a href="#" class="navbar-option">Nav option 3</a></li>
    </ul>
  </div>
  </nav>

//BUTTON
<div class="display-f align-center justify-center grow-0 shrink-0 wrap-1" style="gap: 4px">
<button class="btn-secondary">Button 1</button>

//CARD
<div class="col-12-xs col-5-sm col-3-xl">
  <div class="card bg-error">
    <h2 class="card-title">card title 1</h2>
    <p class="card-body">Card some text 1<a href="#" class="text-secondary-light-1 text-hover-primary">card link</a></p>
  </div>
  </div>
```

Изображение с рядом компонентов созданных с помощью библиотеки:
![image](https://user-images.githubusercontent.com/59824288/236685976-d543fcc6-40ba-46e3-82b5-32dd4d252860.png)


Все примеры с изображение можно посмотреть на [github-pages репозитория по данной ссылке](https://driadix.github.io/scss-library-implementation/).
