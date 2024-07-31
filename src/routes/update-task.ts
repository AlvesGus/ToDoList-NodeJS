import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

interface UpdateTaskProps {
  task: string
  status: boolean
  priority: boolean
}

export async function updateTasks(app: FastifyInstance){
  app.put('/task/update/:id', async (request, reply) => {
        const { task, status, priority } = request.body as UpdateTaskProps
        const { id } = request.params as {id: string}

        const existingTask = await prisma.task.findUnique({
          where: {
            id
          }
        })

        if(!existingTask) {
          return reply.status(404).send('Tarefa não encontrada.');
        }
       
        const updateTask = await prisma.task.update ({
          where:{
            id
          },
          data: {
            task,
            status,
            priority
          }
        })

        return reply.status(200).send(updateTask);
  });
}