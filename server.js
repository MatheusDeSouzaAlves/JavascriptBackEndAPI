    import express from "express";

    const app = express()
    app.use (express.json())

    app.get('/', (req, res) =>{
        res.send('Está funcionando')
    })

    app.listen(process.env.PORT, ()=> {console.log('Servidor rodando!')})