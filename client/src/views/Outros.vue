<template>
    <main>
        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="-my-8 divide-y-2 divide-gray-100">
                    <div class="py-8 flex flex-wrap md:flex-nowrap">
                        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span class="font-semibold title-font text-gray-700">Pacientes</span>
                        </div>
                        <div class="md:flex-grow">
                            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Seu histórico médico em boas mãos: acesse suas informações de saúde com segurança no Hospital Health</h2>
                            <p class="leading-relaxed">O Hospital Health mantém um banco de dados completo dos pacientes, contendo informações relevantes para o acompanhamento de seu histórico médico e tratamentos realizados. Dessa forma, garantimos a segurança e a privacidade dos dados dos pacientes, bem como a otimização dos cuidados e serviços prestados. Todos os dados são tratados de acordo com as normas éticas e legais aplicáveis, e somente profissionais autorizados têm acesso aos mesmos.</p>
                            <router-link to="/pacientes" class="inline-flex items-center mt-4 btn btn-secondary">Acessar</router-link>
                        </div>
                    </div>
                    <div class="py-8 flex flex-wrap md:flex-nowrap">
                        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span class="font-semibold title-font text-gray-700">Funcionarios</span>
                        </div>
                        <div class="md:flex-grow">
                            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Conheça nossa equipe: acesse as informações de nossos colaboradores</h2>
                            <p class="leading-relaxed">Como forma de garantir a transparência e a confiabilidade de suas operações, o Hospital Health disponibiliza um completo banco de dados contendo todas as informações de seus funcionários. Por meio desse recurso, é possível acessar de forma rápida e fácil dados relevantes para a gestão de recursos humanos. Com isso, reafirmamos nosso compromisso com a transparência e a ética, visando sempre aprimorar nossos serviços em benefício de nossos pacientes e colaboradores.</p>
                            <router-link to="/funcionario" class="inline-flex items-center mt-4 btn btn-secondary">Acessar</router-link>
                        </div>
                    </div>
                    <div class="py-8 flex flex-wrap md:flex-nowrap">
                        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span class="font-semibold title-font text-gray-700">Setores</span>
                        </div>
                        <div class="md:flex-grow">
                            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Transparência e eficiência: conheça o funcionamento de cada setor do Hospital Health</h2>
                            <p class="leading-relaxed">O Hospital Health também disponibiliza bancos de dados específicos para cada setor, incluindo informações sobre a gestão de recursos humanos, aquisição de insumos e materiais, manutenção predial, entre outros aspectos relevantes para o bom funcionamento da instituição. Esses dados são gerenciados de forma segura e confiável, garantindo o acesso apenas a profissionais autorizados e em conformidade com as normas éticas e legais aplicáveis. Assim, podemos otimizar nossos processos e aprimorar constantemente nossos serviços, visando sempre atender às necessidades de nossos pacientes e colaboradores.</p>
                            <router-link to="/setores" class="inline-flex items-center mt-4 btn btn-secondary">Acessar</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>