/* ===================================
   PAA ESTATES - PROPERTY FILTERING
   =================================== */


const propertyCards =
document.querySelectorAll(".property-card");


const propertySearch =
document.querySelector(".property-filter .search-box");



if (propertySearch) {


    propertySearch.addEventListener(
        "submit",
        function(event){


            event.preventDefault();



            const location =
            propertySearch
            .querySelector("input")
            .value
            .toLowerCase();



            const type =
            propertySearch
            .querySelector("select")
            .value
            .toLowerCase();





            propertyCards.forEach(card => {


                const text =
                card.textContent.toLowerCase();



                const matchesLocation =
                location === "" ||
                text.includes(location);



                const matchesType =
                type === "all properties" ||
                text.includes(type);





                if (
                    matchesLocation &&
                    matchesType
                ) {


                    card.style.display = "block";


                } else {


                    card.style.display = "none";


                }



            });



        }

    );


}