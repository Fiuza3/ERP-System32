<template>
    <div>
      <h1>Comandas</h1>
      <form @submit.prevent="createComanda">
        <input v-model="descricao" placeholder="Descrição" required />
        <input v-model="valor" placeholder="Valor" type="number" required />
        <button type="submit">Criar Comanda</button>
      </form>
      <ul>
        <li v-for="comanda in comandas" :key="comanda.id">
          {{ comanda.id }} - {{ comanda.descricao }} ({{ comanda.valor }}) - {{ comanda.usuario }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        descricao: '',
        valor: '',
        comandas: [],
      };
    },
    methods: {
      createComanda() {
        const newComanda = {
          id: this.comandas.length + 1,
          descricao: this.descricao,
          valor: this.valor,
          usuario: localStorage.getItem('username'),
        };
        this.comandas.push(newComanda);
        this.descricao = '';
        this.valor = '';
      },
    },
  };
  </script>
  