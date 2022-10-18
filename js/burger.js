document.querySelector('.burger').addEventListener('click',
    function () {
        document.querySelector('.burger span').classList.toggle('active');
        document.querySelector('.mob-menu-top ').classList.toggle('animate');
    }) 