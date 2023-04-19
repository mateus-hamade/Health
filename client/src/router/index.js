import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Agendamento from '../views/Agendamento.vue'
import Outros from '../views/Outros.vue'

import Pacientes from '../views/Pacientes.vue'
import Funcionario from '../views/Funcionario.vue'
import Setores from '../views/Setores.vue'

import FuncionarioDetalhe from '../views/detalhes/FuncionarioDetalhe.vue'
import PacienteDetalhe from '../views/detalhes/PacienteDetalhe.vue'
import SetorDetalhe from '../views/detalhes/SetorDetalhe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/agendamento',
      name: 'Agendamento',
      component: Agendamento
    },
    {
      path: '/outros',
      name: 'Outros',
      component: Outros
    },
    {
      path: '/pacientes',
      name: 'Pacientes',
      component: Pacientes
    },
    {
      path: '/funcionario',
      name: 'Funcionario',
      component: Funcionario
    },
    {
      path: '/setores',
      name: 'Setores',
      component: Setores
    },
    {
      path: '/funcionario/:codigo',
      name: 'FuncionarioDetalhe',
      component: FuncionarioDetalhe
    },
    {
      path: '/paciente/:codigo',
      name: 'PacienteDetalhe',
      component: PacienteDetalhe
    },
    {
      path: '/setor/:codigo',
      name: 'SetorDetalhe',
      component: SetorDetalhe
    }
  ]
})

export default router
