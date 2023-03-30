<template>
  <div class="container">
    <div class="top-content-container">
      <h1>Projects</h1>

      <iconButton
        background-color="green"
        variant="add"
        :click="() => (openedProjectId = -1)"
      />
    </div>

    <listItem
      v-for="item in projects"
      :key="item.id"
      :value="item.value"
      :click="() => $router.push(`/projects/${item.id}`)"
      :edit="() => (openedProjectId = item.id)"
    />

    <dialogModal
      v-if="openedProjectId !== null"
      :title="openedProjectId === -1 ? 'Add Project' : 'Edit Project'"
      placeholder="Type your project name..."
      :close="() => (openedProjectId = null)"
      :submit="(projectName) => submitProjectChange(projectName)"
      :data="
        openedProjectId !== null && openedProjectId !== -1
          ? projects[projects.findIndex((item) => item.id === openedProjectId)]
          : {}
      "
    />
  </div>
</template>

<script>
export default {
  name: 'ProjectsPageComponent',
  data() {
    return {
      projects: [
        {
          id: 1,
          value: 'Project 1',
        },
        {
          id: 2,
          value: 'Project 2',
        },
        {
          id: 3,
          value: 'Project 3',
        },
        {
          id: 4,
          value: 'Project 4',
        },
      ],
      openedProjectId: null,
    }
  },
  methods: {
    submitProjectChange(projectName) {
      alert(`From projects page, the new project name is: ${projectName}`)
    },
  },
}
</script>

<style>
h1 {
  margin: 0;
}
.container {
  color: white;
  align-items: center;
  background-color: black;
  background-image: url('https://images.unsplash.com/photo-1534193708707-6be94c4f67d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80');
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;
}
.top-content-container {
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 320px;
}
</style>
