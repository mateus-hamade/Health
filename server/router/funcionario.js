const express = require('express');
const router = express.Router();
const pool = require('../db/connection');

router.get('/', (req, res) => {
    pool.query(`
        SELECT codigo, nome, cep, cpf, salario, horario_trabalho
        FROM pessoa INNER JOIN funcionario ON pessoa.codigo = funcionario.codigo_pessoa
    `, (err, result) => {
        if (err) {
            console.error(err)
            return
        }
        res.send(result.rows)
    })
})

router.get('/:codigo', (req, res) => {
    const codigo = req.params.codigo

    pool.query(`
        SELECT 
        pessoa.codigo AS codigo_pessoa,
        pessoa.nome AS nome_pessoa,
        pessoa.cep AS cep_pessoa,
        pessoa.cpf AS cpf_pessoa,
        funcionario.salario AS salario_funcionario,
        funcionario.horario_trabalho AS horario_trabalho_funcionario,
        dependente.nome AS nome_dependente,
        dependente.grau_parentesco AS grau_parentesco_dependente
        FROM pessoa
        LEFT JOIN funcionario ON pessoa.codigo = funcionario.codigo_pessoa
        LEFT JOIN dependente ON funcionario.codigo_pessoa = dependente.codigo_funcionario
        WHERE pessoa.codigo = $1;
    `, [codigo], (err, result) => {
        if (err) {
            console.error(err)
            return
        }
        res.send(result.rows)
    })
})

module.exports = router