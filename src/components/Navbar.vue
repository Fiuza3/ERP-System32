<template>
    <nav>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/estoque">Estoque</router-link></li>
        <li><router-link to="/historico">Histórico</router-link></li>
        <li><router-link to="/comanda">Comanda</router-link></li>
      </ul>
    </nav>
  </template>
  
  <style>
  nav ul {
    display: flex;
    gap: 15px;
    list-style-type: none;
    padding: 0;
  }
  </style>
  