function bigWord() {

    let phrase = document.getElementById('word').value;

    const myList = phrase.split("");

    let biggestWord = myList[0];

    for(1=1; 1 < myList.length; i++) {
        if(biggestWord.length < myList[i].length) {
            biggestWord = myList[i];

        }

    }
    document.getElementById('myBigWord').innerHTML = "A maior palavra da frase indicada é: " + biggestWord;
}