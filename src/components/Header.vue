<template>
    <header>
      <div>
        <span>Usuário: {{ username }}</span>
        <button @click="logout">Sair</button>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: localStorage.getItem('username') || 'Desconhecido',
      };
    },
    methods: {
      logout() {
        localStorage.removeItem('username');
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style>
  header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #f3f3f3;
  }
  </style>
  