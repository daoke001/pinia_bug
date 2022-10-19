<template>
  <div class="box">

    <p>comp1-sheep: {{user.sheep}}</p>
    <button @click="addSheep">add sheep</button>
  </div>
</template>

<script setup lang='ts'>
// import { useUserStore } from '.';
import { useUserStore } from './stores/user'
const user = useUserStore();

function addSheep() {
  user.sheep++;
  console.log("sheep count", user.sheep);
}

</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: indianred;
}
</style>