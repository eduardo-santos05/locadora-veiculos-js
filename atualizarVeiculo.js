export default function atualizarVeiculo(veiculos, id, novosDados) {
    const indice = veiculos.findIndex((veiculo) => veiculo.id === id)

    if (indice === -1) {
        console.log('Erro: Veículo não encontrado!')
        return false
    }
}