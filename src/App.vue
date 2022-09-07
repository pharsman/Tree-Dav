<template>
  <div class="search">
    <input type="search" id="search" placeholder="Search Event...">
    <img src="@/assets/search.png" alt="">
  </div>
  <div class="div">
    <h2>All Games</h2>
    <hr>
    <TreeItem :node="datas.EN" />
  </div>
  <div class="div second">
<h2>test teste tset</h2>
  </div>

</template>

<script setup>
import { ref, computed } from 'vue';
import TreeItem from '@/components/TreeItem.vue'
import axios from 'axios'


const sport = async () => {
  const resp = await axios.get('https://sportservice.inplaynet.tech/api/sport/getheader/en')
  datas.value = JSON.parse(resp.data)
  console.log((datas.value))
}

const datas = ref('')
sport()

</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  padding: 20px;
}

#search {
  background-color: #2e3740;
  color: #ffffff;
  outline: none;
  height: 60px;
  width: 266px;
  font-size: 15px;
  margin-top: 46px;
  padding-left: 20px;
}

img {
  margin-left: -50px;
  width: 20px;
  height: 20px;
}


h2 {
  color: #ffffff;
  margin-bottom: 10px;
}

hr {
  width: 265px;
  border: 1px solid #fd402d;
  display: inline-block;
  margin-left: -20px;
  margin-bottom: 10px;
}

.div {
  padding: 20px;
  height: 610px;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 266px;
  background-color: #2e3740;
  margin-top: 20px;

  &::-webkit-scrollbar {
    background: #2e3740;
    width: 0;
  }
}

.second {
  margin-top: 20px;
}
</style>