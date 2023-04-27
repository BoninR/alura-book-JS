let botaoOrdernarPorPreco = document.getElementById('btnOrdenarPorPreco')

botaoOrdernarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco(){
    let livrosOrdenador = livros.sort((a,b)=> a.preco - b.preco)
    exibirlivros(livrosOrdenador)
}