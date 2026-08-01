// Open the letter page with a smooth fade effect
function openLetter(){

    let name = document.getElementById("friendName").value.trim();

    if(name==""){
        alert("Please enter your name ❤️");
        return;
    }

    localStorage.setItem("friendName", name);

    window.location.href="letter.html";
}

// Smooth fade when page loads
window.onload = function () {
    document.body.style.opacity = "1";
};

// Floating sparkle effect
setInterval(() => {
    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";
    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = "-20px";
    sparkle.style.fontSize = (Math.random() * 15 + 15) + "px";
    sparkle.style.animation = "sparkleFall 5s linear forwards";
    sparkle.style.pointerEvents = "none";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 5000);

}, 700);

// Add sparkle animation
const style = document.createElement("style");

style.innerHTML = `
@keyframes sparkleFall{
0%{
transform:translateY(0) rotate(0deg);
opacity:1;
}
100%{
transform:translateY(110vh) rotate(360deg);
opacity:0;
}
}
body{
transition:opacity .6s;
opacity:0;
}
`;

document.head.appendChild(style);
