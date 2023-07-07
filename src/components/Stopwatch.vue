<template>
    <div class="stopwatch-widget">
      <h2>Stopwatch</h2>
      <h3>&#8986; &#8987; &#9201; &#8986; &#8987; &#9201;&#8986; &#8987; &#9201;&#8986; &#8987; &#9201;
        &#8986; &#8987; &#9201;&#8986; &#8987; &#9201;&#8986; &#8987; &#9201;&#8986; &#8987; &#9201;&#8986; &#8987; &#9201;
        &#8986; &#8987; &#8986; &#8987; &#9201;&#8986; &#8987; &#9201;&#8986; &#8987; &#9201;&#8986; &#8987; &#9201;&#8986; &#8987; &#9201;
      </h3>
      <br>
      <br>
      <p>{{ formatTime }}</p>
      <div style="text-align: center;">
        <button @click="startStopwatch" :disabled="isRunning">Start</button>
        <button @click="stopStopwatch" :disabled="!isRunning">Stop</button>
        <button @click="resetStopwatch">Reset</button>
      </div>
    </div>
    <h3>&#8986; &#8987; &#9201; &#8986; &#8987; &#9201;&#8986; &#8987; &#9201;&#8986; &#8987; &#9201;
      &#8986; &#8987; &#9201;&#8986; &#8987; &#9201;&#8986; &#8987; &#9201;&#8986; &#8987; &#9201;&#8986; &#8987; &#9201;
      &#8986; &#8987;&#8986; &#8987; &#9201;&#8986; &#8987; &#9201;&#8986; &#8987; &#9201;&#8986; &#8987; &#9201;&#8986; &#8987; &#9201;
    </h3>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isRunning: false,
        startTime: null,
        elapsedTime: 0,
      };
    },
    computed: {
      formatTime() {
        const milliseconds = this.elapsedTime % 1000;
        const seconds = Math.floor(this.elapsedTime / 1000) % 60;
        const minutes = Math.floor(this.elapsedTime / 60000) % 60;
        const hours = Math.floor(this.elapsedTime / 3600000);
  
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
      },
    },
    methods: {
      startStopwatch() {
        if (!this.isRunning) {
          this.isRunning = true;
          this.startTime = Date.now();
  
          this.timerInterval = setInterval(() => {
            this.elapsedTime = Date.now() - this.startTime;
          }, 10);
        }
      },
      stopStopwatch() {
        if (this.isRunning) {
          this.isRunning = false;
          clearInterval(this.timerInterval);
        }
      },
      resetStopwatch() {
        this.isRunning = false;
        clearInterval(this.timerInterval);
        this.elapsedTime = 0;
      },
    },
  };
  </script>
  
  <style scoped>
  .stopwatch-widget {
    padding: 20px;
    margin-bottom: 20px;
  }
  
  .stopwatch-widget h2 {
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .stopwatch-widget p {
    color: #666;
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .stopwatch-widget button {
    text-align: center;
    padding: 15px 25px;
    margin: 50px 5px;
    background-color: #d17973;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  h3 {
    text-align: center;
  }

  h2 {
    text-align: center;
    background-color: #c9a9a9;
  }

  </style>
  