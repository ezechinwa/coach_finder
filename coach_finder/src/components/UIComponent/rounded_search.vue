<template>
  <div class="relative flex w-64 border border-gray-400  placeholder-gray-500  rounded-full px-3 pl-8 py-1 outline-none transition-all duration-700 ease-in-out focus:shadow-outline hover:w-64 ">
    <slot name="header"></slot>

    <input
           type="text"
           class="border-none hover:border-none focus:outline-none "
           :value="content"
           :placeholder="placeholder"
           @input="handleInput">
  </div>







</template>

<script>



export default {
  name: "rounded_search",
  props:['placeholder','modelValue'],
  emits:['update:modelValue'],
  data(){
    return {
     content: this.modelValue,
      }
  },
methods: {
    handleInput (e) {

      console.log(e.target.value)
      this.content = e.target.value
      this.$emit('update:modelValue', e.target.value);

    }
  }
}


</script>

<style scoped>

</style>
