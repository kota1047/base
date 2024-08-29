<template>
    <div class="outrSquare">
        <div class="innerSquare-Red"/>
        <div class="innerSquare-Green"/>
        <div class="innerSquare-Blue"/>
        <div class="innerSquare-Yellow"/>
        <div class="cercle"/>
    </div>
</template>
<script lang="ts"></script>
<style>
    .outrSquare {
        /* margin: 10px 100px 10px 100px; */
        width        : 950px;
        height       : 850px;
        border: groove;
        background-color:aliceblue;
        position: relative;
        top: 10px;
        left: 10px;
    }

    .innerSquare-Red{
        width        : 250px;
        height       : 250px;
        border: solid;
        /* border-color:crimson; */
        background-color:crimson;
        position: absolute;
        top: 20px;
        left: 30px;

    }

    .innerSquare-Green{
        margin: 10px 10px 1px 10px;
        width        : 250px;
        height       : 250px;
        border: solid;
        background-color:forestgreen;
        position: absolute;
        top: 15px;
        right: 20px;
    }

    .innerSquare-Blue{
        margin: 10px 10px 1px 10px;
        width        : 250px;
        height       : 250px;
        border: solid;
        background-color:blue;
        position: absolute;
        top: 560px;
        left: 20px;
    }

    .innerSquare-Yellow{
        margin: 10px 10px 1px 10px;
        width        : 250px;
        height       : 250px;
        border: solid;
        /* border-color:forestgreen; */
        background-color:gold;
        position: absolute;
        top: 560px;
        right: 20px;
    }

    .cercle{
        width: 75px;
        height: 75px;
        line-height: 200px;
        background-color:blue;
        border-radius: 50%;
        color:black;
        /* border-color: black; */
        position: absolute;
        top: 20px;
        left: 320px;
    }
</style>