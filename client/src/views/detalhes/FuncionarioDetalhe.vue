<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-col">
            <div class="lg:w-4/6 mx-auto">
                <div class="flex flex-col sm:flex-row mt-10">
                    <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                        <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div class="flex flex-col items-center text-center justify-center">
                            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">{{ funcionario.nome_pessoa }}</h2>
                            <div class="w-12 h-1 bg-primary rounded mt-2 mb-4"></div>
                            
                            <p>CEP: {{ funcionario.cep_pessoa }}</p>
                            <p>CPF: {{ funcionario.cpf_pessoa }}</p>
                            <p>Salário: {{ funcionario.salario_funcionario }}</p>
                            <p>Horário: {{ funcionario.horario_trabalho_funcionario }} horas</p>
                        </div>
                    </div>
                    <div v-if="funcionario.nome_dependente != null" class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p class="leading-relaxed text-lg mb-4 text-gray-800">Dependentes:</p>
                        <div class="flex flex-col md:flex-row bg-gray-200 p-2 rounded-md">
                            <div class="md:w-1/2 flex gap-1">
                                <span>Nome:</span>
                                <p class="text-gray-700">{{ funcionario.nome_dependente }}</p>
                            </div>
                            <div class="md:w-1/2 flex gap-1">
                                <span>Grau de parentesco:</span>
                                <p class="text-gray-700">{{ funcionario.grau_parentesco_dependente }}</p>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p class="leading-relaxed text-lg mb-4 text-gray-800">Não há dependentes cadastrados.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import axios from 'axios'

    import { cpf } from 'cpf-cnpj-validator'

    interface Funcionario {
        codigo_pessoa: number;
        nome_pessoa: string;
        cep_pessoa: string;
        cpf_pessoa: string;
        salario_funcionario: number;
        horario_trabalho_funcionario: string;
        nome_dependente: string;
        grau_parentesco_dependente: string;
    }
    
    export default {
        data() {
            return {
                funcionario: {} as Funcionario,
            }
        },

        created(){
            axios.get(`http://localhost:3000/funcionario/${this.$route.params.codigo}`)
                .then(res => {
                    this.funcionario = res.data
                    this.funcionario = this.funcionario[0]
                    

                    this.funcionario.cpf_pessoa = cpf.format(this.funcionario.cpf_pessoa)
                    this.funcionario.cep_pessoa = this.funcionario.cep_pessoa.replace(/(\d{5})(\d{3})/, "$1-$2")
                    this.funcionario.salario_funcionario = this.funcionario.salario_funcionario.replace(/(\d{1})(\d{2})/, 'R$ $1.$2')
                })
                .catch(err => {
                    this.funcionario = err
                }
            )
        }
    }
</script>
