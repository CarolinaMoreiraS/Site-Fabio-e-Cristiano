/* ======================================================
   CONDIAS
   JAVASCRIPT
====================================================== */


/* ======================================================
   HEADER
====================================================== */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* ======================================================
   MENU MOBILE
====================================================== */

const menuButton =
    document.querySelector(".menu-button");


const navigation =
    document.querySelector(".nav");


menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

});


document
    .querySelectorAll(".nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("open");

        });

    });



/* ======================================================
   ANO
====================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* ======================================================
   CONTEÚDO
====================================================== */

const modalData = {


    custos: {

        title: "Redução de Custos",

        text: `

            <p>
                Os principais responsáveis pelo aumento
                das taxas condominiais incluem salários,
                horas extras, consumo descontrolado de
                água e luz, contratos de prestação de
                serviços sem revisão e inadimplência.
            </p>

            <p>
                A Condias desenvolve um plano específico
                para a realidade do condomínio, buscando
                identificar possibilidades de redução
                de custos.
            </p>

            <p>
                <strong>Despesas:</strong>
                avaliação do balancete e das despesas,
                renegociação de contratos, estudo do
                consumo de água e luz e revisão do
                quadro de funcionários para otimização
                de salários e horários.
            </p>

            <p>
                <strong>Receitas:</strong>
                avaliação da carteira de inadimplentes
                e desenvolvimento de um plano de ação
                para cobrança.
            </p>

        `

    },


    online: {

        title: "Serviços Online",

        text: `

            <p>
                A Condias possui sistema informatizado
                no qual os condôminos têm acesso às
                informações do condomínio por meio
                de senha.
            </p>

            <p>
                Na área reservada são disponibilizados
                atas, balancetes, 2ª via de boleto,
                reserva de espaços, convenção,
                regulamento interno, avisos e outras
                informações.
            </p>

            <p>
                <strong>
                    O serviço online está disponível
                    24 horas por dia.
                </strong>
            </p>

        `

    },


    agua: {

        title: "Gestão de Consumo de Água",

        text: `

            <p>
                A Medição Individualizada de Água
                consiste na instalação de hidrômetros
                capazes de medir individualmente o
                consumo de cada unidade em prédios
                residenciais e comerciais.
            </p>

            <p>
                Entre os benefícios apresentados
                pela Condias estão economia de água,
                justiça na cobrança, maior consciência
                de consumo, preservação e valorização.
            </p>

            <p>
                Cada condômino passa a pagar pelo
                próprio consumo de água, em vez
                de uma divisão baseada no tamanho
                da unidade.
            </p>

            <p>
                A tecnologia utilizada permite
                a implantação da medição
                individualizada em prédios
                novos e antigos.
            </p>

        `

    },


    automacao: {

        title: "Automação Condominial",

        text: `

            <p>
                O aumento da preocupação com segurança
                em condomínios residenciais impulsionou
                soluções para controle e monitoramento
                remoto dos acessos de moradores,
                prestadores de serviços e entregas.
            </p>

            <p>
                A tecnologia também vem transformando
                o mercado de administração condominial
                e de gestão predial.
            </p>

            <p>
                A portaria remota pode contribuir
                para ampliar o controle de segurança
                e auxiliar na redução de custos
                operacionais.
            </p>

        `

    },


    prestacao: {

        title: "Prestação de Contas Digital",

        text: `

            <p>
                A Condias investe em tecnologia
                para oferecer ferramentas inteligentes
                para a gestão dos condomínios.
            </p>

            <p>
                As ferramentas possibilitam a
                visualização e o acompanhamento
                diário das contas que compõem
                a pasta do condomínio.
            </p>

            <p>
                A digitalização e exibição das
                contas oferece mais transparência
                e amplia as formas de consulta
                disponíveis aos síndicos.
            </p>

        `

    },


    diferencial: {

        title: "Nosso Diferencial",

        text: `

            <p>
                O atendimento da Condias é
                personalizado. O condomínio é
                conhecido pelo nome e por suas
                peculiaridades.
            </p>

            <p>
                A empresa acompanha as tarefas
                relativas à administração e busca
                atender com presteza às solicitações
                do síndico.
            </p>

            <p>
                Também orienta atos administrativos,
                negociações com fornecedores e
                prestadores, controle e cobrança
                de inadimplentes e emissão de
                boletos.
            </p>

        `

    },


    s1: {

        title: "Condomínio On-Line",

        text: `

            <p>
                Área exclusiva e segura para clientes,
                com informações online sobre o
                condomínio.
            </p>

            <p>
                São disponibilizados atas,
                demonstrativos, balancetes,
                2ª via de boletos, reserva de espaços,
                avisos e outros recursos,
                24 horas por dia.
            </p>

        `

    },


    s2: {

        title: "Prestação de Contas",

        text: `

            <p>
                Entrega da pasta de prestação de contas
                com documentação comprobatória.
            </p>

            <p>
                Os condôminos podem receber a prestação
                de contas integrada ao boleto da taxa
                condominial e acessar as informações
                pela internet.
            </p>

        `

    },


    s3: {

        title: "Inadimplência",

        text: `

            <p>
                Controle da inadimplência e adoção
                de medidas extrajudiciais para
                tentativa de acordo com o
                condômino devedor.
            </p>

            <p>
                Nos casos em que a cobrança
                administrativa não obtiver êxito,
                a situação pode ser encaminhada
                ao departamento jurídico.
            </p>

        `

    },


    s4: {

        title: "Assessoria em Assembleias",

        text: `

            <p>
                Assistência desde a convocação
                até a realização de assembleias
                ordinárias e extraordinárias.
            </p>

            <p>
                A Condias oferece assistência
                técnica para o andamento das
                deliberações.
            </p>

        `

    },


    s5: {

        title: "Assessoria Jurídica",

        text: `

            <p>
                Serviço opcional que contempla
                cobrança de inadimplentes,
                envio de cartas, tentativas de
                acordo com autorização do síndico
                e acompanhamento da posição
                das cobranças.
            </p>

            <p>
                Também inclui análise de contratos
                com prestadores de serviços
                e demais contratados.
            </p>

        `

    },


    s6: {

        title: "Expedição",

        text: `

            <p>
                Serviço de malote expresso
                para busca e entrega de
                documentos no condomínio.
            </p>

        `

    },


    s7: {

        title: "Seguro",

        text: `

            <p>
                Assessoria de corretora na elaboração
                do seguro obrigatório contra incêndio
                e demais riscos.
            </p>

            <p>
                O serviço também contempla a área
                de responsabilidade civil do síndico.
            </p>

        `

    },


    s8: {

        title: "Departamento Pessoal",

        text: `

            <p>
                A Condias oferece suporte às
                principais rotinas do departamento
                pessoal do condomínio.
            </p>

            <ul>

                <li>Admissão e demissão de empregados;</li>

                <li>Cadastramento no PIS;</li>

                <li>Comunicação de acidente de trabalho;</li>

                <li>Folha de pagamento;</li>

                <li>Encargos sociais;</li>

                <li>Férias;</li>

                <li>Rescisões;</li>

                <li>Registro de empregados;</li>

                <li>Quadro de horários;</li>

                <li>Vales e recibos;</li>

                <li>
                    Controle dos programas
                    PPRA e PCMSO.
                </li>

            </ul>

        `

    },


    s9: {

        title: "Redução de Custos e Aumento de Receita",

        text: `

            <p>
                No início da administração de um
                condomínio, a Condias realiza um
                estudo para reduzir custos e criar
                alternativas para aumentar a receita
                sem elevar o valor da taxa condominial.
            </p>

        `

    },


    s10: {

        title: "Verificação de Pendências",

        text: `

            <p>
                Verificação das pendências do
                condomínio junto aos órgãos
                competentes para manter suas
                obrigações em dia.
            </p>

        `

    },


    s11: {

        title: "Conta Bancária Exclusiva",

        text: `

            <p>
                A Condias trabalha com conta
                bancária própria em nome
                do condomínio.
            </p>

            <p>
                Os extratos da conta e das
                aplicações são enviados juntamente
                com a pasta de prestação de contas
                mensal para conferência do conselho
                e do síndico.
            </p>

        `

    }

};



/* ======================================================
   MODAL
====================================================== */

const modal =
    document.getElementById("modal");


const modalTitle =
    document.getElementById("modalTitle");


const modalText =
    document.getElementById("modalText");


const modalClose =
    document.querySelector(".modal-close");


const modalOverlay =
    document.querySelector(".modal-overlay");



document
    .querySelectorAll("[data-modal]")
    .forEach(button => {

        button.addEventListener("click", () => {

            const id =
                button.dataset.modal;


            const content =
                modalData[id];


            if (!content) {

                return;

            }


            modalTitle.textContent =
                content.title;


            modalText.innerHTML =
                content.text;


            modal.classList.add("open");


            document.body.style.overflow =
                "hidden";

        });

    });



function closeModal() {

    modal.classList.remove("open");

    document.body.style.overflow = "";

}



modalClose.addEventListener(
    "click",
    closeModal
);


modalOverlay.addEventListener(
    "click",
    closeModal
);


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);



/* ======================================================
   FORMULÁRIO
====================================================== */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const data =
            new FormData(contactForm);


        const nome =
            data.get("nome") || "";


        const email =
            data.get("email") || "";


        const telefone =
            data.get("telefone") || "";


        const condominio =
            data.get("condominio") || "";


        const subject =
            encodeURIComponent(
                "Solicitação de proposta - Condias"
            );


        const body =
            encodeURIComponent(
`Olá, gostaria de solicitar uma proposta.

Nome: ${nome}
E-mail: ${email}
Telefone: ${telefone}
Condomínio: ${condominio}

Aguardo o contato da equipe Condias.`
            );


        window.location.href =
            `mailto:contato@condias.com.br?subject=${subject}&body=${body}`;

    }
);
/* ======================================================
   TEMA CLARO / ESCURO
====================================================== */

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    document.getElementById("themeIcon");


/*
    Verifica se o usuário já escolheu
    algum tema anteriormente.
*/

const savedTheme =
    localStorage.getItem("condias-theme");


/*
    Se já estava no tema escuro,
    aplica automaticamente.
*/

if (savedTheme === "dark") {

    document.body.classList.add("dark-theme");

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");

}


/*
    Clique no botão
*/

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");


    const darkMode =
        document.body.classList.contains("dark-theme");


    /*
        TROCA O ÍCONE
    */

    if (darkMode) {

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

        localStorage.setItem(
            "condias-theme",
            "dark"
        );

    } else {

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

        localStorage.setItem(
            "condias-theme",
            "light"
        );

    }

});