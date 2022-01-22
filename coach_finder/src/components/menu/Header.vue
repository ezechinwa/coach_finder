<template>
  <section>
     <div class="flex justify-between bg-gray-900 p-4 ">
         <div class="logo text-white font-bold">
           <ul>
             <li><router-link to="/"  class=" border-b-2 border-gray-900 border-white-500 text-white  transition duration-150 hover:border-white  mr-3">Home </router-link></li>
           </ul>
           </div>
       <ul class="flex space-x-4">
         <li><router-link to="/coaches"  class=" border-b-2 border-gray-900 border-white-500 text-white  transition duration-150 hover:border-white  mr-3">View Coaches </router-link></li>
         <li> <router-link to="/request"  class=" border-b-2 border-gray-900 border-white-500 text-white  transition duration-150 hover:border-white  "> Requests </router-link></li>
       </ul>
     </div>
  </section>
</template>

<script>
export default {
  name: "PageHeader"
}
</script>

<style scoped>

</style>
