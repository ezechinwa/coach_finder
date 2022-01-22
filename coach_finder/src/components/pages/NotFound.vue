<template>
  <div class="flex bg-white justify-between h-full px-10 mx-10 rounded-2xl shadow-lg min-h-400">

     <div class="flex flex-col flex-1 space-y-4 items-start justify-center ">
       <h1 class="items-center text-blue-700 font-bold text-3xl">Page Not Found</h1>
<!--       <p class="items-start self-start ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque explicabo iusto molestias nulla, odio! Adipisci alias at deserunt, hic ipsum provident sint vitae. Doloremque in itaque perspiciatis quis sed!</p>-->
       <router-link to="/" >
         <button class="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-full focus:shadow-outline hover:bg-red-800 items-start self-start">Go Back</button>
     </router-link>
     </div>

    <div class="flex flex-col flex-1">
      <img src="../../assets/404.png" alt="404 image">
    </div>


    </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>

</style>
