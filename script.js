const button = document.getElementById('button');
const close = document.getElementById('close');
const container = document.getElementById("container");
button.addEventListener("click", ()=> {
    container.classList.add("active");
});
close.addEventListener("click" , () => {
    container.classList.remove("active");
})