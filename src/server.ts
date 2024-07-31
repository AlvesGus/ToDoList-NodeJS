import fastify from "fastify";
import cors from '@fastify/cors'
import { createTask } from "./routes/create-task";
import { updateTasks } from "./routes/update-task"
import { deleteTask } from './routes/delete-task'
import { listTasks } from './routes/list-task' 

const server = fastify()


server.register(cors,{
  origin: '*'
})



server.register(createTask)
server.register(updateTasks)
server.register(deleteTask)
server.register(listTasks)



const PORT = Number(process.env.PORT) || 3333
server.listen({
  host: '0.0.0.0',
  port: 3333
}).then(() => {
  console.log('Server is running')
})