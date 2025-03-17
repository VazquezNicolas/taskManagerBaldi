const {Router} = require ('express')
const tasks = require('../DAOs/tasks.manager')

const router = Router()

router.get('/', (req,res) => {
    let newTasks = tasks.getTasks()
    res.status(201).json(newTasks)
})

router.post('/', async (req,res) => {
    try {
        const {title, description, completed, createdAt} = req.body
        let resultado = await tasks.createTask (title, description, completed, createdAt)

        if (resultado == 1) {
            res.status(201).json({message: '¡Nueva tarea Agregada!'})
        }
        else {
            res.status(400).json({message: "Error"})
        }
    } catch (error) {
        console.log(error)
    }

})

router.put('/:id', async (req,res) => {
    try {
        const id = req.params.id
        const {title, description, completed, createdAt} = req.body
        
        let resultado = await tasks.updateTask (id, title, description, completed, createdAt)
        if (resultado == 1) {
            res.status(201).json({message: '¡Nueva tarea Agregada!'})
        }
        else {
            res.status(400).json({message: "Error"})
        }

    } catch (error) {
        console.log(error)
    }
})

router.delete('/:id', async(req,res) => {
    try {
        const id = req.params.id
        let resultado = tasks.deleteTask(id)
        if (resultado = 1) {
            res.status(201).json({message: "Producto Eliminado con Exito"})
        }
        else if (resultado = 0) {
            res.status(401).json({message: "No se encontro el id del producto"})
        }
        else
        res.status(401).json({message: error})
    } catch (error) {
        console.log(error)
    }
    

})


module.exports = router