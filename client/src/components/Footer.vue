<template>
    <footer class="text-gray-600 body-font border-t">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <HeartHandshake color="#ce3737" />
                    <span class="ml-3 text-xl">Hospital Health</span>
                </a>
                <p class="mt-2 text-sm text-gray-500">Cuidando da saúde da sua família em todos os momentos.</p>
            </div>
            <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Para pacientes</h2>
                    <nav class="list-none mb-10">
                        <li>
                            <a class="text-gray-600 hover:text-gray-800">Agendamento de Consultas</a>
                        </li>
                        <li>
                            <a class="text-gray-600 hover:text-gray-800">Horário de Funcionamento</a>
                        </li>
                        <li>
                            <a class="text-gray-600 hover:text-gray-800">Cartão Desconto</a>
                        </li>
                    </nav>
                </div>
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Contato</h2>
                    <nav class="list-none mb-10">
                        <li>
                            <a class="text-gray-600 hover:text-gray-800">Fale Conosco</a>
                        </li>
                        <li>
                            <a class="text-gray-600 hover:text-gray-800">Estrutura e Tecnologia</a>
                        </li>
                    </nav>
                </div>
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Estrutura</h2>
                    <nav class="list-none mb-10">
                        <li>
                            <a class="text-gray-600 hover:text-gray-800">O Hospital Health</a>
                        </li>
                        <li>
                            <a class="text-gray-600 hover:text-gray-800">Estrutura e Tecnologia</a>
                        </li>
                    </nav>
                </div>
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Politica</h2>
                    <nav class="list-none mb-10">
                        <li>
                            <a class="text-gray-600 hover:text-gray-800">Diretrizes e Políticas</a>
                        </li>
                        <li>
                            <a class="text-gray-600 hover:text-gray-800">Estrutura e Tecnologia</a>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
    import { HeartHandshake } from 'lucide-vue-next';

    export default {
        name: 'Footer',
        components: {
            HeartHandshake,
        },
    }
</script>