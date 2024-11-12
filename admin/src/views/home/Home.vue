<!--
 * @作者: NingBY
 * @Date: 2024-11-10 17:52:00
-->
<template>
    <div>
        home
    </div>
</template>

<script setup>
import axios from 'axios'

axios.get("/adminapi/user/home").then(res=>{
    console.log(res.data)
})
</script>