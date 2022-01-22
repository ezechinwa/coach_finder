<template>
  <button
      class="rounded  text-white text-xs p-2 mx-2 transition ease-in duration-500 ml-3"
      :class="[bgColor,bgHoverColor]"
      @click="onClickButton"
  > {{title}}
    <slot name="icon"></slot>
  </button>
</template>

<script>
export default {
  name: "buttoni",
  emits: ["clicked"],
  props:[ 'bgColor', 'bgHoverColor','title'],
  methods:{
    onClickButton(e){
      this.$emit('clicked', e )
    }
  }
}
</script>

<style scoped>

</style>
