<template>
    <div class="location-widget">
      <h2>Lokasi Anda!</h2>
      <h3> &#127757; &#128225; &#127758; &#128225; &#127759; &#128225;&#127757; &#128225; &#127758; &#128225; &#127759; &#128225;
        &#127757; &#128225; &#127758; &#128225; &#127759; &#128225;&#127757; &#128225; &#127758; &#128225; &#127759; &#128225;
        &#127757; &#128225; &#127758; &#128225; &#127759; &#128225;&#127757; &#128225; &#127758; &#128225; &#127759; &#128225;
        &#127757; &#128225; &#127758; &#128225; &#127759; &#128225;&#127757; 
      </h3>
      <div v-if="latitude && longitude">
        <p>Latitude: {{ latitude }}</p>
        <p>Longitude: {{ longitude }}</p>
      </div>
      <div v-else>
        <p> </p>
      </div>
  
      <div class="location-input">
        <label for="latitude">Latitude:</label>
        <input type="text" id="latitude" v-model="inputLatitude" />
      </div>
      <div class="location-input">
        <label for="longitude">Longitude:</label>
        <input type="text" id="longitude" v-model="inputLongitude" />
      </div>
      
      <button @click="fetchLocationDetails">Detail Lokasi</button>
  
      <div v-if="foundLocation">
        <p>-------------------------------------------------------------------------</p>
        <h3>Detail Lokasi : </h3>
        <p>{{ foundLocation.components.country }}</p>
        <p>{{ foundLocation.components.city }}</p>
        <p>{{ foundLocation.components.street }}</p>
        <p>Kode Pos: {{ foundLocation.components.postcode }}</p>
      </div>
    </div>
    <h3> &#127757; &#128225; &#127758; &#128225; &#127759; &#128225;&#127757; &#128225; &#127758; &#128225; &#127759; &#128225;
      &#127757; &#128225; &#127758; &#128225; &#127759; &#128225;&#127757; &#128225; &#127758; &#128225; &#127759; &#128225;
      &#127757; &#128225; &#127758; &#128225; &#127759; &#128225;&#127757; &#128225; &#127758; &#128225; &#127759; &#128225;
      &#127757; &#128225; &#127758; &#128225; &#127759; &#128225;&#127757; 
    </h3>
  </template>
  
  <script>
  export default {
    data() {
      return {
        latitude: null,
        longitude: null,
        inputLatitude: '',
        inputLongitude: '',
        foundLocation: null,
      };
    },
    mounted() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getPosition);
      }
    },
    methods: {
      getPosition(position) {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      },
      async fetchLocationDetails() {
        try {
          const apiKey = '92591005a7b94008909d59a64b6d2a49';
          const latitude = this.inputLatitude || this.latitude;
          const longitude = this.inputLongitude || this.longitude;
          const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
            latitude + ',' + longitude
          )}&key=${apiKey}`;
  
          const response = await fetch(apiUrl);
          const data = await response.json();
  
          if (data.results && data.results.length > 0) {
            const location = data.results[0];
            this.foundLocation = location;
            console.log('Location:', location);
            // Lakukan sesuatu dengan data lokasi yang ditemukan
          }
        } catch (error) {
          console.error('Error fetching location data:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>

  h2 {
    background-color: #b89292;
  }
  .location-widget {
    padding: 20px;
    margin-bottom: 20px;
    text-align: center;
    border-radius: 8px;
  }
  
  .location-widget h2 {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .location-widget p {
    color: #666;
  }
  
  .location-input {
    margin-top: 10px;
  }
  
  .location-input label {
    display: block;
    margin-bottom: 5px;
    color: #333;
    font-size: 16px;
  }
  
  .location-input input {
    width: 200px;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  
  .location-input button {
    padding: 10px 20px;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .location-details {
    margin-top: 20px;
    text-align: left;
  }
  
  .location-details h3 {
    margin-bottom: 10px;
    color: #333;
    font-size: 18px;
  }
  
  .location-details p {
    margin: 5px 0;
    color: #666;
  }
  
  .error-message {
    color: red;
    margin-top: 10px;
  }

  h3 { 
    text-align: center;
    color: #3a1010;
  }
  </style>
  
  