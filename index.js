const servicos = document.querySelector("section.servicos")
const pesquisa = document.querySelector("input#pesquisa")
const botaoPesquisar = document.querySelector("button#botaoPesquisar")



function pesquisar() {
    let pesquisaValue = pesquisa.value.toLowerCase()

    resultados = ""
    let nome = ""
    let descrição = ""

    for (let servico of dados) {
        nome = servico.nome.toLowerCase()
        descrição = servico.descrição.toLowerCase()
        valor = servico.valor

        if (nome.includes(pesquisaValue) || descrição.includes(pesquisaValue)) {
            // Constrói o HTML para cada resultado, formatando os dados
            resultados += `
            <div class="servico animate__animated animate__pulse">
            <h2 >${servico.nome}</h2>
            <p>${servico.descrição}</p>
            <p class="valor">${servico.valor}</p>
            <a href="#"><button class="btn btn-secondary">Acessar</button></a>
            </div>`
        }

        if (!(resultados)) {
            resultados = "<p>Nada foi encontrado!</p>"
        }

    }
    servicos.innerHTML = resultados
}

botaoPesquisar.addEventListener("click", pesquisar)