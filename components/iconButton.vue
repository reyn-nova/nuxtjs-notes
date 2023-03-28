<template>
  <button class="icon-button-container" :style="cssVars" onClick="{onClick}">
    <i id="icon" class="material-icons">{{ variant }}</i>
  </button>
</template>

<script>
export default {
  name: 'ProjectsPage',
  props: {
    variant: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      required: false,
      default: null,
    },
    backgroundColor: {
      type: String,
      required: false,
      default: 'gray',
    },
    width: {
      type: String,
      required: false,
      default: '40px',
    },
    margin: {
      type: [String, Number],
      required: false,
      default: 0,
    },
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
    ],
  },
  computed: {
    cssVars() {
      return {
        '--background-color': this.backgroundColor,
        '--margin': this.margin,
        '--width': this.width,
      }
    },
  },
}
</script>

<style scoped>
.icon-button-container {
  background-color: var(--background-color);
  cursor: pointer;
  height: 40px;
  margin: var(--margin);
  width: var(--width);
}
#icon {
  color: white;
}
</style>
