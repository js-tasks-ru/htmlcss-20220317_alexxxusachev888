(function() {
    const close = document.getElementById('popup-close');
    const popup = document.getElementById('popup');
    const popupOpen = document.getElementById('popup-open');

    if (!close || !popupOpen || !popup) {
        return;
    }

    popupOpen.addEventListener('click', () => {
        popup.style.display = 'block';
        document.body.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        popup.style.display = 'none';
        document.body.overflow = 'initial';
    });
})();