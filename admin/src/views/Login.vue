<!--
 * @作者: NingBY
 * @Date: 2024-11-07 20:51:41
-->
<template>
    <div>
        login

        <button @click="handleLogin">login</button>
    </div>
</template>

<script setup>
const handleLogin = () => {
    localStorage.setItem('token', 'nby')
}
</script>