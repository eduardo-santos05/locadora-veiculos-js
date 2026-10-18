export default function removerVeiculo(veiculos, id) {
    const indice = veiculos.findIndex((veiculo) => veiculo.id === id)
    if (indice === -1) {
        console.log('Erro: Veículo não encontrado!')
        return false
    }
    veiculos.splice(indice, 1)
    return true
}