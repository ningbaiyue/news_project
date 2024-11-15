<!--
 * @作者: NingBY
 * @Date: 2024-11-14 21:00:16
-->
<template>
    <div id="myeditor">
        
    </div>
</template>

<script setup>
import { onMounted, defineEmits, defineProps } from 'vue'
import E from "wangeditor"
const emit = defineEmits(["event"])

const props = defineProps({
    content: String
})

onMounted(() => {
    const editor = new E('#myeditor')
    editor.create()
    // 设置初始值
    props.content && editor.txt.html(props.content)
    
    editor.config.onchange  = function (newHtml) {
        // console.log("change 之后最新的 html", newHtml)

        emit("event", newHtml)
    }
})
</script>

<style lang="scss" scoped>


</style>