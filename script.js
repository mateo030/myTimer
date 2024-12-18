const editButton = document.querySelector('.edit');
const resetButton = document.querySelector('.reset');
const stopButton = document.querySelector('.stop');

const sideNav = document.querySelector('.sidenav');
const openNav = document.getElementById('openNav');
const closeNav = document.querySelector('.sidenav-close')

const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const close = document.querySelector('.close');

openNav.addEventListener("click", () => {
    sideNav.style.width = "250px";    
})

closeNav.addEventListener("click", () => {
    sideNav.style.width = "0";
})


//OPENS AND CLOSES MODAL
editButton.addEventListener("click", () => {
    modal.style.display = "block";
});

close.addEventListener("click", () => {
    modalContent.classList.add('closing');
    setTimeout(() => {
        modal.style.display = "none";
        modalContent.classList.remove('closing');
    }, 400);
});

//DISPLAYS SELECT TIME
function displayTime() { 
    const selects = document.querySelectorAll('.select');
    for (let select of selects) {
        for (let i = 0; i < 60; i++) {
            let optionHTML = `<option value="${i}">${i}</option>`
            select.innerHTML += optionHTML;
        }
    }
}

displayTime();
displayTimeMin();