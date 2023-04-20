const express = require('express');
const router = express.Router();
const pool = require('../db/connection');

router.use(express.json()) // para conseguir receber o body da requisição

router.post('/', (req, res) => {
    const { nome, cpf, rg, plano, telefone, rua, bairro, numero, cep, estado, cidade, pais } = req.body

    pool.query(`
        INSERT INTO pessoa (nome, cpf, rg, telefone, rua, bairro, numero, cep, estado, cidade, pais)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        RETURNING codigo
    `, [nome, cpf, rg, telefone, rua, bairro, numero, cep, estado, cidade, pais], (err, result) => {
        if (err) {
            res.status(400).send('Erro ao inserir pessoa')
        }
        else {
            pool.query(`
                INSERT INTO paciente (codigo_pessoa, plano_saude)
                VALUES ($1, $2)
            `, [result.rows[0].codigo, plano], (err, result) => {
                if (err) {
                    res.status(400).send('Erro ao inserir paciente')
                }
                else {
                    res.status(200).send('Paciente inserido com sucesso')
                }
            })
        }
    })
})

module.exports = router