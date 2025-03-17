class Tasks {
    
    constructor() {
        this.tasksArray = []
        this.id = 0
    }

    getTasks () {
        const newTasks = this.tasksArray
        return newTasks
    }

    async createTask (title, description, completed, createdAt) {
        try {
            let task = {
                title,
                description,
                completed,
                createdAt,
                id: this.id,
            }

            let newId = this.tasksArray.length
            newId ++
            task.id = newId

            this.tasksArray.push(task)
            return 1
        } catch (error) {
            return error
        }
    }

    async updateTask (tid, title, description, completed, createdAt) {
        try {
            this.tasksArray.forEach(element => {
                console.log(element.id)
            });

            const taskIndex = this.tasksArray.findIndex(e => e.id == tid)
            console.log(taskIndex)
            if (taskIndex !== -1) {
    
                this.tasksArray[taskIndex] = {
                    title,
                    description,
                    completed,
                    createdAt,
                    id: tid
                }
            return 1
            }
            else return 0
        } catch (error) {
            return error
        }
    }

    async deleteTask (id) {
        try {
            const index = this.tasksArray.findIndex(e => e.id == id);
            console.log(index)
            if(index !== -1) {
                this.tasksArray.splice(index, 1)
                return 1
            }
            else if (index === -1) {
                return 0
            }

        } catch (error) {
            console.log(error)
        }
    }

}

const tasks = new Tasks ()

module.exports = tasks