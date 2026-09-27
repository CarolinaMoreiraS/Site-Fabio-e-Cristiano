/* =====================================================
   CGCS — PORTAL / HOME
===================================================== */


/* =====================================================
   ELEMENTOS
===================================================== */

const header =
    document.getElementById("header");

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    document.getElementById("themeIcon");

const menuToggle =
    document.getElementById("menuToggle");

const nav =
    document.getElementById("nav");

const cards =
    document.querySelectorAll("[data-card]");



/* =====================================================
   HEADER AO ROLAR
===================================================== */

function updateHeader() {

    if (window.scrollY > 25) {

        header.classList.add(
            "scrolled"
        );

    } else {

        header.classList.remove(
            "scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);


updateHeader();



/* =====================================================
   MENU MOBILE
===================================================== */

menuToggle.addEventListener(
    "click",
    () => {

        nav.classList.toggle(
            "open"
        );


        const icon =
            menuToggle.querySelector("i");


        if (
            nav.classList.contains("open")
        ) {

            icon.classList.remove(
                "fa-bars"
            );

            icon.classList.add(
                "fa-xmark"
            );

        } else {

            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );

        }

    }
);



/* =====================================================
   FECHAR MENU AO CLICAR
===================================================== */

document
    .querySelectorAll(".nav a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                nav.classList.remove(
                    "open"
                );


                const icon =
                    menuToggle.querySelector("i");


                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }
        );

    });



/* =====================================================
   DARK MODE
===================================================== */

const savedTheme =
    localStorage.getItem(
        "cgcs-theme"
    );


if (savedTheme === "dark") {

    document.body.classList.add(
        "dark-theme"
    );


    themeIcon.classList.remove(
        "fa-moon"
    );

    themeIcon.classList.add(
        "fa-sun"
    );

}



themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark-theme"
        );


        const darkMode =
            document.body.classList.contains(
                "dark-theme"
            );


        if (darkMode) {

            themeIcon.classList.remove(
                "fa-moon"
            );

            themeIcon.classList.add(
                "fa-sun"
            );

        } else {

            themeIcon.classList.remove(
                "fa-sun"
            );

            themeIcon.classList.add(
                "fa-moon"
            );

        }


        localStorage.setItem(
            "cgcs-theme",
            darkMode
                ? "dark"
                : "light"
        );

    }
);



/* =====================================================
   REVEAL AO ROLAR
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add(
                                "visible"
                            );


                        revealObserver
                            .unobserve(
                                entry.target
                            );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);



/* =====================================================
   EFEITO 3D NOS CARDS
===================================================== */

cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            /*
                No celular não executamos
                o efeito de perspectiva.
            */

            if (
                window.innerWidth < 900
            ) {
                return;
            }


            const rect =
                card.getBoundingClientRect();


            const mouseX =
                event.clientX -
                rect.left;


            const mouseY =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                (
                    mouseY -
                    centerY
                ) / 45;


            const rotateY =
                (
                    centerX -
                    mouseX
                ) / 45;


            card.style.transform =
                `
                    perspective(1000px)
                    translateY(-8px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                `;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});



/* =====================================================
   ANO AUTOMÁTICO
===================================================== */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



/* =====================================================
   ESC FECHA MENU
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            nav.classList.remove(
                "open"
            );


            const icon =
                menuToggle.querySelector("i");


            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );

        }

    }
);
/* =====================================================
   FORMULÁRIO CGCS
===================================================== */

const contactForm =
    document.getElementById("contactForm");

const telefone =
    document.getElementById("telefone");

const mensagem =
    document.getElementById("mensagem");

const charCount =
    document.getElementById("charCount");

const formStatus =
    document.getElementById("formStatus");


/* CONTADOR */

mensagem.addEventListener("input", () => {

    charCount.textContent =
        `${mensagem.value.length} / 500`;

});


/* MÁSCARA TELEFONE */

telefone.addEventListener("input", event => {

    let value =
        event.target.value.replace(/\D/g, "");

    value =
        value.substring(0, 11);


    if (value.length > 10) {

        value = value.replace(
            /^(\d{2})(\d{5})(\d{4})$/,
            "($1) $2-$3"
        );

    } else if (value.length > 6) {

        value = value.replace(
            /^(\d{2})(\d{4})(\d{0,4})$/,
            "($1) $2-$3"
        );

    } else if (value.length > 2) {

        value = value.replace(
            /^(\d{2})(\d+)/,
            "($1) $2"
        );

    } else if (value.length > 0) {

        value = value.replace(
            /^(\d{0,2})/,
            "($1"
        );

    }


    event.target.value = value;

});


/* ENVIO */

contactForm.addEventListener("submit", event => {

    event.preventDefault();


    if (!contactForm.checkValidity()) {

        contactForm.reportValidity();

        return;

    }


    formStatus.className =
        "form-status success";


    formStatus.textContent =
        "Formulário preenchido corretamente. Preparando o envio...";

});