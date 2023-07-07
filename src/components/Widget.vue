<template>
    <div class="widget">
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: 'Widget',
        message: 'Welcome!',
      };
    },
  };
  </script>
  
  <style scoped>
  .widget {
    border: 1px solid #dbb2b2;
    padding: 20px;
    margin-bottom: 20px;
  }
  </style>
  