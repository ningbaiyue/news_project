<!--
 * @作者: NingBY
 * @Date: 2024-11-16 21:38:52
-->
<template>
    <div class="container">
        <div class="news-header" :style="{ backgroundImage: `url(${require('@/assets/newsbg.jpg')})`}"></div>

        <div class="search">
            <el-popover placement="bottom" title="检索结果" width="50%" :visible="visible">
                <template #reference>
                    <el-input
                        v-model="searchText"
                        class="w-50 m-2"
                        placeholder="请输入新闻关键字"
                        :prefix-icon="Search"
                        type="search"
                        size="large"
                        @input="visible = true"
                        @blur="visible = false"
                    />
                </template>
                
                <div v-if="searchnewslist.length">
                  <div v-for="(item) in searchnewslist" :key="item._id" class="search-item">
                    {{ item.title }}
                  </div>
                </div>

                <div v-else>
                  <el-empty description="暂无新闻" :image-size="50" />
                </div>
            </el-popover>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { Search } from '@element-plus/icons-vue'
import axios from 'axios'

const searchText = ref('')
const visible = ref(false)
const newList = ref([])

onMounted(async () => {
  var res = await axios.get('/webapi/news/list')
  // console.log(res.data)
  newList.value = res.data.data
})

const searchnewslist = computed(() => 
  searchText.value ? newList.value.filter(item => item.title.includes(searchText.value)) : []
)
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}

.news-header {
  width: 100%;
  height: 400px;
  background-size: cover;
}
.search {
  position: absolute;
  top: 300px;
  width: 100%;
  text-align: center;
  .el-input {
    width: 50%;
  }
}

.search-item {
  height: 50px;
  line-height: 50px;
  &:hover {
    background: whitesmoke;
    color: red;
  }
}

.topnews {
  margin: 20px;
  .image{
      width: 100%;
      height: 150px;
      background-size: cover;
  }
  .time{
      font-size:13px;
      color:gray;
  }
}
</style>