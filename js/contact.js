/* ===================================
   PAA ESTATES - CONTACT JAVASCRIPT
   =================================== */


const contactForm = document.querySelector("#contactForm");


if (contactForm) {


    contactForm.addEventListener("submit", function(event) {


        event.preventDefault();



        const name =
        document.querySelector("#name").value.trim();


        const email =
        document.querySelector("#contactEmail").value.trim();


        const message =
        document.querySelector("#message").value.trim();





        // Basic validation


        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {


            alert(
                "Please fill in all required fields."
            );


            return;


        }





        // Email validation


        const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



        if (!emailPattern.test(email)) {


            alert(
                "Please enter a valid email address."
            );


            return;


        }





        // Success message


        alert(
            `Thank you ${name}! Your message has been sent.`
        );



        contactForm.reset();



    });


}