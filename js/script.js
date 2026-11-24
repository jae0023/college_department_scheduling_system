
/* ==============================
   PASSWORD VISIBILITY
============================== */

function togglePassword() {
    const password = document.getElementById("password");
    const eye = document.getElementById("loginEye");

    password.type = password.type === "password" ? "text" : "password";

    eye.classList.toggle("fa-eye");
    eye.classList.toggle("fa-eye-slash");
}

function toggleSignupPassword() {
    const password = document.getElementById("signupPassword");
    const eye = password.parentElement.querySelector(".password-toggle i");

    password.type = password.type === "password" ? "text" : "password";

    eye.classList.toggle("fa-eye");
    eye.classList.toggle("fa-eye-slash");
}

function toggleConfirmPassword() {
    const password = document.getElementById("confirmPassword");
    const eye = password.parentElement.querySelector(".password-toggle i");

    password.type = password.type === "password" ? "text" : "password";

    eye.classList.toggle("fa-eye");
    eye.classList.toggle("fa-eye-slash");
}


/* ==============================
   OPEN SIGNUP MODAL
============================== */

function openSignup() {
    document.getElementById("signupModal").classList.add("active");
}


/* ==============================
   CLOSE SIGNUP MODAL
============================== */

function closeSignup() {
    document.getElementById("signupModal").classList.remove("active");
}


/* ==============================
   LOGIN FUNCTION
============================== */

function login(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter your email and password.");
        return;
    }

    alert("Login frontend is working! PHP authentication still needs to be connected.");
}


/* ==============================
   SIGNUP FORM VALIDATION
============================== */

document.addEventListener("DOMContentLoaded", function() {

    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const signupModal = document.getElementById("signupModal");

    // LOGIN FORM
    if (loginForm) {
        loginForm.addEventListener("submit", login);
    }


    // SIGNUP FORM
    if (signupForm) {

        signupForm.addEventListener("submit", function(event) {

            event.preventDefault();

            const password = document.getElementById("signupPassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            const assessment = document.getElementById("assessmentForm");

            // CHECK PASSWORD MATCH
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            // CHECK PASSWORD LENGTH
            if (password.length < 8) {
                alert("Password must contain at least 8 characters.");
                return;
            }

            // CHECK ASSESSMENT FORM
            if (!assessment.files || assessment.files.length === 0) {
                alert("Please upload your assessment form.");
                return;
            }

            // CHECK FILE SIZE (5MB)
            const file = assessment.files[0];

            if (file.size > 5 * 1024 * 1024) {
                alert("Assessment form must not exceed 5MB.");
                assessment.value = "";
                document.getElementById("fileName").textContent =
                    "Click to upload assessment form";
                return;
            }

            // CHECK FILE TYPE
            const allowedTypes = [
                "application/pdf",
                "image/jpeg",
                "image/png"
            ];

            if (!allowedTypes.includes(file.type)) {
                alert("Only PDF, JPG, and PNG files are allowed.");
                assessment.value = "";
                document.getElementById("fileName").textContent =
                    "Click to upload assessment form";
                return;
            }

            alert("Signup form validated! PHP registration and file upload still need to be connected.");

        });

    }


    // DISPLAY SELECTED FILE NAME
    const assessmentInput = document.getElementById("assessmentForm");

    if (assessmentInput) {

        assessmentInput.addEventListener("change", function() {

            const fileName = document.getElementById("fileName");

            if (this.files.length > 0) {

                fileName.textContent = this.files[0].name;

            } else {

                fileName.textContent = "Click to upload assessment form";

            }

        });

    }


    // CLOSE MODAL WHEN CLICKING OUTSIDE
    if (signupModal) {

        signupModal.addEventListener("click", function(event) {

            if (event.target === signupModal) {
                closeSignup();
            }

        });

    }


    // CLOSE MODAL USING ESCAPE KEY
    document.addEventListener("keydown", function(event) {

        if (event.key === "Escape") {
            closeSignup();
        }

    });

});
