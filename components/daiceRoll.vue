<template>
    <div class="dice-roller">
      <button @click="rollDice" class="roll-button">Roll Dice</button>
      <div v-if="diceValue" class="dice-result">
        <div>
          <img :src="`/images/daice/daice-${diceValue}.png`" alt="Dynamic Image"/>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const diceValue = ref(0);
  const useImages = ref(true); // 画像を使用するかどうか
  const emit = defineEmits(['diceRolled'])
  // ランダムに算出した数値のさいころの目を出力する。
  const rollDice = () => {
    const randomValue = Math.floor(Math.random() * 6) + 1;
    // const randomValue = 1;
    diceValue.value = randomValue;
    emit('diceRolled', randomValue)
  }
  
  </script>
  
  <style scoped>
  .dice-roller {
    text-align: center;
    margin: 20px;
  }
  .roll-button {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  .roll-button:hover {
    background-color: #45a049;
  }
  .dice-result img {
    width: 100px;
    height: 100px;
  }
  .dice-number {
    font-size: 48px;
    font-weight: bold;
  }
  </style>
  