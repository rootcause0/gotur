<template>
  <div>
    <!-- autoplay :duration="2400" !-->
    <vueper-slides :bullets="false" :arrows="false" fixed-height="500px">
      <vueper-slide v-for="(slide, i) in slides" :key="i"
                    :image="slide.image"/>
    </vueper-slides>
  </div>
</template>
<script>
import {VueperSlides, VueperSlide} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: {VueperSlides, VueperSlide},
  data: () => ({
    slides: [
      {
        image: 'https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg'
      },
      {
        image: 'https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg'
      },
      {
        image: 'https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg'
      }
    ]
  })

}

</script>