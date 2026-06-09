console.log("Portafolio cargado correctamente");

const panels =
document.querySelectorAll(".energy-panel");

const title =
document.getElementById("energyTitle");

const description =
document.getElementById("energyDescription");

const modal =
document.getElementById("energyModal");

const modalTitle =
document.getElementById("modalTitle");

const modalText =
document.getElementById("modalText");

const modalImage =
document.getElementById("modalImage");

const closeModal =
document.getElementById("closeModal");

panels.forEach(panel => {

    const panelTitle =
    panel.querySelector(".panelTitle");

    const panelShort =
    panel.querySelector(".panelShort");

    if(panelTitle){

        panelTitle.textContent =
        panel.dataset.title;
    }

    if(panelShort){

        panelShort.textContent =
        panel.dataset.short;
    }

    panel.addEventListener("click", () => {

        panels.forEach(p =>
            p.classList.remove("active")
        );

        panel.classList.add("active");

        title.textContent =
        "¿Cómo puedo aportar en esta área?";

        description.textContent =
        panel.dataset.contribution;
    });

});

document.addEventListener("click", e => {

    if(e.target.classList.contains("moreBtn")){

        const panel =
        e.target.closest(".energy-panel");

        modalTitle.textContent =
        panel.dataset.title;

        modalText.textContent =
        panel.dataset.full;

        modalImage.style.backgroundImage =
        panel.style.backgroundImage;

        modal.classList.add("show");
    }

});

closeModal.addEventListener("click", () => {

    modal.classList.remove("show");
});

modal.addEventListener("click", e => {

    if(e.target === modal){

        modal.classList.remove("show");
    }

});