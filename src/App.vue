<template>
  <main class="min-h-screen w-full bg-gray-50 text-gray-800">
    <Navbar/>
    <hero-slider/>
  </main>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HeroSlider from './components/HeroSlider.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    HeroSlider
  }
}
</script>
