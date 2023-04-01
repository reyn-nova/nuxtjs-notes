// index.js
import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get(`/project`, async (_, res) => {
  const result = await prisma.project.findMany()

  res.json(result)
})

app.get(`/project/:id`, async (req, res) => {
  const result = await prisma.project.findUnique({
    where: {
      id: Number(req.params.id),
    },
    include: {
      Note: true,
    },
  })

  res.json(result)
})

/**
 * logic for our api will go here
 */
export default {
  path: '/api',
  handler: app,
}
