<template>
    <div class="borad">
         <!-- 各マス -->
        <div class="cell-start-Red">1</div>
        <div class="cell-start-Blue">13</div>
        <div class="cell3">2</div>
        <div class="cell4">3</div>
        <div class="cell5">4</div>
        <div class="cell6">5</div>
        <div class="cell7">6</div>
        <div class="cell8">7</div>
        <div class="cell9">8</div>
        <div class="cell10">9</div>
        <div class="cell11">10</div>
        <div class="cell12">11</div>
        <div class="cell13">12</div>
        <div class="cell14">24</div>
        <div class="cell15">14</div>
        <div class="cell16">15</div>
        <div class="cell17">16</div>
        <div class="cell18">17</div>
        <div class="cell19">18</div>
        <div class="cell20">19</div>
        <div class="cell21">20</div>
        <div class="cell22">21</div>
        <div class="cell23">22</div>
        <div class="cell24">23</div>
        

        <!-- マス目とマス目のライン -->
        <div class="HorizontalLine1"  data-line-number="1"></div>
        <div class="HorizontalLine2"  data-line-number="2"></div>
        <div class="HorizontalLine3"  data-line-number="3"></div>
        <div class="HorizontalLine4"  data-line-number="4"></div>
        <div class="HorizontalLine5"  data-line-number="5"></div>
        <div class="HorizontalLine6"  data-line-number="6"></div>
        <div class="HorizontalLine7"  data-line-number="7"></div>
        <div class="HorizontalLine8"  data-line-number="8"></div>
        <div class="HorizontalLine9"  data-line-number="9"></div>
        <div class="HorizontalLine10" data-line-number="10"></div>
        <div class="HorizontalLine11" data-line-number="11"></div>
        <div class="HorizontalLine12" data-line-number="12"></div>
        <div class="VerticalLine1" data-line-number="13"></div>
        <div class="VerticalLine2" data-line-number="14"></div>
        <div class="VerticalLine3" data-line-number="15"></div>
        <div class="VerticalLine4" data-line-number="16"></div>
        <div class="VerticalLine5" data-line-number="17"></div>
        <div class="VerticalLine6" data-line-number="18"></div>
        <div class="VerticalLine7" data-line-number="19"></div>
        <div class="VerticalLine8" data-line-number="20"></div>
        <div class="VerticalLine9" data-line-number="21"></div>
        <div class="VerticalLine10" data-line-number="22"></div>
        <div class="VerticalLine11" data-line-number="23"></div>
        <div class="VerticalLine12" data-line-number="24"></div>

      <!-- 赤ゴールマス -->
      <div class="cell-goal-Red1">1</div>
      <div class="cell-goal-Red2">2</div>
      <div class="cell-goal-Red3">3</div>
      <div class="cell-goal-Red4">4</div>
      <div class="VerticalLine13" data-line-number="13"></div>
      <div class="VerticalLine14" data-line-number="14"></div>
      <div class="HorizontalLine13" data-line-number="13"></div>
      <div class="diagonalLine1"></div>

      <!-- 青ゴールマス -->
      <div class="cell-goal-Blue1">1</div>
      <div class="cell-goal-Blue2">2</div>
      <div class="cell-goal-Blue3">3</div>
      <div class="cell-goal-Blue4">4</div>
      <div class="VerticalLine15" data-line-number="15"></div>
      <div class="VerticalLine16" data-line-number="16"></div>
      <div class="HorizontalLine14" data-line-number="15"></div>
      <div class="diagonalLine2"></div>

      <!-- スタートマス赤 -->
      <div class="Home-Area-Red">24</div>
      <div class="Home-cell-Red1">1</div>
      <div class="Home-cell-Red2">2</div>
      <div class="Home-cell-Red3">3</div>
      <div class="Home-cell-Red4">4</div>

      <!-- スタートマス青 -->
      <div class="Home-Area-Blue">25</div>
      <div class="Home-cell-Bule1">1</div>
      <div class="Home-cell-Bule2">2</div>
      <div class="Home-cell-Bule3">3</div>
      <div class="Home-cell-Bule4">4</div>
      
      <!-- マス目 -->
      <div class="piece" id="piece"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// 駒の現在位置
const currentRow = ref(1);
const currentColumn = ref(1);

/// 駒を移動する関数
const movePiece = (row, column) => {
  const piece = document.getElementsByClassName("piece")[0];

  if (!piece) {
    console.error("Piece element not found.");
    return;
  }

  // 新しい位置を設定
  piece.style.gridRow = row;
  piece.style.gridColumn = column;

  // 現在位置を更新
  currentRow.value = row;
  currentColumn.value = column;
}

// 駒を矢印キーで動かす
onMounted(() => {
  // 駒を矢印キーで動かすイベントリスナーを追加
  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowUp':
        movePiece(currentRow.value - 1, currentColumn.value);
        break;
      case 'ArrowDown':
        movePiece(currentRow.value + 1, currentColumn.value);
        break;
      case 'ArrowLeft':
        movePiece(currentRow.value, currentColumn.value - 1);
        break;
      case 'ArrowRight':
        movePiece(currentRow.value, currentColumn.value + 1);
        break;
    }
  });
});

</script>
<style>
.borad{
    display: grid;
    grid-template-columns: repeat(19, 1fr);
    grid-template-rows: repeat(19
    , 1fr);    
    gap: 5px; /* 各マスの間隔 */

    width: 65vw; /* 画面幅の50% */
    height: 100vh; /* 画面の高さ全体を使う */
    position: absolute; /* 固定位置にする */
    left: 0; /* 左端に配置 */
    top: 0; /* 上端に配置 */

    background-color: rgba(211, 211, 211, 0.363); /* グリッド全体の背景色 */
  }

  .piece {
  width: 40px;
  height: 40px;
  background-color: red; /* 駒の色 */
  border-radius: 50%; /* 丸い駒 */
  place-self: center; /* セルの中央に配置 */
  grid-row: 1; /* 初期位置: 1行目 */
  grid-column: 1; /* 初期位置: 1列目 */
}


  .cell-goal-Blue1{
    width: 50px; 
    height: 50px;
    grid-row: 14;
    grid-column: 10;
    background: #0d31ffd0;
    border: black solid 1px;
  }

  .cell-goal-Blue2{
    width: 50px; 
    height: 50px;
    grid-row: 12;
    grid-column: 10;
    background: #0d31ffd0;
    border: black solid 1px;
  }

  .cell-goal-Blue3{
    width: 50px; 
    height: 50px;
    grid-row: 10;
    grid-column: 8;
    background: #0d31ffd0;
    border: black solid 1px;
  }

  .cell-goal-Blue4{
    width: 50px; 
    height: 50px;
    grid-row: 10;
    grid-column:6;
    background: #0d31ffd0;
    border: black solid 1px;
  }

  .cell-goal-Red1{
    width: 50px; 
    height: 50px;
    grid-row: 6;
    grid-column: 10;
    background: #f88;
    border: black solid 1px;
  }

  .cell-goal-Red2{
    width: 50px; 
    height: 50px;
    grid-row: 8;
    grid-column: 10;
    background: #f88;
    border: black solid 1px;
  }

  .cell-goal-Red3{
    width: 50px; 
    height: 50px;
    grid-row: 10;
    grid-column: 12;
    background: #f88;
    border: black solid 1px;
  }

  .cell-goal-Red4{
    width: 50px; 
    height: 50px;
    grid-row: 10;
    grid-column:14;
    background: #f88;
    border: black solid 1px;
  }

  .HorizontalLine1 {
    grid-row: 4;
    grid-column: 11;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
  }

  .HorizontalLine2 {
    grid-row: 8;
    grid-column: 15;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }
  .HorizontalLine3 {
    grid-row: 8;
    grid-column: 13;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }
  .HorizontalLine4 {
    grid-row: 4;
    grid-column: 9;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
  }
  .HorizontalLine5 {
    grid-row: 16;
    grid-column: 9;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
  }
  .HorizontalLine6 {
    grid-row: 8;
    grid-column: 7;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }
  .HorizontalLine7 {
    grid-row: 8;
    grid-column: 5;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }
    .HorizontalLine8 {
    grid-row: 12;
    grid-column: 15;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }
  .HorizontalLine9 {
    grid-row: 12;
    grid-column: 13;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }
 
  .HorizontalLine10 {
    grid-row: 16;
    grid-column: 11;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }
  
  .HorizontalLine11 {
    grid-row: 12;
    grid-column: 5;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }
  .HorizontalLine12 {
    grid-row: 12;
    grid-column: 7;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }

  .HorizontalLine13 {
    grid-row: 10;
    grid-column: 13;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }

  .HorizontalLine14 {
    grid-row: 10;
    grid-column: 7;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
  }

  [class^="HorizontalLine"]::after {
    content: "";
    position: absolute;
    top: 25px; /* 高さ25pxの位置に配置 */
    left: 0;
    width: 100%; /* ボックスの横幅に合わせる */
    height: 2px; /* 線の太さ */
    background-color: black; /* 線の色 */
  }

  .VerticalLine1 {
    grid-row: 5;
    grid-column: 12;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }
  .VerticalLine2 {
    grid-row: 5;
    grid-column: 8;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }
  .VerticalLine3 {
    grid-row: 7;
    grid-column: 12;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }
  .VerticalLine4 {
    grid-row: 7;
    grid-column: 8;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }
  .VerticalLine5 {
    grid-row: 9;
    grid-column: 16;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }
    .VerticalLine6 {
    grid-row: 9;
    grid-column: 4;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }
  .VerticalLine7 {
    grid-row: 11;
    grid-column: 16;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }

  .VerticalLine8 {
    grid-row: 11;
    grid-column: 4;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }
  .VerticalLine9 {
    grid-row: 13;
    grid-column: 12;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }
  .VerticalLine10 {
    grid-row: 13;
    grid-column: 8;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }
  .VerticalLine11 {
    grid-row: 15;
    grid-column: 12;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }
  .VerticalLine12 {
    grid-row: 15;
    grid-column: 8;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }

  .VerticalLine13 {
    grid-row: 5;
    grid-column: 10;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }
  .VerticalLine14 {
    grid-row: 7;
    grid-column: 10;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }
  
  .VerticalLine15 {
    grid-row: 13;
    grid-column: 10;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }
  .VerticalLine16 {
    grid-row: 15;
    grid-column: 10;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }


  [class^="VerticalLine"]::after {
    content: ''; /* 疑似要素には内容を入れなくてもOK */
    position: absolute;
    top: 0; /* 上端に配置 */
    left: 25px; /* 横幅50pxのうち25pxの位置に縦線を配置 */
    width: 0; /* 縦線なので幅は0 */
    height: 100%; /* 高さは親要素に合わせる */
    border-left: 2px solid black; /* 縦線を引くために左ボーダーを設定 */
  }

  .diagonalLine1 {
    grid-row: 9;
    grid-column: 11;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
    
  }

  .diagonalLine1::after {
    content: ''; /* 疑似要素には内容を入れなくてもOK */
    position: absolute;
    top: 0; /* 上端に配置 */
    left: 0; /* 横幅50pxのうち25pxの位置に縦線を配置 */
    width: 100%; /* 幅を親の50pxに合わせる */
    height: 100%; /* 高さを親の50pxに合わせる */
    border-left: 2px solid black; /* 縦線を引くために左ボーダーを設定 */
    transform: rotate(-45deg); /* 斜め線を描画するために45度回転 */
    transform-origin: 50% 50%; /* 中央 */
  }

  .diagonalLine2 {
    grid-row: 11;
    grid-column: 9;
    width: 50px;
    height: 50px;
    position: relative; /* 疑似要素を基準に配置 */
  }

  .diagonalLine2::after {
    content: ''; /* 疑似要素には内容を入れなくてもOK */
    position: absolute;
    top: 0; /* 上端に配置 */
    bottom: 0;
    right: 0;
    width: 100%; /* 幅を親の50pxに合わせる */
    height: 100%; /* 高さを親の50pxに合わせる */
    border-left: 2px solid black; /* 縦線を引くために左ボーダーを設定 */
    transform: rotate(135deg); /* 斜め線を描画するために45度回転 */
  }


  /* コンテナ内のアイテムの設定 */
  .Home-Area-Red{
    background: #f88;
    grid-row: 2 / span 5;
    grid-column: 14 / span 5;
    border: 2px solid black; /* アイテムに枠線を設定 */
    border-radius: 15px; /* 全ての角を15pxで丸める */
  }

  .Home-cell-Red1{
    width: 50px; 
    height: 50px;
    grid-row: 3;
    grid-column: 15;
    background: white;
    border: black solid 1px;
    border-radius: 15px; /* 全ての角を15pxで丸める */
  }

  .Home-cell-Red2{
    width: 50px; 
    height: 50px;
    grid-row: 3;
    grid-column: 17;
    background: white;
    border: black solid 1px;
    border-radius: 15px; /* 全ての角を15pxで丸める */
  }

  .Home-cell-Red3{
    width: 50px; 
    height: 50px;
    grid-row: 5;
    grid-column: 15;
    background: white;
    border: black solid 1px;
    border-radius: 15px; /* 全ての角を15pxで丸める */
  }

  .Home-cell-Red4{
    width: 50px; 
    height: 50px;
    grid-row: 5;
    grid-column: 17;
    background: white;
    border: black solid 1px;
    border-radius: 15px; /* 全ての角を15pxで丸める */
  }

  .Home-Area-Blue{
    background: #0d31ffd0;
    grid-row: 14 / span 5;
    grid-column: 2 / span 5;
    border: 2px solid black; /* アイテムに枠線を設定 */
    border-radius: 15px; /* 全ての角を15pxで丸める */
  }

  .Home-cell-Bule1{
    width: 50px; 
    height: 50px;
    grid-row: 15;
    grid-column: 3;
    background: white;
    border: black solid 1px;
    border-radius: 15px; /* 全ての角を15pxで丸める */
  }

  .Home-cell-Bule2{
    width: 50px; 
    height: 50px;
    grid-row: 15;
    grid-column: 5;
    background: white;
    border: black solid 1px;
    border-radius: 15px; /* 全ての角を15pxで丸める */
  }

  .Home-cell-Bule3{
    width: 50px; 
    height: 50px;
    grid-row: 17;
    grid-column: 3;
    background: white;
    border: black solid 1px;
    border-radius: 15px; /* 全ての角を15pxで丸める */
  }

  .Home-cell-Bule4{
    width: 50px; 
    height: 50px;
    grid-row: 17;
    grid-column: 5;
    background: white;
    border: black solid 1px;
    border-radius: 15px; /* 全ての角を15pxで丸める */
  }

  .cell-start-Red{
    width: 50px; 
    height: 50px;
    grid-row: 4;
    grid-column: 12;
    background: #f88;
    border: black solid 1px;
  }

  .cell-start-Blue{
    width: 50px; 
    height: 50px;
    grid-row: 16;
    grid-column: 8;
    background: #0d31ffd0;
    border: black solid 1px;
  }

  .cell3{
    width: 50px; 
    height: 50px;
    grid-row: 6;
    grid-column: 12;
    background-color: white;
    border: black solid 1px;
  }

  .cell4{
    width: 50px; 
    height: 50px;
    grid-row: 8;
    grid-column: 12;
    background-color: white;
    border: black solid 1px;
  }

  .cell5{
    width: 50px; 
    height: 50px;
    grid-row: 8;
    grid-column: 14;
    background-color: white;
    border: black solid 1px;
  }

  .cell6{
    width: 50px; 
    height: 50px;
    grid-row: 8;
    grid-column: 16;
    background-color: white;
    border: black solid 1px;
  }

  .cell7{
    width: 50px; 
    height: 50px;
    grid-row: 10;
    grid-column: 16;
    background-color: white;
    border: black solid 1px;
  }

  .cell8{
    width: 50px; 
    height: 50px;
    grid-row: 12;
    grid-column: 16;
    background-color: white;
    border: black solid 1px;
  }

  .cell9{
    width: 50px; 
    height: 50px;
    grid-row: 12;
    grid-column: 14;
    background-color: white;
    border: black solid 1px;
  }

  .cell10{
    width: 50px; 
    height: 50px;
    grid-row: 12;
    grid-column: 12;
    background-color: white;
    border: black solid 1px;
  }

  .cell11{
    width: 50px; 
    height: 50px;
    grid-row: 14;
    grid-column: 12;
    background-color: white;
    border: black solid 1px;
  }

  .cell12{
    width: 50px; 
    height: 50px;
    grid-row: 16;
    grid-column: 12;
    background-color: white;
    border: black solid 1px;
  }

  .cell13{
    width: 50px; 
    height: 50px;
    grid-row: 16;
    grid-column: 10;
    background-color: white;
    border: black solid 1px;
  }

  .cell14{
    width: 50px; 
    height: 50px;
    grid-row: 4;
    grid-column: 10;
    background-color: white;
    border: black solid 1px;
  }

  .cell15{
    width: 50px; 
    height: 50px;
    grid-row: 14;
    grid-column: 8;
    background-color: white;
    border: black solid 1px;
  }

  .cell16{
    width: 50px; 
    height: 50px;
    grid-row: 12;
    grid-column: 8;
    background-color: white;
    border: black solid 1px;
  }

  .cell17{
    width: 50px; 
    height: 50px;
    grid-row: 12;
    grid-column: 6;
    background-color: white;
    border: black solid 1px;
  }

  .cell18{
    width: 50px; 
    height: 50px;
    grid-row: 12;
    grid-column: 4;
    background-color: white;
    border: black solid 1px;
  }

  .cell19{
    width: 50px; 
    height: 50px;
    grid-row: 10;
    grid-column: 4;
    background-color: white;
    border: black solid 1px;
  }

  .cell20{
    width: 50px; 
    height: 50px;
    grid-row: 8;
    grid-column: 4;
    background-color: white;
    border: black solid 1px;
  }

  .cell21{
    width: 50px; 
    height: 50px;
    grid-row: 8;
    grid-column: 6;
    background-color: white;
    border: black solid 1px;
  }

  .cell22{
    width: 50px; 
    height: 50px;
    grid-row: 8;
    grid-column: 8;
    background-color: white;
    border: black solid 1px;
  }

  .cell23{
    width: 50px; 
    height: 50px;
    grid-row: 6;
    grid-column: 8;
    background-color: white;
    border: black solid 1px;
  }

  .cell24{
    width: 50px; 
    height: 50px;
    grid-row: 4;
    grid-column: 8;
    background-color: white;
    border: black solid 1px;
  }
</style>