const establishProjectEndpoints = (app, prisma) => {
  app.get(`/project`, async (_, res) => {
    const result = await prisma.project.findMany()

    res.status(200).json(result)
  })

  app.post(`/project`, async (req, res) => {
    const { name } = req.body

    await prisma.project.create({
      data: {
        name,
      },
    })

    res.status(200).json({ message: 'New project created' })
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

    res.status(200).json({ message: 'Project updated' })
  })

  app.delete(`/project`, async (req, res) => {
    const { id } = req.body

    await prisma.project.delete({
      where: {
        id,
      },
    })

    res.status(200).json({ message: 'Project deleted' })
  })
}

export { establishProjectEndpoints }
