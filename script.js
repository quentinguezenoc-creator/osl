document.querySelectorAll('[data-target]').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const section = document.getElementById(
            this.dataset.target
        );

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    });

});