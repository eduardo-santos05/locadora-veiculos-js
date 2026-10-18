export default function listarVeiculos(veiculos) {
    if (veiculos.length === 0) {
        console.log('Nenhum veículo cadastrado.')
        return
    }

    veiculos.forEach((veiculo) => {
        console.log(`\nID: ${veiculo.id}`)
        console.log(`Placa: ${veiculo.placa}`)
        console.log(`Modelo: ${veiculo.modelo} (${veiculo.ano})`)
        console.log(`Acessórios: ${veiculo.acessorios.join(" | ")}`)
    })
}