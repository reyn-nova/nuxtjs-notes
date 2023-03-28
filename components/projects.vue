<template>
  <div class="container">
    <div class="top-content-container">
      <h1>Projects</h1>

      <iconButton
        background-color="green"
        variant="add"
        :click="() => (isShowingDialogModal = true)"
      />
    </div>

    <listItem value="Project 1" :click="() => $router.push(`/projects/1`)" />
    <listItem value="Project 2" :click="() => $router.push(`/projects/2`)" />
    <listItem value="Project 3" :click="() => $router.push(`/projects/3`)" />

    <dialogModal
      v-if="isShowingDialogModal"
      title="Add Project"
      placeholder="Type your project name..."
      :close="() => (isShowingDialogModal = false)"
    />
  </div>
</template>

<script>
export default {
  name: 'ProjectsPageComponent',
  data() {
    return {
      isShowingDialogModal: false,
    }
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
