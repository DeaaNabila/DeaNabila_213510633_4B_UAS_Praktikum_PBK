<template>
    <div class="tic-tac-toe-widget">
      <h2>Tic Tac Toe</h2>
      <h3> &#128280; &#10006; &#128280; &#10006; &#128280; &#10006; &#128280; &#10006; &#128280; &#10006;
        &#128280; &#10006;&#128280; &#10006;&#128280; &#10006;&#128280; &#10006;&#128280; &#10006;&#128280; &#10006;
        &#128280; &#10006;&#128280; &#10006;&#128280; &#10006;&#128280; &#10006;&#128280; &#10006;&#128280; &#10006;
        &#128280; &#10006;&#128280; &#10006;&#128280; &#10006;&#128280; &#10006;&#128280; &#10006;&#128280; &#10006;&#128280; 
        &#128280; &#10006;&#128280; &#10006;
      </h3>
      <div class="board">
        <div v-for="(cell, index) in board" :key="index" @click="handleClick(index)">{{ cell }}</div>
      </div>
      <button @click="resetGame">Reset</button>
      <p>{{ status }}</p>
    </div>
    <h3> &#128280; &#10006; &#128280; &#10006; &#128280; &#10006; &#128280; &#10006; &#128280; &#10006;
      &#128280; &#10006;&#128280; &#10006;&#128280; &#10006;&#128280; &#10006;&#128280; &#10006;&#128280; &#10006;
      &#128280; &#10006;&#128280; &#10006;&#128280; &#10006;&#128280; &#10006;&#128280; &#10006;&#128280; &#10006;
      &#128280; &#10006;&#128280; &#10006;&#128280; &#10006;&#128280; &#10006;&#128280; &#10006;&#128280; &#10006;&#128280; 
      &#128280; &#10006;&#128280; &#10006;
    </h3>
  </template>
  
  <script>
  export default {
    data() {
      return {
        board: ['', '', '', '', '', '', '', '', ''],
        currentPlayer: 'X',
        isGameEnded: false,
      };
    },
    computed: {
      status() {
        if (this.isGameEnded) {
          return 'Game Over!';
        }
        return `Giliran ${this.currentPlayer}`;
      },
    },
    methods: {
      handleClick(index) {
        if (!this.isGameEnded && this.board[index] === '') {
          this.board[index] = this.currentPlayer;
          this.checkWinner();
          this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        }
      },
      checkWinner() {
        const winningCombinations = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8], 
          [0, 3, 6], [1, 4, 7], [2, 5, 8], 
          [0, 4, 8], [2, 4, 6], 
        ];
  
        for (const combination of winningCombinations) {
          const [a, b, c] = combination;
          if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
            this.isGameEnded = true;
            return;
          }
        }
      },
      resetGame() {
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.currentPlayer = 'X';
        this.isGameEnded = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .tic-tac-toe-widget {
    padding: 20px;
    margin-bottom: 20px;
  }
  
  .board {
    grid-gap: 10px;
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
  }
  
  .board div {
    border: 2px solid #b37373;
    background-color: #b37373;
    margin-left: 75px;
    height: 100px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  button {
    margin-left: 48%;
    margin-top: 10px;
  }

  h3 {
    text-align: center;
  }

  h2 {
    text-align: center;
    color: rgb(100, 21, 21);
    background-color: rgb(204, 146, 146);
  }
  </style>
  