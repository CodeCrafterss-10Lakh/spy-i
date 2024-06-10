// script.js

document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");
    const floatingButton = document.querySelector(".floating-button");
    const queryForm = document.querySelector(".query-form");
    const plus = document.querySelector(".plus");
    const queryFormElement = document.getElementById("queryForm");
    const successPopup = document.getElementById("successPopup");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", () => {
            const answer = item.querySelector(".faq-answer");
            const isOpen = item.classList.contains("open");

            document.querySelectorAll(".faq-item").forEach(i => {
                i.classList.remove("open");
                i.querySelector(".faq-answer").style.display = "none";
            });

            if (!isOpen) {
                item.classList.add("open");
                answer.style.display = "block";
            }
        });
    });

    floatingButton.addEventListener("click", () => {
        const isFormVisible = queryForm.style.display === "flex";
        if (isFormVisible) {
            queryForm.style.display = "none";
            plus.textContent = "+";
        } else {
            queryForm.style.display = "flex";
            plus.textContent = "-";
        }
    });

    queryFormElement.addEventListener("submit", (e) => {
        e.preventDefault();

        // Close the form
        queryForm.style.display = "none";
        plus.textContent = "+";

        // Show success popup
        successPopup.style.display = "block";

        // Hide popup after 3 seconds
        setTimeout(() => {
            successPopup.style.display = "none";
        }, 3000);

        // Reset form
        queryFormElement.reset();
    });
});
