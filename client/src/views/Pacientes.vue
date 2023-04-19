<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24  mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pacientes</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Seu histórico médico em boas mãos: acesse suas informações de saúde com segurança no Hospital Health</p>
                <div class="flex mx-auto border-2 border-gray-200 rounded overflow-hidden mt-6">
                    <input v-model="filtro" class="py-2 px-4 w-full focus:outline-none" placeholder="Buscar paciente">
                </div>
            </div>
            <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                <table class="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                        <tr>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded">Código</th>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Nome</th>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">CPF</th>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">CEP</th>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded">Plano de saúde</th>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="paciente in searchPatients" :key="paciente.codigo">
                            <td class="px-4 py-3">{{ paciente.codigo }}</td>
                            <td class="px-4 py-3">{{ paciente.nome }}</td>
                            <td class="px-4 py-3">{{ paciente.cpf }}</td>
                            <td class="px-4 py-3">{{ paciente.cep }}</td>
                            <td class="px-4 py-3">{{ paciente.plano_saude }}</td>
                            <td class="px-4 py-3"> 
                                <router-link :to="{name: 'PacienteDetalhe', params: { codigo: paciente.codigo }}">
                                    <button class="btn btn-secondary m-1">Detalhes</button>
                                </router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import axios from 'axios'
    import { cpf } from 'cpf-cnpj-validator'

    interface Paciente {
        codigo: number;
        nome: string;
        cpf: string;
        cep: string;
        plano_saude: string;
    }

    export default {
        data() {
            return {
                pacientes: [] as Paciente [],
                filtro: ''
            }
        },
        mounted(){
            axios.get('http://localhost:3000/paciente')
                .then(res => {
                    res.data.forEach(paciente => { // format cep regex
                        paciente.cep = paciente.cep.replace(/(\d{5})(\d{3})/, "$1-$2")
                    })
                    
                    res.data.forEach(paciente => { // format cpf
                        paciente.cpf = cpf.format(paciente.cpf)
                    })

                    this.pacientes = res.data
                })
                .catch(err => {
                    this.pacientes = err
                }
            )
        },
        computed: {
            searchPatients() {
                if(this.filtro == ''){
                    return this.pacientes
                } else {
                    return this.pacientes.filter(paciente => {
                        return paciente.nome.toLowerCase().includes(this.filtro.toLowerCase())
                    })
                }
            }
        }
    }
</script>