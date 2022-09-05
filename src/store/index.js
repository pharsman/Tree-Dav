// import { createStore } from "vuex";
// import axios from 'axios'

// const store = createStore({
//     state: {
//         data: []
//     },
//     mutations: {
//         setData(state,payload){
//             state.data = payload
//         }
//     },
//     actions: {
//         async sport(context)  {
//             const resp = await axios.get('https://sportservice.inplaynet.tech/api/sport/getheader/en')
//             const datas = JSON.parse(resp.data)
//             console.log((datas))
//             const allData = ref([])
          
//             for(const key in datas) {
//               const data = {
//                 id : key,
//                 name : datas.EN.Sports[key].Name,
//               }
//               allData.push(data)
//             }
//             context.commit('setData', allData)
//           }
//     },
//     getters: {
//         counter(state) {
//             return state.data
//         }
//     }
// })

// export default store