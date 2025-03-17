const express = require ('express')
const router = require('./router')

const app = express()
const port = 8080

app.use(express.json());
app.use(express.urlencoded({extended: true}))

router(app)

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})