let letterCounts = {};
let wordCounts = {};

document.getElementById("countButton").onclick = function() {
    letterCounts = {};
    wordCounts = {};
    // reset counts when button is clicked
    var typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    // This changes all the letter to lower case.
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    // This gets rid of all the characters except letters, spaces, and apostrophes.
    // We will learn more about how to use the replace function in an upcoming lesson.

    countLetters(typedText)
    countWords(typedText)
    appendCounts()
}

// count letters in text area
function countLetters(input) {
    for (let i = 0; i < input.length; i++) {
        currentLetter = input[i];
        if(letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }
    }
}

// count words in text area
function countWords(input) {
    const words = input.split(" ");
    for (let i = 0; i < words.length; i++) {
        currentWord = words[i];
        if(wordCounts[currentWord] === undefined) {
            wordCounts[currentWord] = 1;
        } else {
            wordCounts[currentWord]++;
        }
    }
}

// append data to page
function appendCounts() {
    document.getElementById('lettersDiv').innerHTML = ''
    document.getElementById('lettersGraph').innerHTML = ''
    document.getElementById('wordsDiv').innerHTML = ''
    document.getElementById('wordsGraph').innerHTML = ''
    // clear page before adding new counts
    for (let letter in letterCounts) {
        const span = document.createElement("span");
        const textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");

        const div = document.createElement("div")
        div.class = "bar"
        div.style.height = "10px"
        div.style.width = letterCounts[letter]*10 + "px"
        div.style.backgroundColor = "gray"
        div.style.marginBottom = "1px"

        span.appendChild(textContent);
        document.getElementById("lettersDiv").appendChild(span);
        document.getElementById("lettersGraph").appendChild(div);
    }
    for (let word in wordCounts) {
        const span = document.createElement("span");
        const textContent = document.createTextNode('"' + word + "\": " + wordCounts[word] + ", ");

        const div = document.createElement("div")
        div.class = "bar"
        div.style.height = "10px"
        div.style.width = wordCounts[word]*50 + "px"
        div.style.backgroundColor = "gray"
        div.style.marginBottom = "1px"

        span.appendChild(textContent);
        document.getElementById("wordsDiv").appendChild(span);
        document.getElementById("wordsGraph").appendChild(div);
    }
}
