const supermanLegacy = {
    titulo: "Superman: Legacy",
    diretor: "James Gunn",
    elenco: [
        "David Corenswet", "Nicholas Hoult", "Rachel Brosnahan", "Skyler Gisondo", 
        "Isabela Merced", "Nathan Fillion", "Edi Gathegi", "Anthony Carrigan"
    ],
    dataLancamento: "11 de julho de 2025",
    generos: ["Ação", "Aventura", "Ficção científica", "Drama", "Super-herói"],
    duracao: "140 minutos",
    sinopse: "A trama acompanha Clark Kent, um jovem repórter em Metrópolis, enquanto busca equilibrar sua herança kryptoniana com sua criação humana em Smallville, Kansas. Guiado por valores como verdade, justiça e bondade, Superman enfrenta o desafio de manter sua esperança na humanidade em um mundo cada vez mais cético.",
    nota: "10",
    imagens: [
        "images/superman.png", "images/superman2.png", "images/superman3.png"
    ]
};

const brancaDeNeve = {
    titulo: "Branca de Neve",
    diretor: "Marc Webb",
    elenco: [
        "Rachel Zegler", "Gal Gadot", "Andrew Burnap", "Emilia Faucher", 
        "Gabriela Garcia", "Jon-Scott Clark"
    ],
    dataLancamento: "20 de março de 2025",
    generos: ["Aventura", "Fantasia", "Musical", "Drama", "Família"],
    duracao: "1h 49min",
    sinopse: "Nesta releitura da história atemporal, a encantadora Branca de Neve (Rachel Zegler) é ameaçada e precisa fugir de seu reino. Após percorrer a floresta encantada, ela encontra uma cabana onde vivem os amigáveis anões, com quem ela passa a viver.",
    nota: "10",
    imagens: [
        "images/branca.png", "images/branca2.png", "images/branca3.png"
    ]
};

const quartetoFantastico = {
    titulo: "Quarteto Fantástico: Primeiros Passos",
    diretor: "Matt Shakman",
    elenco: [
        "Pedro Pascal", "Vanessa Kirby", "Joseph Quinn", "Ebon Moss-Bachrach", 
        "Julia Garner", "Ralph Ineson", "Paul Walter Hauser", "Natasha Lyonne", "John Malkovich"
    ],
    dataLancamento: "24 de julho de 2025",
    generos: ["Ação", "Aventura", "Ficção científica", "Super-herói"],
    duracao: "150 minutos",
    sinopse: "Em um mundo retrofuturista inspirado nos anos 1960, o Quarteto Fantástico já é uma equipe estabelecida. Enquanto enfrentam o poderoso Galactus e sua arauta, a enigmática Surfista Prateada, Reed Richards e Sue Storm lidam com a iminente chegada de seu primeiro filho, equilibrando os desafios de salvar o mundo e manter os laços familiares.",
    nota: "10",
    imagens: [
        "images/quarteto.png", "images/quarteto2.png", "images/quarteto3.png"
    ]
};

function alterarConteudo(filme) {
    document.getElementById("titulo").textContent = filme.titulo;
    document.getElementById("diretor").textContent = filme.diretor;
    document.getElementById("elenco").textContent = filme.elenco.join(", ");
    document.getElementById("data-lancamento").textContent = filme.dataLancamento;
    document.getElementById("genero").textContent = filme.generos.join(", ");
    document.getElementById("duracao").textContent = filme.duracao;
    document.getElementById("sinopse").textContent = filme.sinopse;
    document.getElementById("nota").textContent = filme.nota;

    const fotosItem = document.getElementById("fotos-item");
    fotosItem.innerHTML = "";
    filme.imagens.forEach((imagem) => {
        const cardItem = `
            <div class="col">
                <div class="card">
                    <img src="${imagem}" style="height: 300px;" class="card-img-top" alt="${filme.titulo}">
                </div>
            </div>
        `;
        fotosItem.innerHTML += cardItem;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const filmeSelecionado = urlParams.get('filme');

    if (filmeSelecionado === "superman") {
        alterarConteudo(supermanLegacy);
    } else if (filmeSelecionado === "branca") {
        alterarConteudo(brancaDeNeve);
    } else if (filmeSelecionado === "quarteto") {
        alterarConteudo(quartetoFantastico);
    }
});
