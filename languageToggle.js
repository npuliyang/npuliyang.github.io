function switchLanguage(lang) {
    var allElements = document.getElementsByClassName('lang');
    for (var i = 0; i < allElements.length; i++) {
        allElements[i].style.display = 'none';
    }
    var langElements = document.querySelectorAll('[id^="' + lang + '"]');
    for (var i = 0; i < langElements.length; i++) {
        langElements[i].style.display = 'block';
    }
}

