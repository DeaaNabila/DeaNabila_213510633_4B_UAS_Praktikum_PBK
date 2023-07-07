<template>
    <div class="weather-widget">
      <h2 class="widget-title">Weather Widget</h2>
      <h3> &#128261; &#9925; &#9748; &#128261; &#9925; &#9748; &#128261; &#9925; 
        &#128261; &#9925; &#9748;&#128261; &#9925; &#9748;&#128261; &#9925; &#9748;
        &#128261; &#9925; &#9748;&#128261; &#9925; &#9748;&#128261; &#9925; &#9748;
        &#128261; &#9925; &#9748;&#128261; &#9925; &#9748;&#128261; &#9925; &#9748;
        &#128261; &#9925; &#9748;&#9748;&#128261; &#9925; &#9748;</h3>
      <div class="lokasi-input">
        <label for="lokasi">Silahkan Masukkan Lokasi Anda : </label>
        <input type="text" id="lokasi" v-model="lokasi" />
        <button @click="fetchWeatherData">Cari Cuaca!</button>
      </div>
      <div v-if="weatherData" class="weather-data">
        <p class="lokasi">Lokasi: {{ weatherData.name }}</p>
        <p v-if="weatherData.main" class="temperature">
          Temperatur: {{ weatherData.main.temp }}°C
        </p>
        <p v-if="weatherData.weather" class="description">
          Description: {{ weatherData.weather[0].description }}
        </p>
      </div>
      <p v-else>Sedang memuat cuaca pada lokasi...</p>
    </div>
    <h3> &#128261; &#9925; &#9748; &#128261; &#9925; &#9748; &#128261; &#9925; 
      &#128261; &#9925; &#9748;&#128261; &#9925; &#9748;&#128261; &#9925; &#9748;
      &#128261; &#9925; &#9748;&#128261; &#9925; &#9748;&#128261; &#9925; &#9748;
      &#128261; &#9925; &#9748;&#128261; &#9925; &#9748;&#128261; &#9925; &#9748;
      &#128261; &#9925; &#9748;&#9748;&#128261; &#9925; &#9748;</h3>
  </template>
  
  <script>
  export default {
    data() {
      return {
        lokasi: '',
        weatherData: null
      };
    },
    methods: {
      async fetchWeatherData() {
        try {
          const apiKey = 'b7bfca7b27a3485144fea086c50d09dc';
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.lokasi}&appid=${apiKey}`;
  
          const response = await fetch(apiUrl);
          const data = await response.json();
  
          this.weatherData = data;
        } catch (error) {
          console.error('Error :', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .weather-widget {
    padding: 25px;
    margin-bottom: 20px;
    text-align: center;
    
  }
  
  .widget-title {
    background-color: #c28f8f;
    color: #570c0c;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  
  .lokasi-input {
    margin-bottom: 50px;
    color: #570c0c;
  }
  
  .weather-data {
    margin-top: 10px;
  }
  
  .lokasi {
    font-size: 18px;
    font-weight: bold;
    color: #570c0c;
  }
  
  .temperature {
    font-size: 24px;
    color: #ce471e;
  }
  
  .description {
    font-size: 16px;
  }

  button {
    color: #250a02;
  }

  h3 {
    text-align: center;
  }
  </style>
  