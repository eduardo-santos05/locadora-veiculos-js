import promptSync from "prompt-sync";
import veiculos from "./veiculos.js";
import adicionarVeiculo from "./adicionarVeiculo.js";
import listarVeiculos from "./listarVeiculos.js";
import atualizarVeiculo from "./atualizarVeiculo.js";
import removerVeiculo from "./removerVeiculo.js";

const prompt = promptSync();

let opcao;

do {
    console.log("\n===== LOCADORA LIONSCAR =====");
    console.log("1 - Cadastrar veículo");
    console.log("2 - Listar veículos");
    console.log("3 - Atualizar veículo");
    console.log("4 - Remover veículo");
    console.log("0 - Sair");

    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case "1": {
            let placa = prompt('Placa: ').toUpperCase()
            let modelo = prompt('Modelo: ')
            let ano = Number(prompt('Ano: '))
            let acessorios = []
            let adicionarAcessorio = prompt('Adicionar acessório? (sim/nao): ').toLowerCase()

            while (adicionarAcessorio === 'sim') {
                let acessorio = prompt('Acessório: ').trim()

                if (acessorio !== '') {
                    acessorios.push(acessorio)
                }

                adicionarAcessorio = prompt('Adicionar outro? (sim/nao): ').toLowerCase()
            }

            if (adicionarVeiculo(veiculos, { placa, modelo, ano, acessorios })) {
                console.log('Veículo cadastrado com sucesso!')
            }

            break;
        }
        case "2": {
            listarVeiculos(veiculos)
            break;
        }
        case "3": {
            let id = Number(prompt('ID do veículo: '))
            let novoModelo = prompt('Novo modelo (Enter para manter): ')
            let ano = prompt('Novo ano (Enter para manter): ')

            let novosDados = {
                modelo: novoModelo,
                ano: ano === '' ? undefined : Number(ano)
            }

            let novosAcessorios = []
            let trocarAcessorios = prompt('Trocar os acessórios? (sim/nao): ').toLowerCase()

            if (trocarAcessorios === 'sim') {
                let adicionarAcessorio = 'sim'

                while (adicionarAcessorio === 'sim') {
                    let novoAcessorio = prompt('Acessório: ').trim()

                    if (novoAcessorio !== '') {
                        novosAcessorios.push(novoAcessorio)
                    }

                    adicionarAcessorio = prompt('Adicionar outro? (sim/nao): ').toLowerCase()
                }

                if (novosAcessorios.length > 0) {
                    novosDados.acessorios = novosAcessorios
                }
            }

            if (atualizarVeiculo(veiculos, id, novosDados)) {
                console.log('Veículo atualizado com sucesso!')
            }
            
            break;
        }
        case "4": {
            let id = Number(prompt('ID do veículo: '))
            let confirmacao = prompt('Tem certeza? (sim/nao): ').toLowerCase()

            if (confirmacao === 'sim') {
                if (removerVeiculo(veiculos, id)) {
                    console.log('Veículo removido com sucesso!')
                }
            } else {
                console.log('Remoção cancelada.')
            }

            break;
        }
        case "0": {
            console.log("Até logo!");
            break;
        }
        default: {
            console.log("Opção inválida!");
        }
    }
} while (opcao !== "0");