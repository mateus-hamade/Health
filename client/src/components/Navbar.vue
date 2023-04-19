<template>
    <div class="navbar justify-between border-b">
        <div>
            <router-link to="/" class="btn btn-ghost normal-case text-xl space-x-3">
                <HeartHandshake color="#ce3737"/>
                <p>Health</p>
            </router-link>
        </div>
        <div class="hidden sm:flex">
            <router-link to="/agendamento" href="teste" class="btn btn-ghost rounded-btn space-x-1">
                <Clock color="#ce3737"/>
                <p>Agendamento</p>
            </router-link>
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost rounded-btn space-x-1">
                    <Phone color="#ce3737"/>
                    <p>Contato</p>
                </label>
                <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                    <li><a>(31) 70608-4057</a></li> 
                    <li><a>contato@health.com</a></li>
                </ul>
            </div>
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost rounded-btn space-x-1">
                    <MapPin color="#ce3737"/>
                    <p>Localização</p>
                </label>
                <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                    <li><a>Rua Uaproma, Ouro Preto - Belo Horizonte</a></li>
                </ul>
            </div>
            <router-link to="/outros" class="btn btn-ghost rounded-btn space-x-1">
                <ListPlus color="#ce3737"/>
                <p>Outros</p>
            </router-link>
        </div>

        <!-- Hidden menu -->
        <div class="dropdown dropdown-end md:hidden">
            <label tabindex="0" class="btn btn-ghost rounded-btn space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
            <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                <li>
                    <router-link to="/agendamento" class="btn btn-ghost rounded-btn">
                        <Clock color="#ce3737"/>
                        <p>Agendamento</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/agendamento" class="btn btn-ghost rounded-btn w-auto">
                        <Phone color="#ce3737"/>
                        <p>Contato</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/agendamento" class="btn btn-ghost rounded-btn">
                        <MapPin color="#ce3737"/>
                        <p>Localização</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import { HeartHandshake, Clock, Phone, MapPin, ListPlus } from 'lucide-vue-next';

    export default {
        name: 'Navbar',
        components: {
            HeartHandshake,
            Clock,
            Phone,
            MapPin,
            ListPlus,
        },
    }
</script>