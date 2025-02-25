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
      
      <!-- マス目 赤 -->
      <div class="pieceRed" id="piece"></div>
      <!-- マス目 青 -->
      <div class="pieceBlue" id="piece"></div>
      <div
      v-for="(piece, index) in pieces"
      :key="index"
      :class="piece.isRed ? 'pieceRed' : 'pieceBlue'"
      :style="{ gridRow: piece.row, gridColumn: piece.column }"
      class="piece"
    ></div>
    </div>
    <div class="dice-roller">
      <DaiceRoll @dice-rolled="handleEvent"/>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// 駒のマス目
const crruentValueRed1:Ref<number> = ref(0); // 赤
const crruentValueRed2:Ref<number> = ref(0); // 赤
const crruentValueRed3:Ref<number> = ref(0); // 赤
const crruentValueRed4:Ref<number> = ref(0); // 赤

const crruentValueBlue1:Ref<number> = ref(0); // 青
const crruentValueBlue2:Ref<number> = ref(0); // 青
const crruentValueBlue3:Ref<number> = ref(0); // 青
const crruentValueBlue4:Ref<number> = ref(0); // 青
const isRed:Ref<boolean> = ref(false); // 1:赤 2:青

  interface Piece {
    id: number;
    row: number;
    column: number;
    isRed: boolean;
  }

// 赤コマ 4 つ、青コマ 4 つの初期位置（例として 1 行目・2 行目に配置）
const pieces = reactive<Piece[]>([
  { id: 1,row: 3, column: 15, isRed: true },
  { id: 2,row: 3, column: 17, isRed: true },
  { id: 3,row: 5, column: 15, isRed: true },
  { id: 4,row: 5, column: 17, isRed: true },
  { id: 5,row: 15, column: 3, isRed: false },
  { id: 6,row: 15, column: 5, isRed: false },
  { id: 7,row: 17, column: 3, isRed: false },
  { id: 8,row: 17, column: 5, isRed: false },
]);

// 選択された駒のIDを保持する reactive な変数
const selectedPieceId = ref<number | null>(null);

// 駒を選択するハンドラ
const selectPiece = (id: number) => {
  selectedPieceId.value = id;
  console.log("Selected piece id:", id);
};

// 型定義
type MyTuple = [number, [number, number]];
// 赤チームの駒の位置
const PositionOfThePiecesBlue:MyTuple[] = [
  [1 ,  [4, 12]],
  [2 ,  [6, 12]],
  [3 ,  [8, 12]],
  [4 ,  [8, 14]],
  [5 ,  [8, 16]],
  [6 ,  [10, 16]],
  [7 ,  [12, 16]],
  [8 ,  [12, 14]],
  [9 , [12, 12]],
  [10, [14, 12]],
  [11, [16, 12]],
  [12, [16, 10]],
  [13, [16, 8]],
  [14, [14, 8]],
  [15, [12, 8]],
  [16, [12, 6]],
  [17, [12, 4]],
  [18, [10, 4]],
  [19, [8, 4]],
  [20, [8, 6]],
  [21, [8, 8]],
  [22, [6, 8]],
  [23, [4, 8]],
  [24, [4, 10]],
  [25, [6, 10]],
  [26, [8, 10]],
  [27, [10, 12]],
  [28, [10, 14]],
]

// 青チームの駒の位置
const PositionOfThePiecesRed:MyTuple[] = [
  [1,  [16, 8]],
  [2,  [14, 8]],
  [3,  [12, 8]],
  [4,  [12, 6]],
  [5,  [12, 4]],
  [6,  [10, 4]],
  [7,  [8, 4]],
  [8,  [8, 6]],
  [9,  [8, 8]],
  [10, [6, 8]],
  [11, [4, 8]],
  [12, [4, 10]],
  [13, [4, 12]],
  [14, [6, 12]],
  [15, [8, 12]],
  [16, [8, 14]],
  [17, [8, 16]],
  [18, [10, 16]],
  [19, [12, 16]],
  [20, [12, 14]],
  [21, [12, 12]],
  [22, [14, 12]],
  [23, [16, 12]],
  [24, [16, 10]],
  [25, [14, 10]],
  [26, [12, 10]],
  [27, [10, 8]],
  [28, [10, 6]]
]
  

// 駒の現在位置
const currentRowRed = ref(1);
const currentColumnRed = ref(1);

const currentRowBlue = ref(1);
const currentColumnBlue = ref(1);

const handleEvent = (emitRandomValue:number) =>{
  // さいころの値が更新されたら、駒の選択状態をリセット（必要に応じて）
  selectedPieceId.value = null;
  // ユーザーが駒を選択するのを待つ
  const randomValue = emitRandomValue;
  if( isRed.value)
  {
    var tmp = crruentValueRed1.value + randomValue;
    // 赤チーム
    setTimeout(() => {
      if (tmp > 28) {
        // パスであることを表示
        alert("パス！");
      }
      
      else{
        movePiece(PositionOfThePiecesRed[tmp][1][0], PositionOfThePiecesRed[tmp][1][1],false);
        crruentValueRed1.value += randomValue;
      }
    }, 10);
  }
  else
  {
    // 青チーム
    var tmp = crruentValueBlue1.value + randomValue;
    setTimeout(() => {
      if (tmp > 28) {
        // パスであることを表示
        alert("パス！");
      }
      
      else{
        movePiece(PositionOfThePiecesBlue[tmp][1][0], PositionOfThePiecesBlue[tmp][1][1],false);
        crruentValueBlue1.value += randomValue;
      }
    }, 10);
  }

  // チームを交代する
  isRed.value = !isRed.value;
}

/// もろもろ行う関数
// const ss = async (randomValue:number) => {
//   // ユーザーが駒を選択するのを待つ
//   const selectedId = await waitForPieceSelection();
//   const selectedPiece = pieces.find(piece => piece.id === selectedId);
//   // movePieceに値を渡す。
//   if( selectedPiece?.isRed)
//   {
//     // 赤チーム
//     setTimeout(() => {
//       if (tmp > 28) {
//         // パスであることを表示
//         alert("パス！");
//       }
      
//       else{
//         movePieceAnnex(selectedPiece);
//         crruentValueRed.value += randomValue;
//       }
//     }, 10);
//   }
//   else
//   {
//     // 青チーム
//     var tmp = crruentValueBlue.value + randomValue;
//     setTimeout(() => {
//       if (tmp > 28) {
//         // パスであることを表示
//         alert("パス！");
//       }
      
//       else{
//         movePiece(PositionOfThePiecesBlue[tmp][1][0], PositionOfThePiecesBlue[tmp][1][1],false);
//         crruentValueBlue.value += randomValue;
//       }
//     }, 10);
//   }

//   // チームを交代する
//   isRed.value = !isRed.value;
// }

/// 駒を移動する関数
const movePiece = (row:number, column:number, isGoaArea:boolean) => {
  const pieceName = isRed.value ? "pieceRed" : "pieceBlue";
  const piece = document.getElementsByClassName(pieceName)[0];

  if (!piece) {
    console.error("Piece element not found.");
    return;
  }

  // 新しい位置を設定
  piece.style.gridRow = row;
  piece.style.gridColumn = column;

  // if(isRed.value){
  //   // 現在位置を更新
  //   currentRowRed.value = row;
  //   currentColumnRed.value = column;
  // }else{
  //   // 現在位置を更新
  //   currentRowBlue.value = row;
  //   currentColumnBlue.value = column;
  // }

}

const movePieceAnnex = (selectedPiece:Piece) => {
  // const pieceName = isRed.value ? "pieceRed" : "pieceBlue";
  // const piece = document.getElementsByClassName(pieceName)[0];

  // selectedPiece

  // if (!piece) {
  //   console.error("Piece element not found.");
  //   return;
  // }

  // 新しい位置を設定
  piece.style.gridRow = row;
  piece.style.gridColumn = column;

  // if(isRed.value){
  //   // 現在位置を更新
  //   currentRowRed.value = row;
  //   currentColumnRed.value = column;
  // }else{
  //   // 現在位置を更新
  //   currentRowBlue.value = row;
  //   currentColumnBlue.value = column;
  // }

}

// 駒が選択されるのを待つ Promise を返す関数
const waitForPieceSelection = (): Promise<number> => {
  return new Promise((resolve) => {
    const unwatch = watch(selectedPieceId, (newVal) => {
      if (newVal !== null) {
        resolve(newVal);
        unwatch(); // 一度解決したら監視を解除
      }
    });
  });
};
// 駒を矢印キーで動かす
// onMounted(() => {
//   // 駒を矢印キーで動かすイベントリスナーを追加
//   document.addEventListener('keydown', (event) => {
//     switch (event.key) {
//       case 'ArrowUp':
//         movePiece(currentRow.value - 1, currentColumn.value);
//         break;
//       case 'ArrowDown':
//         movePiece(currentRow.value + 1, currentColumn.value);
//         break;
//       case 'ArrowLeft':
//         movePiece(currentRow.value, currentColumn.value - 1);
//         break;
//       case 'ArrowRight':
//         movePiece(currentRow.value, currentColumn.value + 1);
//         break;
//     }
//   });
// });

</script>
<style>
.dice-roller{
  position: absolute;
  right: 0;
  top: 0;
}
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
    justify-items: center;
    align-items: center;
    background-color: rgba(211, 211, 211, 0.363); /* グリッド全体の背景色 */
  }

  .pieceRed {
    width: 40px;
    height: 40px;
    background-color: red; /* 駒の色 */
    border-radius: 50%; /* 丸い駒 */
    place-self: center; /* セルの中央に配置 */
    grid-row: 4;
    grid-column: 12;
  }

  .pieceBlue {
    width: 40px;
    height: 40px;
    background-color: blue; /* 駒の色 */
    border-radius: 50%; /* 丸い駒 */
    place-self: center; /* セルの中央に配置 */
    grid-row: 16;
    grid-column: 8;
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
    margin: 5;
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