const userImage = document.querySelector("#userImage")
const title = document.getElementById("title")
const review = document.querySelector("#review")
const position = document.querySelector("#position")

const nextButton = document.querySelector("#nextButton")
const prevButton = document.querySelector("#prevButton")
const randomBurron = document.querySelector("#random")

let count = 0

const reviewers = [
    {
        icon: 10,
        name: "Marina Costa",
        sex: "women",
        position: "Product Designer",
        review: "Trabalhar com essa equipe foi uma das melhores experiências da minha carreira. Entregaram tudo com agilidade e qualidade."
    },
    {
        icon: 23,
        name: "Renato Almeida",
        sex: "men",
        position: "Frontend Developer",
        review: "A organização e clareza no código me surpreenderam. É ótimo ver projetos tão bem estruturados!"
    },
    {
        icon: 45,
        name: "Bianca Moreira",
        sex: "women",
        position: "UX Researcher",
        review: "O foco na experiência do usuário foi impecável. Me senti ouvida em todas as fases do projeto."
    },
    {
        icon: 7,
        name: "Thiago Nunes",
        sex: "men",
        position: "Backend Engineer",
        review: "Integrações perfeitas e documentação bem feita. Recomendo totalmente essa equipe para projetos de alta demanda."
    },
    {
        icon: 18,
        name: "Larissa Fernandes",
        sex: "women",
        position: "Data Analyst",
        review: "A análise de dados foi fundamental para o sucesso do projeto. Excelente trabalho da equipe!"
    },
    {
        icon: 30,
        name: "Carlos Eduardo",
        sex: "men",
        position: "Marketing Specialist",
        review: "As estratégias de marketing digital que aplicaram aumentaram muito nossa visibilidade online."
    }
]

function changePages(page) {
    if (reviewers[page].sex == "women") {
        userImage.src = `https://randomuser.me/api/portraits/women/${reviewers[page].icon}.jpg`
    } else {
        userImage.src = `https://randomuser.me/api/portraits/men/${reviewers[page].icon}.jpg`
    }


    title.textContent = reviewers[page].name
    position.textContent = reviewers[page].position
    review.textContent = reviewers[page].review
    
    localStorage.setItem('savedPage', page)
}

nextButton.addEventListener('click', () => {
    count++

    if (count >= reviewers.length) {
        count = 0
    }

    changePages(count)
}
)

prevButton.addEventListener('click', () => {
    count--

    if (count < 0) {
        count = reviewers.length - 1;
    }

    changePages(count)
}
)

random.addEventListener('click', () => {
    let savedPage = localStorage.getItem('savedPage')

    savedPage = savedPage === null ? 0 : parseInt(savedPage, 10);
    savedPage = parseInt(savedPage, 10)

    savedPage = Math.floor(Math.random() * reviewers.length)
    changePages(savedPage)

})

window.addEventListener('DOMContentLoaded', () => {
    let savedPage = localStorage.getItem('savedPage')

    savedPage = savedPage === null ? 0 : parseInt(savedPage, 10);
    savedPage = parseInt(savedPage, 10)

    changePages(savedPage)

})