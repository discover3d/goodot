import prisma from '@/server/prisma-client'
import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const repositories = await prisma.repository.findMany()
  return repositories
})
