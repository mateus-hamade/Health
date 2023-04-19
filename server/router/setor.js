const express = require('express');
const router = express.Router();
const pool = require('../db/connection');

router.get('/', (req, res) => {
    pool.query(`
        SELECT *
        FROM setor
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
        FROM setor
        WHERE codigo = $1;
    `, [codigo], (err, result) => {
        if (err) {
            console.error(err)
            return
        }
        res.send(result.rows)
    })
})

module.exports = router