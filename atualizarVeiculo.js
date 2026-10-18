export default function atualizarVeiculo(veiculos, id, novosDados) {
    const indice = veiculos.findIndex((veiculo) => veiculo.id === id)

    if (indice === -1) {
        console.log('Erro: Veículo não encontrado!')
        return false
    }

    veiculos[indice].modelo = novosDados.modelo || veiculos[indice].modelo

    if (novosDados.ano !== undefined) {
        veiculos[indice].ano = novosDados.ano
    }

    if (novosDados.acessorios && novosDados.acessorios.length > 0) {
        veiculos[indice].acessorios = novosDados.acessorios
    }

    return true
}