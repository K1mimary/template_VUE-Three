
<script setup lang="ts">
import * as THREE from 'three'
import { onMounted, ref } from 'vue'

const sceneContainer = ref<HTMLElement | null>(null)

onMounted(() => {
if (!sceneContainer.value) return

// Сцена
const scene = new THREE.Scene()

// Камера
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5

// Рендерер
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
sceneContainer.value.appendChild(renderer.domElement)

// Куб
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// Анимация
const animate = () => {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
}

animate()

// Хэндлер ресайза
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    })
})
</script>

<template>
    <div ref="sceneContainer" style="width: 100%; height: 100vh;"></div>
</template>