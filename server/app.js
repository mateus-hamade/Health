const express = require('express');
const app = express();
const port = 3000

const cors = require('cors');

app.use(
    cors({
        origin: (origin, callback) => callback(null, true),
        credentials: true,
    })
)

app.use('/paciente', (require('./router/paciente')))
app.use('/funcionario', (require('./router/funcionario')))
app.use('/setor', (require('./router/setor')))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})