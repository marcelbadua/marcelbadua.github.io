document.querySelector('.nav-toggle')
    .addEventListener('click', () => {
        document.getElementById('site-header')
            .classList.toggle('nav-open');
    });