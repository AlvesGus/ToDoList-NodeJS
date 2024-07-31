import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";


export async function listTasks(app: FastifyInstance){
  app.get('/tasks', async (request, reply) => {
        const tasks = await prisma.task.findMany();
        return reply.status(200).send(tasks);
  });
}