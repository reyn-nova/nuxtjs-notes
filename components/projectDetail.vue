<template>
  <div class="container">
    <div class="top-content-container">
      <h1>Notes</h1>

      <iconButton
        background-color="green"
        variant="add"
        :click="() => (openedItemId = -1)"
      />
    </div>

    <listItem
      v-for="item in notes"
      :key="item.id"
      :value="item.value"
      :edit="() => (openedItemId = item.id)"
    />

    <dialogModal
      v-if="openedItemId !== null"
      :title="openedItemId === -1 ? 'Add Note' : 'Edit Note'"
      placeholder="Type your note..."
      :close="() => (openedItemId = null)"
      :submit="(noteValue) => submitNoteChange(noteValue)"
      :data="
        openedItemId !== null && openedItemId !== -1
          ? notes[notes.findIndex((item) => item.id === openedItemId)]
          : {}
      "
    />
  </div>
</template>

<script>
export default {
  name: 'ProjectDetailPageComponent',
  data() {
    return {
      notes: [
        {
          id: 1,
          value: 'Note 1',
        },
        {
          id: 2,
          value: 'Note 2',
        },
      ],
      openedItemId: null,
    }
  },
  methods: {
    submitNoteChange(noteValue) {
      alert(`From project detail page, the new note value is: ${noteValue}`)
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
