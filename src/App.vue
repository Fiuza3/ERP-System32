<template>
    <div>
      <Header />
      <Navbar />
      <router-view />
    </div>
  </template>
  
  <script>
  import Header from './components/Header.vue';
  import Navbar from './components/Navbar.vue';
  
  export default {
    components: {
      Header,
      Navbar,
    },
  };
  </script>
  