<template>
    <div class="photo-widget">
      <h2>Foto</h2>
      <h3> &#128247; &#128248; &#128247; &#128248; &#128247; &#128248; &#128247; &#128248; &#128247; &#128248;
        &#128247; &#128248;&#128247; &#128248;&#128247; &#128248;&#128247; &#128248;&#128247; &#128248;&#128247; &#128248;
        &#128247; &#128248;&#128247; &#128248;&#128247; &#128248;&#128247; &#128248;&#128247; &#128248;&#128247; &#128248;
        &#128247; &#128248;&#128247; &#128248;&#128247; &#128248;&#128247; &#128248;&#128247; &#128248;
      </h3>

      <h1>{{ title }}</h1>
      
      <img :src="photoUrl" :alt="title" />
      <br>
      <button @click="getRandomPhoto">Foto Lainnya</button>
    </div>
    <h3> &#128247; &#128248; &#128247; &#128248; &#128247; &#128248; &#128247; &#128248; &#128247; &#128248;
      &#128247; &#128248;&#128247; &#128248;&#128247; &#128248;&#128247; &#128248;&#128247; &#128248;&#128247; &#128248;
      &#128247; &#128248;&#128247; &#128248;&#128247; &#128248;&#128247; &#128248;&#128247; &#128248;&#128247; &#128248;
      &#128247; &#128248;&#128247; &#128248;&#128247; &#128248;&#128247; &#128248;&#128247; &#128248;
    </h3>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        photoUrl: '',
      };
    },
    mounted() {
      this.getRandomPhoto();
    },
    methods: {
      async getRandomPhoto() {
        try {
          const apiKey = '38037020-2c48722c03be8437a05b588e6';
          const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=nature&image_type=photo&orientation=horizontal`;
  
          const response = await fetch(apiUrl);
          const data = await response.json();
  
          const randomIndex = Math.floor(Math.random() * data.hits.length);
          const randomPhoto = data.hits[randomIndex];
  
          this.title = randomPhoto.tags;
          this.photoUrl = randomPhoto.webformatURL;
        } catch (error) {
          console.error('Error:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .photo-widget {
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }
  
  .photo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 500px;
    margin-top: 10px;
    margin-right: 50%;
    margin-left: 50%;
  }
  
  .photo-container img {
    justify-content: center;
    align-items: center;
    max-width: 80%;
    max-height: 80%;
  }
  
  .photo-widget button {
    margin-top: 10px;
  }

  h2 {
    color: rgb(71, 20, 16);
    background-color: rgb(190, 130, 130);
  }

  h3 {
    text-align: center;
  }

  h1 {
    color: rgb(66, 20, 20);
  }
  </style>
  