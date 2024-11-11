<!--
 * @作者: NingBY
 * @Date: 2024-11-07 20:52:33
-->
<template>
    <el-container>
        <SideMenu />
        <el-container direction="vertical">
            <TopHeader />
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import SideMenu from '../components/mainbox/SideMenu.vue'
import TopHeader from '../components/mainbox/TopHeader.vue'
</script>