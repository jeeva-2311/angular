const colors = ["turquoise", "lightblue", "lightcyan", "lightgreen", "limegreen", "lightcoral", "lightyellow", "lightgoldenrodyellow", "lightsalmon", "lightpink","lightseagreen","lightskyblue","lightsteelblue","lightyellow"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click",() => {
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});