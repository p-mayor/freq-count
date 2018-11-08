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
    console.log(sortObj(letterCounts))
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

// append counts to divs
function appendCounts() {
    document.getElementById('lettersDiv').innerHTML = ''
    document.getElementById('wordsDiv').innerHTML = ''
    // clear page before adding new counts
    for (let letter in letterCounts) {
        const span = document.createElement("span");
        const textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
        span.appendChild(textContent);
        document.getElementById("lettersDiv").appendChild(span);
    }
    for (let word in wordCounts) {
        const span = document.createElement("span");
        const textContent = document.createTextNode('"' + word + "\": " + wordCounts[word] + ", ");
        span.appendChild(textContent);
        document.getElementById("wordsDiv").appendChild(span);
    }
}

function sortObj(object) {
    let sortable = []
    let sort_obj = {}
    for (var x in object) {
        sortable.push([x, object[x]]);
    }
    sortable.sort(function(a,b) {
        return a[1] - b[1]
    })
    
    for(let i in sortable) {
        sort_obj[i[0]] = sort_obj[i[1]]
    }
    return sort_obj
}