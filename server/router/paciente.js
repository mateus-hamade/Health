const express = require('express');
const router = express.Router();
const pool = require('../db/connection');

router.get('/', (req, res) => {
    pool.query(`
        SELECT codigo, nome, cep, cpf, plano_saude
        FROM pessoa INNER JOIN paciente ON pessoa.codigo = paciente.codigo_pessoa
    
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
        SELECT *
        FROM pessoa
        LEFT JOIN paciente ON pessoa.codigo = paciente.codigo_pessoa
        LEFT JOIN consulta ON paciente.codigo_pessoa = consulta.codigo_paciente
        LEFT JOIN medico ON consulta.codigo_medico = medico.codigo_funcionario
        LEFT JOIN funcionario ON medico.codigo_funcionario = funcionario.codigo_pessoa
        WHERE pessoa.codigo = $1;
    `, [codigo], (err, result) => {
        if (err) {
            console.error(err)
            return
        }
        res.send(result.rows)
        console.log(result.rows)
    })
})

router.post('/add', (req, res) => {
    const { nome, cpf, rg, data, plano, rua, bairro, numero, cep, estado, cidade, pais } = req.body

    pool.query(`
        INSERT INTO pessoa (nome, cpf, rg, data_nascimento, rua, bairro, numero, cep, estado, cidade, pais)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        RETURNING codigo;
    `, [nome, cpf, rg, data, rua, bairro, numero, cep, estado, cidade, pais], (err, result) => {
        if (err) {
            console.error(err)
            return
        }
        const codigo = result.rows[0].codigo
        pool.query(`
            INSERT INTO paciente (codigo_pessoa, plano_saude)
            VALUES ($1, $2);
        `, [codigo, plano], (err, result) => {
            if (err) {
                console.error(err)
                return
            }
            res.send(result.rows)
            console.log(result.rows)
        })
    })
})

module.exports = router