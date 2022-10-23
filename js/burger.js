document.querySelector('.burger').addEventListener('click',
    function () {
        document.querySelector('.burger span').classList.toggle('active');
        document.body.classList.toggle('overflow-hidden');
        document.querySelector('.mob-menu-top ').classList.toggle('animate');
    }) 