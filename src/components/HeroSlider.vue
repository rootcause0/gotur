<template>
  <div>
    <!-- autoplay :duration="2400" !-->
    <vueper-slides
      :bullets="false"
      :arrows="false"
      autoplay
      :duration="2000"
      fixed-height="500px"
    >
      <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image">
        <template #content>
          <div class="flex justify-stretch items-center">
            <div class="logo-container">
              <img
                data-testid="main-image"
                src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
                alt="Logo"
                shape="NORMAL"
                class="style__Image-sc-__sc-1h9bp23-0 iceviX"
              />
            </div>

            <div class="login-card">
              <div class="bg-white h-full w-full">

              <h5 style="color:#5d3ebc">Giriş yap ya da kayıt ol</h5>
              </div>
            </div>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
  data: () => ({
    slides: [
      {
        image:
          "https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg",
      },
      {
        image:
          "https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg",
      },
      {
        image:
          "https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg",
      },
    ],
  }),
};
</script>
