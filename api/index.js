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

/**
 * logic for our api will go here
 */
export default {
  path: '/api',
  handler: app,
}
