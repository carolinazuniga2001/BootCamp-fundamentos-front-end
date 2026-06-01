const btnTop = document.getElementById("btnTop");
if (btnTop) {
    btnTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}