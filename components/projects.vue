<template>
  <div class="container">
    <div class="content-container">
      <h1>Projects</h1>

      <icon-button background-color="green" variant="add" />
    </div>
  </div>
</template>

<script>
import iconButton from './iconButton.vue'

export default {
  name: 'ProjectsPage',
  components: { iconButton },
}
</script>

<style>
.container {
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
.content-container {
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 320px;
}
</style>
