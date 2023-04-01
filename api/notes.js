const establishNoteEndpoints = (app, prisma) => {
  app.get(`/project/:projectId`, async (req, res) => {
    const result = await prisma.project.findUnique({
      where: {
        id: Number(req.params.projectId),
      },
      include: {
        notes: true,
      },
    })

    res.status(200).json(result)
  })

  app.post(`/note`, async (req, res) => {
    const { projectId, value } = req.body

    const result = await prisma.note.create({
      data: {
        value,
        project: {
          connect: {
            id: Number(projectId),
          },
        },
      },
    })

    res.status(200).json(result)
  })

  app.put(`/note`, async (req, res) => {
    const { id, value } = req.body

    const result = await prisma.note.update({
      where: {
        id,
      },
      data: {
        value,
      },
    })

    res.status(200).json(result)
  })

  app.delete(`/note`, async (req, res) => {
    const { id } = req.body

    const result = await prisma.note.delete({
      where: {
        id,
      },
    })

    res.status(200).json(result)
  })
}

export { establishNoteEndpoints }
