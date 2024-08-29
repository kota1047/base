<template>
    <div class="box" id="makeImg"/>
        <div
        :style="{
            transform: `translate(${x}px, ${y}px)`
        }">
        <img src="../assets/icon_psyduck.png" class="icon_codack" alt="コダック" width="75" height="75"/>
        </div>
</template>

<script setup lang="ts">
/** x座標 */
const x = ref(300)
/** y座標 */
const y = ref(250)

// window.addEventListener("click",  (event) => {
//   // x座標
//    x.value = event.pageX
//   // y座標
//   y.value = event.pageY
// })

</script>

<style>
    .icon_codack {
        transition: transform 5ms;
    }
    .box {
        margin       : auto;
        width        : 150px;
        height       : 150px;
        background   : linear-gradient(to bottom, #99ccff, #0059b3);
    }

</style>