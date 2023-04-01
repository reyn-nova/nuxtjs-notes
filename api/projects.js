const establishProjectEndpoint = (app, prisma) => {
  app.get(`/project`, async (_, res) => {
    const result = await prisma.project.findMany()

    res.json(result)
  })

  app.post(`/project`, async (req, res) => {
    const { name } = req.body

    await prisma.project.create({
      data: {
        name,
      },
    })

    res.json({ message: 'New project created' })
  })

  app.put(`/project`, async (req, res) => {
    const { id, name } = req.body

    await prisma.project.update({
      where: {
        id,
      },
      data: {
        name,
      },
    })

    res.json({ message: 'Project updated' })
  })

  app.delete(`/project`, async (req, res) => {
    const { id } = req.body

    await prisma.project.delete({
      where: {
        id,
      },
    })

    res.json({ message: 'Project deleted' })
  })
}

export { establishProjectEndpoint }
