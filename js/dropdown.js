const dropDownBnt = document.querySelector('.dropdown__button');
const dropDownList = document.querySelector('.dropdown__list');
const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
const dropDownInput = document.querySelector('.dropdown__input-hidden');



// Тут блок клик по кнопке (открыть закрыть)
dropDownBnt.addEventListener('click', function () {
    dropDownList.classList.toggle('dropdown__list--visible');
    this.classList.add('.dropdown__button--active');
});

// Тут блок выбора элемента списка (выбираем значение, закрываем дропдаун)
dropDownListItems.forEach(function (ListItem) {
    ListItem.addEventListener('click', function (e) {
        e.stopPropagation();
        dropDownBnt.innerText = this.innerText;
        dropDownBnt.focus(); 
        // dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove('dropdown__list--visible');
})
})

// Закрываем дропдаун снаружи по клику
document.addEventListener('click', function (e) {
    console.log('Document Click');
    if (e.target !== dropDownBnt) {
        dropDownBnt.classList.remove('dropdown__button--active');
        dropDownBnt.classList.remove('dropdown__list--visible');
    }
})

// Закрываем по эскейпу и табу
document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
        dropDownBnt.classList.remove('dropdown__button--active');
        dropDownList.classList.remove('dropdown__list--visible');
}
})