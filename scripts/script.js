document.getElementById("menu-toggle").addEventListener("click", function () {
    let quadrado = document.getElementById("square-box");

    if (quadrado.classList.contains("aberto")) {
        quadrado.classList.remove("aberto");
        quadrado.classList.add("fechar");

        // Aguarda a animação e depois esconde o quadrado
        setTimeout(() => {
            quadrado.classList.remove("fechar");
        }, 400);
    } else {
        quadrado.classList.add("aberto");
    }
});


document.getElementById("menu-toggle").addEventListener("click", function () {
    let quadrado2 = document.getElementById("box");

    if (quadrado2.classList.contains("aberto")) {
        quadrado2.classList.remove("aberto");
        quadrado2.classList.add("fechar");

        // Aguarda a animação e depois esconde o quadrado
        setTimeout(() => {
            quadrado2.classList.remove("fechar");
        }, 400);
    } else {
        quadrado2.classList.add("aberto");
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const produtos = [
        { nome: "Camisa Branca", imagem: "roupas/camisabranca.png", preco: "R$ 50,00" },
        { nome: "Camisa Branca", imagem: "roupas/camisabranca.png", preco: "R$ 75,00" },
        { nome: "Camisa Branca", imagem: "roupas/camisabranca.png", preco: "R$ 100,00" },
        { nome: "Camisa Branca", imagem: "roupas/camisabranca.png", preco: "R$ 120,00" },
        { nome: "Camisa Branca", imagem: "roupas/camisabranca.png", preco: "R$ 90,00" },
        { nome: "Camisa Branca", imagem: "roupas/camisabranca.png", preco: "R$ 150,00" },
        { nome: "Camisa Branca", imagem: "roupas/camisabranca.png", preco: "R$ 40,00" },
        { nome: "Camisa Branca", imagem: "roupas/camisabranca.png", preco: "R$ 200,00" },
        { nome: "Camisa Branca", imagem: "roupas/camisabranca.png", preco: "R$ 50,00" },
        { nome: "Camisa Branca", imagem: "roupas/camisabranca.png", preco: "R$ 75,00" },
        { nome: "Camisa Branca", imagem: "roupas/camisabranca.png", preco: "R$ 100,00" },
        { nome: "Camisa Branca", imagem: "roupas/camisabranca.png", preco: "R$ 120,00" },
        { nome: "Camisa Branca", imagem: "roupas/camisabranca.png", preco: "R$ 90,00" },
        { nome: "Camisa Branca", imagem: "roupas/camisabranca.png", preco: "R$ 150,00" },
        { nome: "Camisa Branca", imagem: "roupas/camisabranca.png", preco: "R$ 40,00" },
        { nome: "Camisa Branca", imagem: "roupas/camisabranca.png", preco: "R$ 200,00" }
    ];

    const roupasContainer = document.getElementById("roupas");

    produtos.forEach(produto => {
        const div = document.createElement("div");
        div.classList.add("produto");

        div.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.preco}</p>
        `;

        roupasContainer.appendChild(div);
    });
});
