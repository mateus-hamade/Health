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
                            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">{{ paciente.nome }}</h2>
                            <div class="w-12 h-1 bg-primary rounded mt-2 mb-4"></div>
                            
                            <p>CEP: {{ paciente.cep }}</p>
                            <p>CPF: {{ paciente.cpf }}</p>
                            <p>RG: {{ paciente.rg }}</p>
                            <p>Telefone: {{ paciente.telefone }}</p>
                        </div>
                    </div>
                    <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p class="leading-relaxed text-lg mb-4 text-gray-800">Consulta:</p>
                        <div v-if="paciente.data_consulta">
                            <ul class="flex flex-col md:flex-col bg-gray-200 p-2 rounded-md w-full">
                                <li class="flex gap-1 justify-between">
                                    <span>Plano de saude:</span>
                                    <p class="text-gray-700">{{ paciente.plano_saude }}</p>
                                </li>
                                <li class="flex gap-1 justify-between">
                                    <span>Data da consulta:</span>
                                    <p class="text-gray-700">{{ paciente.data_consulta }}</p>
                                </li>
                                <li class="flex gap-1 justify-between">
                                    <span>Data de retorno:</span>
                                    <p class="text-gray-700">{{ paciente.data_retorno }}</p>
                                </li>
                                <li class="flex gap-1 justify-between">
                                    <span>Enfermidade:</span>
                                    <p class="text-gray-700">{{ paciente.enfermidade }}</p>
                                </li>
                            </ul>
                            <p class="leading-relaxed text-lg mb-4 text-gray-800 mt-3">Dados do médico:</p>
                            <ul class="flex flex-col md:flex-col bg-gray-200 p-2 rounded-md w-full">
                                <li class="flex gap-1 justify-between">
                                    <span>Plano de saude:</span>
                                    <p class="text-gray-700">{{ paciente.especialidade }}</p>
                                </li>
                                <li class="flex gap-1 justify-between">
                                    <span>CRM:</span>
                                    <p class="text-gray-700">{{ paciente.crm }}</p>
                                </li>
                            </ul>
                        </div>    
                        <p v-else class="leading-relaxed text-lg mb-4 text-gray-800">Não há consulta realizada.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import axios from 'axios'

    import { cpf } from 'cpf-cnpj-validator'
    import moment from 'moment'

    interface Paciente {
        codigo: number;
        nome: string;
        cpf: string;
        rg: string;
        cep: string;
        telefone: string;
        plano_saude: string;
        data_consulta: string;
        data_retorno: string;
        enfermidade: string;
        especialidade: string;
        crm: string;
    }

    export default {
        data() {
            return {
                paciente: {} as Paciente,
            }
        },
        mounted(){
            axios.get(`http://localhost:3000/paciente/${this.$route.params.codigo}`)
                .then(res => {
                    this.paciente = res.data
                    this.paciente = this.paciente[0]

                    this.paciente.cpf = cpf.format(this.paciente.cpf)
                    this.paciente.cep = this.paciente.cep.replace(/(\d{5})(\d{3})/, "$1-$2")
                    this.paciente.rg = this.paciente.rg.replace(/(\d{2})(\d{2})(\d{3})(\d{1})/, "$1.$2.$3-$4")
                    this.paciente.telefone = this.paciente.telefone.replace(/(\d{5})(\d{4})/, "$1-$2")

                    if (this.paciente.data_consulta){
                        this.paciente.data_consulta = moment.utc(this.paciente.data_consulta).format('DD/MM/YYYY')
                        this.paciente.data_retorno = moment.utc(this.paciente.data_retorno).format('DD/MM/YYYY')
                    }
                })
                .catch(err => {
                    this.paciente = err
                }
            )
        },
    }
</script>
