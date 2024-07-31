import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

interface DeleteTaskProps {
  id: string
}

export async function deleteTask(app: FastifyInstance){
  app.delete('/tasks/:id/delete', async (request, reply) => {
        const { id } = request.params as DeleteTaskProps

        const taskId = await prisma.task.findUnique({
          where: {
            id
          }
        })

        if(!taskId) {
          return reply.status(500).send('Não existe essa tarefa.')
        }
       

        const deleteTask = await prisma.task.delete({
          where: {
            id
          }
        })

        return reply.status(200).send('Tarefa excluida com sucesso');
  });
}