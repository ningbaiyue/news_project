<!--
 * @作者: NingBY
 * @Date: 2024-11-16 21:37:02
-->
<template>
    <div class="container">
        <el-carousel height="calc(100vh - 59px)">
            <el-carousel-item v-for="(item, index) in bgImg" :key="index">
                <div :style="{ backgroundImage: `url(${require(`@/assets/${item}`)})`}"></div>
            </el-carousel-item>
        </el-carousel>

        <div class="center">互联网+时代</div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const bgImg = ref(['home1.jpg', 'home2.jpg', 'home3.jpg'])
</script>

<style lang="scss" scoped>
.el-carousel div{
    width: 100%;
    height:100%;
    background-size: cover;
}

.container{
    position: relative;
}
.center{
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    height: 100px;
    line-height: 100px;
    font-size: 60px;
    color:white;
    text-align: center;
}

</style>