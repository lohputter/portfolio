function showQuote() {
    document.getElementById("quote").style.display = "block";
    let quote = "Work hard, play hard.";
    let i = 0;
    setInterval(function() {
        if (i < quote.length) {
            document.getElementById("quote").innerHTML += quote.charAt(i);
            i++;
        }
    }, 50);
}