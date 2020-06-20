const { app } = require(`./src/config/custom-express`)

app.route(`/`)
    .get((req, res) => {
        res.render(`index`)
    })


const port = process.env.PORT || 8080;
// const hostname = '192.168.0.8'
app.listen(port, () => {
    console.log("Servidor rodando!");
})