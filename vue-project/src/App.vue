<script setup lang="ts">
import { io } from "socket.io-client";
import { ref } from 'vue'

const connection = ref("Not connected")

const socket = io("ws://server:3000")
socket.on("connect", () => {
  connection.value = "Socket connected"
});

// const res = await fetch("http://localhost:3000")

// const data = await res.json()

// console.log("Data", data);
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    
  </header>

  <main>
    <div>{{ connection }}</div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
