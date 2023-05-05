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
if (document.getElementsByClassName("bg-code").length != 0) {
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
} else if (document.getElementsByClassName("orb").length != 0) {
    setInterval(function() {
        let rainbow = ["red orb", "orange orb", "yellow orb", "green orb", "blue orb", "purple orb"];
        if (document.getElementsByClassName("orb").length < 15) {
            let new_orb = document.createElement("span");
            new_orb.style.display = "block";
            new_orb.style.left = String((Math.random() * 85) + 15) + "%";
            new_orb.className = rainbow[Math.floor(Math.random() * 6)];
            document.getElementsByTagName("header")[0].appendChild(new_orb);
        }
        document.getElementsByClassName("orb")[Math.floor(Math.random() * document.getElementsByClassName("orb").length)].style.left = String((Math.random() * 80) + 15) + "%";
        document.getElementsByClassName("orb")[Math.floor(Math.random() * document.getElementsByClassName("orb").length)].className = rainbow[Math.floor(Math.random() * 6)];
    }, 100);
}