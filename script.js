const questions = document.querySelectorAll('.question');

questions.forEach((e) => {
    const icon = e.querySelector('i');
    e.addEventListener('click', () => {
        if (e.classList.contains('closed')) {
            questions.forEach((element) => {
                if (element.classList.contains('opened')) {
                    element.classList.remove('opened');
                    element.classList.add('closed');
                    element.querySelector('i').classList.add('fa-plus');
                    element.querySelector('i').classList.remove('fa-times');
                }
            });
            e.classList.remove('closed');
            e.classList.add('opened');
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-times');
        } else {
            e.classList.remove('opened');
            e.classList.add('closed');
            icon.classList.add('fa-plus');
            icon.classList.remove('fa-times');
        }
    });
});
