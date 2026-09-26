/* ======================================================
   PORTAL
   JAVASCRIPT
====================================================== */


/* ======================================================
   ANO
====================================================== */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



/* ======================================================
   TEMA CLARO / ESCURO
====================================================== */

const themeToggle =
    document.getElementById("themeToggle");


const themeIcon =
    document.getElementById("themeIcon");


const savedTheme =
    localStorage.getItem("portal-theme");



/*
    CARREGA TEMA SALVO
*/

if (savedTheme === "dark") {

    document.body.classList.add(
        "dark-theme"
    );

    changeIcon(true);

}



/*
    ALTERAR TEMA
*/

themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark-theme"
        );


        const isDark =
            document.body.classList.contains(
                "dark-theme"
            );


        changeIcon(isDark);


        localStorage.setItem(
            "portal-theme",
            isDark
                ? "dark"
                : "light"
        );

    }
);



/*
    TROCA LUA / SOL
*/

function changeIcon(isDark) {

    if (isDark) {

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

}



/* ======================================================
   ANIMAÇÃO DE ENTRADA
====================================================== */

const intro =
    document.querySelector(
        ".hero-intro"
    );


const cards =
    document.querySelectorAll(
        ".area-card"
    );


/*
    INTRO
*/

intro.classList.add("reveal");


setTimeout(() => {

    intro.classList.add(
        "visible"
    );

}, 100);



/*
    CARDS
*/

cards.forEach(
    (card, index) => {

        card.classList.add(
            "reveal"
        );


        setTimeout(() => {

            card.classList.add(
                "visible"
            );

        }, 350 + (index * 140));

    }
);



/* ======================================================
   EFEITO DE MOVIMENTO DOS CARDS
   SOMENTE DESKTOP
====================================================== */

const canHover =
    window.matchMedia(
        "(hover: hover)"
    ).matches;



if (canHover) {

    cards.forEach(card => {


        card.addEventListener(
            "mousemove",
            event => {

                /*
                    Efeito extremamente
                    sutil de perspectiva.
                */

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    (y - centerY) /
                    centerY * -1.2;


                const rotateY =
                    (x - centerX) /
                    centerX * 1.2;


                card.style.transform =
                    `
                    translateY(-10px)
                    perspective(900px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    `;

            }
        );



        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";

            }
        );

    });

}