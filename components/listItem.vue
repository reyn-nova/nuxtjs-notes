<template>
  <div class="list-item-container">
    <div>
      <input disabled class="list-item-input" :value="value" />
    </div>

    <icon-button variant="edit" margin="0px 0px 0px 20px" />
  </div>
</template>

<script>
import iconButton from './iconButton.vue'

export default {
  name: 'ListItem',
  components: { iconButton },
  props: {
    value: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style scoped>
.list-item-container {
  display: flex;
  margin-top: 20px;
  width: 320px;
  justify-content: space-between;
}
.list-item-input {
  color: black;
  padding: 10px;
  width: 230px;
  border-radius: 5px;
  background-color: gainsboro;
}
</style>
