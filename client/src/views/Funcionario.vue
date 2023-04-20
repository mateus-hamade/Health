<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">funcionarios</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Conheça nossa equipe: acesse as informações de nossos colaboradores</p>
                <div class="flex mx-auto border-2 border-gray-200 rounded overflow-hidden mt-6">
                    <input v-model="filtro" class="py-2 px-4 w-full focus:outline-none" placeholder="Buscar funcionario">
                </div>
            </div>
            
            <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                <table class="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                        <tr>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Código</th>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Nome</th>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">CPF</th>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">CEP</th>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Salário</th>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Horário</th>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="funcionario in searchFuncionarios" :key="funcionario.codigo">
                            <td class="px-4 py-3">{{ funcionario.codigo }}</td>
                            <td class="px-4 py-3">{{ funcionario.nome }}</td>
                            <td class="px-4 py-3">{{ funcionario.cpf }}</td>
                            <td class="px-4 py-3">{{ funcionario.cep }}</td>
                            <td class="px-4 py-3">{{ funcionario.salario }}</td>
                            <td class="px-4 py-3">{{ funcionario.horario_trabalho }} horas</td>
                            <td class="px-4 py-3">
                                <router-link :to="{name: 'FuncionarioDetalhe', params: { codigo: funcionario.codigo }}">
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

    interface Funcionario {
        codigo: number;
        nome: string;
        cpf: string;
        cep: string;
        salario: number;
        horario_trabalho: string;
    }

    export default {
        props: ['codigo'],

        data() {
            return {
                funcionarios: [] as Funcionario [],
                filtro: ''
            }
        },

        mounted(){
            axios.get('http://localhost:3000/funcionario')
                .then(res => {
                    res.data.forEach(funcionario => { // format cep regex
                        funcionario.cep = funcionario.cep.replace(/(\d{5})(\d{3})/, '$1-$2')
                    });

                    res.data.forEach(funcionario => {
                        funcionario.salario = funcionario.salario.replace(/(\d{1})(\d{2})/, 'R$ $1.$2')
                    })

                    res.data.forEach(funcionario => { // format cpf
                        funcionario.cpf = cpf.format(funcionario.cpf);
                    });

                    this.funcionarios = res.data
                })
                .catch(err => {
                    this.funcionarios = err
                }
            )
        },
        computed: {
            searchFuncionarios() {
                if(this.filtro == ''){
                    return this.funcionarios
                } else {
                    return this.funcionarios.filter(paciente => {
                        return paciente.nome.toLowerCase().includes(this.filtro.toLowerCase())
                    })
                }
            }
        }
    }
</script>