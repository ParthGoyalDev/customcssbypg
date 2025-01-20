// Add your JavaScript here
function main() {
    console.log('JavaScript Initialized...');

    const menuBtns = document.querySelectorAll(".menu-btn");
    const sidebar = document.querySelector('.sidebar');

    menuBtns.forEach(menuBtn => {
        menuBtn.addEventListener("click", () => {
            sidebar.classList.toggle('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    main();
});
