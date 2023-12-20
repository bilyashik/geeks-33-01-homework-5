var maxLength = 100;

function updateCounter() {
    var textInput = document.getElementById('textInput');
    var counter = document.getElementById('counter');

    var currentLength = textInput.value.length;
    counter.textContent = currentLength + ' / ' + maxLength;

    if (currentLength > maxLength) {
        counter.style.color = 'red';
        textInput.classList.add('exceeded-border');
        highlightExceededCharacters();
    } else {
        counter.style.color = 'black';
        textInput.classList.remove('exceeded-border');
    }
}

function highlightExceededCharacters() {
    var textInput = document.getElementById('textInput');
    var counter = document.getElementById('counter');

    var currentLength = textInput.value.length;
    var exceededLength = currentLength - maxLength;

    var highlightedText = (currentLength - exceededLength) + ' <span id="exceeded">' + exceededLength + '</span> / ' + maxLength;
    counter.innerHTML = highlightedText;
}