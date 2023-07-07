<template>
  <div id="app">
    <header>
    <nav>
      <ul>
        <li><router-link to="/ "> Home </router-link></li>
        <li><router-link to="/cuaca"> Cuaca  &#128262;</router-link></li>
        <li><router-link to="/lokasi"> Lokasi &#128205; </router-link></li>
        <li><router-link to="/stopwatch"> Stopwatch &#9201;</router-link></li>
        <li><router-link to="/game"> Tic Tac Toe &#10006;</router-link></li>
        <li><router-link to="/foto"> Foto &#128248; </router-link></li>
      </ul>
    </nav>
  </header>
  <router-view></router-view>
  
</div>
</template>

<script>
export default {
  name: 'App',
};

</script>

<style>
#app {
  background-color: rgb(243, 237, 218);
  color: #fff;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: medium;
}

header {
  padding: 15px;
  margin: 10px;
  background: #9e6464;
  
}

nav ul {
  padding: 0 auto;
  margin: 0 auto;
 
}

nav li {
  display: inline-block;
  padding: auto;
  margin: auto;
  
}

nav a {
  padding: 35px 35px;
  color: #fff;
}

img{
  margin-left: 35%;
  width: 30%;
  height: 30%;
}

p {
  color: #9e6464;
  text-align: center;
}

h4 {
  text-align: center;
}
</style>
