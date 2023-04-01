// index.js
import express, { json } from 'express'
import { PrismaClient } from '@prisma/client'
import { establishProjectEndpoint } from './projects'

const prisma = new PrismaClient()
const app = express()

app.use(json())

establishProjectEndpoint(app, prisma)

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
