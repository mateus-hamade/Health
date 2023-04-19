<template>
    <main>
        <section class="text-gray-600 body-font relative">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Faça o Agendamento</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Buscando a efiência no atendimento, nossos pacientes podem se agendar de casa!</p>
                </div>
                <div class="lg:w-1/2 md:w-2/3 mx-auto">
                    <form @submit.prevent="handleSubmit" class="flex flex-wrap -m-2">
                        <div class="p-2 w-full">
                            <h1 class="text-center">Dados pessoais</h1>
                            <div class="relative">
                                <label for="nome" class="leading-7 text-sm text-gray-600">Nome</label>
                                <input type="text" v-model="post.name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                            <div class="relative">
                                <label for="cpf" class="leading-7 text-sm text-gray-600">CPF</label>
                                <input type="text" v-model="post.cpf" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                            <div class="relative">
                                <label for="rg" class="leading-7 text-sm text-gray-600">RG</label>
                                <input type="" v-model="post.rg" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                            <div class="relative">
                                <label for="data" class="leading-7 text-sm text-gray-600">Data de nascimento</label>
                                <input type="date" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                            <div class="relative">
                                <label for="plano" class="leading-7 text-sm text-gray-600">Plano de saúde</label>
                                <input type="text" v-model="post.plano" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                        </div>
                        <div class="p-2 w-full mt-6">
                            <h1 class="text-center">Endereço</h1>
                            <div class="relative">
                                <label for="rua" class="leading-7 text-sm text-gray-600">Rua</label>
                                <input type="text" v-model="post.rua" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                            <div class="relative">
                                <label for="bairro" class="leading-7 text-sm text-gray-600">Bairro</label>
                                <input type="text" v-model="post.bairro" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                            <div class="relative">
                                <label for="numero" class="leading-7 text-sm text-gray-600">Número</label>
                                <input type="text" v-model="post.numero" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                            <div class="relative">
                                <label for="cep" class="leading-7 text-sm text-gray-600">CEP</label>
                                <input type="text" v-model="post.cep" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                            <div class="relative">
                                <label for="estado" class="leading-7 text-sm text-gray-600">Estado</label>
                                <input type="text" v-model="post.estado" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                            <div class="relative">
                                <label for="cidade" class="leading-7 text-sm text-gray-600">Cidade</label>
                                <input type="text" v-model="post.cidade" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                            <div class="relative">
                                <label for="pais" class="leading-7 text-sm text-gray-600">País</label>
                                <input type="text" v-model="post.pais" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <button class="flex mx-auto btn btn-secondary" v-on:click="onSubmit()">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                post: {
                    nome: '',
                    cpf: '',
                    rg: '',
                    data: '',
                    plano: '',
                    rua: '',
                    bairro: '',
                    numero: '',
                    cep: '',
                    estado: '',
                    cidade: '',
                    pais: ''
                }
            }
        },
        methods: {
            onSubmit() {
                axios.post('http://localhost:3000/pacientes/add', this.post)
                    .then(response => {
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }

</script>