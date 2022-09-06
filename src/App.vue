<template>
  <TreeItem :node="datas.EN" />
</template>

<script setup>
import { ref, computed } from 'vue';
import TreeItem from '@/components/TreeItem.vue'
import axios from 'axios'


const sport = async () => {
  const resp = await axios.get('https://sportservice.inplaynet.tech/api/sport/getheader/en')
  datas.value = JSON.parse(resp.data)
  console.log((datas.value))
  // const allData = ref({})
  // for(const key in datas.value) {
  //   const data = {
  //     id : key,
  //     name : datas.value.EN.Sports[key].Name,
  //   }
  //   allData.value.push(data)
  // }
}

const datas = ref('')
sport()

</script>
