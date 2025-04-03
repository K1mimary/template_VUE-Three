import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    count: 0,
    username: 'Guest',
  }),
  actions: {
    increment() {
      this.count++
    },
    setUsername(name: string) {
      this.username = name
    },
  },
})