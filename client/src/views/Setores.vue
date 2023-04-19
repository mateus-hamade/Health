<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">setores</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Transparência e eficiência: conheça o funcionamento de cada setor do Hospital Health</p>
                <div class="flex mx-auto border-2 border-gray-200 rounded overflow-hidden mt-6">
                    <input v-model="filtro" class="py-2 px-4 w-full focus:outline-none" placeholder="Buscar setor">
                </div>
            </div>
            <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                <table class="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                        <tr>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Nome</th>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Capacidade</th>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Bloco</th>
                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Número</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="setor in searchSetores" :key="setor.codigo">
                            <td class="px-4 py-3">{{ setor.nome }}</td>
                            <td class="px-4 py-3">{{ setor.capacidade }}</td>
                            <td class="px-4 py-3">{{ setor.bloco }}</td>
                            <td class="px-4 py-3">{{ setor.numero }}</td>
                            <td class="px-4 py-3"> 
                                <router-link :to="{name: 'SetorDetalhe', params: { codigo: setor.codigo }}">
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

    interface setor {
        codigo: number;
        nome: string;
        capacidade: number;
        bloco: string;
        numero: number;
    }

    export default {
        data() {
            return {
                setores: [] as setor [],
                filtro: ''
            }
        },

        mounted(){
            axios.get('http://localhost:3000/setor')
                .then(res => {
                    this.setores = res.data
                })
                .catch(err => {
                    this.setores = err
                }
            )
        },

        computed: {
            searchSetores() {
                if(this.filtro == ''){
                    return this.setores
                } else {
                    return this.setores.filter(setor => {
                        return setor.nome.toLowerCase().includes(this.filtro.toLowerCase())
                    })
                }
            }
        }
    }
</script>