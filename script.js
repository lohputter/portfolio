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
setInterval(function() {
    document.getElementsByClassName('bg-code')[Math.floor(Math.random() * document.getElementsByClassName("bg-code").length)].innerHTML += Math.floor(Math.random() * 2);
    for (let i=0; i<document.getElementsByClassName("bg-code").length; i++) {
        if (document.getElementsByClassName("bg-code")[i].clientWidth >= document.getElementById("cca-title").clientWidth) {
            document.getElementsByClassName("bg-code")[i].innerHTML = "X".repeat(document.getElementsByClassName("bg-code")[i].innerHTML.length);
            document.getElementsByClassName("bg-code")[i].style.opacity = 0.5;
            setTimeout(function() {
                document.getElementsByClassName("bg-code")[i].style.opacity = 1;
                document.getElementsByClassName("bg-code")[i].innerHTML = "";
            }, 100); 
        } 
    }
}, 20);