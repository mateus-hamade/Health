<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-col">
            <div class="lg:w-4/6 mx-auto">
                <div class="flex flex-col sm:flex-row mt-10">
                    <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                        <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                <Building2 />
                            </svg>
                        </div>
                        <div class="flex flex-col items-center text-center justify-center">
                            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">{{ setor.nome }}</h2>
                            <div class="w-12 h-1 bg-primary rounded mt-2 mb-4"></div>
                            <p>Bloco: {{ setor.bloco }}</p>
                            <p>Número: {{ setor.numero }}</p>
                            <p>Capacidade: {{ setor.capacidade }}</p>
                        </div>
                    </div>
                    <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p class="leading-relaxed text-lg mb-4 text-gray-800">{{ setor.descricao }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import axios from 'axios'

    import { Building2 } from 'lucide-vue-next'

    interface Setor {
        nome: string,
        capacidade: number,
        bloco: string,
        numero: number,
        descricao: string,
    }

    export default {
        components: {
            Building2,
        },

        data() {
            return {
                setor: {} as Setor,
            }
        },
        mounted(){
            axios.get(`http://localhost:3000/setor/${this.$route.params.codigo}`)
                .then(res => {
                    this.setor = res.data
                    this.setor = this.setor[0]
                })
                .catch(err => {
                    this.setor = err
                }
            )
        },
    }
</script>
