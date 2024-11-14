<!--
 * @作者: NingBY
 * @Date: 2024-11-14 21:00:16
-->
<template>
    <div id="myeditor">
        
    </div>
</template>

<script setup>
import { onMounted, defineEmits } from 'vue'
import E from "wangeditor"
const emit = defineEmits(["event"])
onMounted(() => {
    const editor = new E('#myeditor')
    editor.create()

    editor.config.onchange  = function (newHtml) {
        // console.log("change 之后最新的 html", newHtml)

        emit("event", newHtml)
    }
})
</script>

<style lang="scss" scoped>


</style>