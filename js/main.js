/* ===================================
   PAA ESTATES - MAIN JAVASCRIPT
   =================================== */


// ---------- MOBILE NAVIGATION ----------


const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");


if (menuToggle && navLinks) {


    menuToggle.addEventListener("click", () => {


        const isOpen = navLinks.classList.toggle("active");


        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );


    });


}





// Close menu when clicking a link


const links = document.querySelectorAll(".nav-links a");


links.forEach(link => {


    link.addEventListener("click", () => {


        navLinks.classList.remove("active");


        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );


    });


});





// ---------- HEADER SHADOW ON SCROLL ----------


const header = document.querySelector(".header");


window.addEventListener("scroll", () => {


    if (window.scrollY > 50) {


        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.08)";


    } else {


        header.style.boxShadow = "none";


    }


});





// ---------- PROPERTY SEARCH ----------


const searchForm = document.querySelector(".search-box");


if (searchForm) {


    searchForm.addEventListener(
        "submit",
        (event) => {


            event.preventDefault();


            const location =
            document.querySelector("#location").value;


            const type =
            document.querySelector("#type").value;



            alert(
                `Searching for ${type} in ${location || "all locations"}`
            );


        }
    );


}





// ---------- NEWSLETTER FORM ----------


const newsletterForm =
document.querySelector(".newsletter-form");



if(newsletterForm){


    newsletterForm.addEventListener(
        "submit",
        (event)=>{


            event.preventDefault();


            alert(
                "Thank you for subscribing to Paa Estates!"
            );


            newsletterForm.reset();


        }

    );


}





// ---------- CURRENT YEAR FOOTER ----------


const footerYear =
document.querySelector(".footer-year");



if(footerYear){


    footerYear.textContent =
    new Date().getFullYear();


}





// ---------- SIMPLE SCROLL REVEAL ----------


const revealElements =
document.querySelectorAll(
    ".property-card, .service-card, .agent-card, .testimonial-card"
);



const revealOnScroll = () => {


    revealElements.forEach(element => {


        const elementTop =
        element.getBoundingClientRect().top;


        const windowHeight =
        window.innerHeight;



        if(elementTop < windowHeight - 100){


            element.classList.add("fade-in");


        }


    });


};



window.addEventListener(
    "scroll",
    revealOnScroll
);



revealOnScroll();