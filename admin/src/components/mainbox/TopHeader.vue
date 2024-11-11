<!--
 * @作者: NingBY
 * @Date: 2024-11-11 21:25:54
-->
<template>
    <el-header>
        <button @click="handleCollapsed">click</button>
        Header
    </el-header>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()

const handleCollapsed = () => {
    store.commit('changeCollapsed')
}
</script>

<style lang="scss" scoped>


</style>