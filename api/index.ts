import express, { json } from 'express'
import { PrismaClient } from '@prisma/client'

import { establishProjectEndpoints } from './projects'
import { establishNoteEndpoints } from './notes'

const app = express()
app.use(json())

const prisma = new PrismaClient()

establishProjectEndpoints(app, prisma)
establishNoteEndpoints(app, prisma)

/**
 * logic for our api will go here
 */
export default {
  path: '/api',
  handler: app,
}
