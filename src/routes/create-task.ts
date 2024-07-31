import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../lib/prisma";

interface CreateTaskRequest {
  task: string;
  status: boolean;
  priority: boolean;
}

export async function createTask(app: FastifyInstance){
    app.post('/tasks/new', async (request: FastifyRequest, reply: FastifyReply ) => {
      const { task, status, priority } = request.body as CreateTaskRequest;

      if(!task  && !status && !priority ){
        return  reply.send('Favor inserir todos os campos ')
      }

      const tasks = await prisma.task.create({
        data: {
          task,
          status,
          priority
        }
      })
      return reply.status(201).send()
    }) 
}

