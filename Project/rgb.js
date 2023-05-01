const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    let code = 'rgb(';
    code += `${Math.floor(Math.random() * 256).toString()},`;
    code += `${Math.floor(Math.random() * 256).toString()},`;
    code += `${Math.floor(Math.random() * 256).toString()})`;
    console.log(color);
    document.body.style.backgroundColor = code;
    color.textContent = code;
});