<script setup lang="ts">
import { ref } from 'vue'
import { useMainStore } from '@/stores/index.ts'
import ThreeScene from '@/components/three/ThreeScene.vue'

const store = useMainStore()
console.log(store.count)


const count = ref(0)
</script>

<template>
  <ThreeScene/>
</template>

<style lang="scss" scoped>
.read-the-docs {
  color: #888;
}
</style>
