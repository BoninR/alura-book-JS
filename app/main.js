let livros = []

const endpointDaAip = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarlivrosDaAPI()


async function getBuscarlivrosDaAPI(){
    const resposta = await fetch(endpointDaAip)
    livros = await resposta.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirlivros(livrosComDesconto)
}
