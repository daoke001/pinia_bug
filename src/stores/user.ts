import { defineStore } from 'pinia';
import { reactive, toRefs } from 'vue';
export const useUserStore = defineStore('user', () => {
  let family = reactive({ sheep: 1 })

  // let { sheep } = toRefs(family);     //sheep 在组件中是响应的，在devtools 中也表现正常
  // let { sheep } = family;             //sheep 在组件中是响应的，在devtools 中不响应
  let sheep = 1;                      //sheep 在组件中是相应的，在devtools 中不响应
  return { family, sheep }
})