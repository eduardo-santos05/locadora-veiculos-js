export default function adicionarVeiculo(veiculos, novoVeiculo) {
    for (let i = 0; i < veiculos.length; i++) {
        if (novoVeiculo.placa === veiculos[i].placa) {
            console.log('Erro: Já existe um veículo com essa placa!')
            return false
        }
    }
}