const servicesModal = document.getElementById("services-modal");
const modalContent = document.getElementsByClassName("modal-content")[0];
const servicesInfoBox = document.getElementsByClassName("services-info-box");
const btnClose = document.getElementsByClassName("btn-close")[0];
const modalInformation = document.getElementsByClassName("modal-information");

// FUNCTIONS
function showModal() {
    servicesModal.style.display = "flex";
    modalContent.style.animation = "fade-in 0.5s ease";
}

function hideModal() {
    setTimeout(() => {
        servicesModal.style.display = "none";
        for (const informationBoxes of modalInformation) {
            informationBoxes.style.display = "none";
        }
    }, 190);
    modalContent.style.animation = "fade-out 0.2s ease";
}


// CALL FUNCTIONS
for (const infoBoxes of servicesInfoBox) {

    let infoBoxesTitle = infoBoxes.getElementsByTagName('h4')[0].innerHTML;
    infoBoxes.onclick = function () {
        showModal();
        for (const information of modalInformation) {
            let informationTitle = information.getElementsByTagName('h3')[0].innerHTML;

            if (infoBoxesTitle === informationTitle) {
                information.style.display = "block";
            }
        }
    }
}

btnClose.onclick = function () {
    hideModal();
}