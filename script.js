document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll('.slide-in-left, .slide-in-right');
    const imageElements = document.querySelectorAll('.image-load');

    const imagesLoaded = () => {
        return Array.from(imageElements).every(img => img.complete);
    };

    const handleScroll = () => {
        if (imagesLoaded()) {
            animatedElements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    if (element.tagName === "H2") {
                        element.classList.add('loaded');
                    } else if (element.tagName === "P") {
                        setTimeout(() => {
                            element.classList.add('loaded');
                        }, 500);
                    }
                }
            });
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

function validateAndShowModal() {
    const firstname = document.getElementById('firstname').value.trim();
    const email = document.getElementById('email').value.trim();
    const errorAlert = document.getElementById('errorAlert');

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const nameRegex = /^[a-zA-Z]+$/;

    if (firstname === "" || email === "" || !gmailRegex.test(email) || !nameRegex.test(firstname)) {
        errorAlert.textContent = firstname === "" || email === ""
            ? "Please fill out both the name and email fields."
            : !nameRegex.test(firstname)
            ? "Please enter a valid name (letters only)."
            : "Please enter a valid Gmail address.";
        errorAlert.classList.remove('d-none');
        setTimeout(() => {
            errorAlert.classList.add('d-none');
        }, 3000);
        return;
    }

    const modal = new bootstrap.Modal(document.getElementById('termsModal'));
    modal.show();
}

function showSuccessAlert(event) {
    event.preventDefault();
    const successAlert = document.getElementById('successAlert');
    successAlert.classList.remove('d-none');
    setTimeout(() => {
        successAlert.classList.add('d-none');
    }, 3000);
}
