<template>
  <div>
    <ToolBar />
    <Card />
  </div>
</template>

<script>
  import Card from "../modules/ourStory/components/card.vue"
  import ToolBar from "./toolbar/toolbar.vue"
  export default {
    components: { ToolBar, Card },
    name: "Test",
  }
</script>
