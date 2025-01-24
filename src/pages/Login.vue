<template>
    <div>
      <h1>Login</h1>
      <button @click="login('Marcus')">Marcus</button>
      <button @click="login('Ignacio')">Ignacio</button>
      <button @click="login('Filipe')">Filipe</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      login(username) {
        localStorage.setItem('username', username);
        this.$router.push('/home');
      },
    },
  };
  </script>
  