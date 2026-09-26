/* =====================================================
   HEADER
===================================================== */

const header =
    document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =====================================================
   MENU MOBILE
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const nav =
    document.getElementById("nav");


menuToggle.addEventListener("click", () => {

    nav.classList.toggle("open");

});


document
    .querySelectorAll(".nav a")
    .forEach(link => {

        link.addEventListener("click", () => {
            nav.classList.remove("open");
        });

    });


/* =====================================================
   DARK / LIGHT
===================================================== */

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    document.getElementById("themeIcon");

const savedTheme =
    localStorage.getItem("terceiro-setor-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-theme");

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");

    const dark =
        document.body.classList.contains("dark-theme");


    if (dark) {

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    } else {

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

    }


    localStorage.setItem(
        "terceiro-setor-theme",
        dark ? "dark" : "light"
    );

});

/* =====================================================
   FORMULÁRIO DE CONTATO
===================================================== */

const contactForm =
    document.getElementById("contactForm");

const nomeInput =
    document.getElementById("nome");

const organizacaoInput =
    document.getElementById("organizacao");

const emailInput =
    document.getElementById("email");

const telefoneInput =
    document.getElementById("telefone");

const assuntoInput =
    document.getElementById("assunto");

const mensagemInput =
    document.getElementById("mensagem");

const privacidadeInput =
    document.getElementById("privacidade");

const charCount =
    document.getElementById("charCount");

const formMessage =
    document.getElementById("formMessage");


/* =====================================================
   CONTADOR DE CARACTERES
===================================================== */

mensagemInput.addEventListener(
    "input",
    () => {

        charCount.textContent =
            `${mensagemInput.value.length} / 500`;

    }
);


/* =====================================================
   MÁSCARA DE TELEFONE
===================================================== */

telefoneInput.addEventListener(
    "input",
    event => {

        let value =
            event.target.value.replace(/\D/g, "");


        value =
            value.substring(0, 11);


        if (value.length > 10) {

            value =
                value.replace(
                    /^(\d{2})(\d{5})(\d{4})$/,
                    "($1) $2-$3"
                );

        } else if (value.length > 6) {

            value =
                value.replace(
                    /^(\d{2})(\d{4})(\d{0,4})$/,
                    "($1) $2-$3"
                );

        } else if (value.length > 2) {

            value =
                value.replace(
                    /^(\d{2})(\d+)/,
                    "($1) $2"
                );

        } else if (value.length > 0) {

            value =
                value.replace(
                    /^(\d{0,2})/,
                    "($1"
                );

        }


        event.target.value =
            value;

    }
);


/* =====================================================
   VALIDAR E-MAIL
===================================================== */

function validEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email);

}


/* =====================================================
   ERRO DO CAMPO
===================================================== */

function setError(input, hasError) {

    const formGroup =
        input.closest(".form-group");


    if (!formGroup) {
        return;
    }


    if (hasError) {

        formGroup.classList.add(
            "error"
        );

    } else {

        formGroup.classList.remove(
            "error"
        );

    }

}


/* =====================================================
   REMOVER ERRO QUANDO DIGITAR
===================================================== */

[
    nomeInput,
    emailInput,
    telefoneInput,
    assuntoInput,
    mensagemInput
].forEach(input => {

    input.addEventListener(
        "input",
        () => {

            setError(
                input,
                false
            );

        }
    );


    input.addEventListener(
        "change",
        () => {

            setError(
                input,
                false
            );

        }
    );

});


/* =====================================================
   ENVIAR
===================================================== */

contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        let valid =
            true;


        /* NOME */

        if (
            nomeInput.value.trim().length < 2
        ) {

            setError(
                nomeInput,
                true
            );

            valid = false;

        }


        /* EMAIL */

        if (
            !validEmail(
                emailInput.value.trim()
            )
        ) {

            setError(
                emailInput,
                true
            );

            valid = false;

        }


        /* TELEFONE */

        const telefoneNumeros =
            telefoneInput.value.replace(
                /\D/g,
                ""
            );


        if (
            telefoneNumeros.length < 10
        ) {

            setError(
                telefoneInput,
                true
            );

            valid = false;

        }


        /* ASSUNTO */

        if (
            assuntoInput.value === ""
        ) {

            setError(
                assuntoInput,
                true
            );

            valid = false;

        }


        /* MENSAGEM */

        if (
            mensagemInput.value.trim().length < 5
        ) {

            setError(
                mensagemInput,
                true
            );

            valid = false;

        }


        /* PRIVACIDADE */

        if (
            !privacidadeInput.checked
        ) {

            formMessage.className =
                "form-message error";

            formMessage.textContent =
                "Você precisa concordar com o uso dos dados para enviar o contato.";

            valid = false;

        }


        /* SE HOUVER ERRO */

        if (!valid) {

            if (
                privacidadeInput.checked
            ) {

                formMessage.className =
                    "form-message error";

                formMessage.textContent =
                    "Confira os campos destacados antes de continuar.";

            }

            return;

        }


        /* =================================================
           MONTAR MENSAGEM
        ================================================= */

        const nome =
            nomeInput.value.trim();

        const organizacao =
            organizacaoInput.value.trim();

        const email =
            emailInput.value.trim();

        const telefone =
            telefoneInput.value.trim();

        const assunto =
            assuntoInput.value;

        const mensagem =
            mensagemInput.value.trim();


        const texto =

`Olá! Vim pelo site do Terceiro Setor.

*Nome:* ${nome}
*Organização:* ${organizacao || "Não informado"}
*E-mail:* ${email}
*Telefone:* ${telefone}
*Assunto:* ${assunto}

*Mensagem:*
${mensagem}`;



        /* =================================================
           NÚMERO DO WHATSAPP
           
           TROQUE PELO NÚMERO REAL:
           
           55 + DDD + NÚMERO
           
           Exemplo:
           5521999999999
        ================================================= */

        const whatsappNumber =
            "5511999999999";


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(texto)}`;


        /* MENSAGEM */

        formMessage.className =
            "form-message success";

        formMessage.textContent =
            "Tudo certo! Estamos abrindo o WhatsApp com sua mensagem.";


        /* ABRIR WHATSAPP */

        setTimeout(() => {

            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

        }, 500);

    }
);
/* =====================================================
   ANO
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();