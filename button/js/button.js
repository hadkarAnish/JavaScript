var btnId = document.getElementById('btn');

btnId.addEventListener("click", function() {
    btnId.innerHTML = parseInt(btnId.innerHTML) + 1;
});