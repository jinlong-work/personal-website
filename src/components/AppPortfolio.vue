<template>
  <section class="portfolio section" id="portfolio">
    <h2 class="section__title">地图框架案例集</h2>
    <span class="section__subtitle">功能展示</span>

    <div class="portfolio__container container swiper-container">
      <swiper
        class="swiper"
        :modules="modules"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        :pagination="{ clickable: true }"
        navigation
      >
        <swiper-slide v-for="(item, index) in portfolioList" :key="index">
          <div class="portfolio__content grid swiper-slide">
            <img :src="item.img" alt="" class="portfolio__img" />

            <div class="portfolio_">
              <h3 class="portfolio__title">
                {{ item.title }}
              </h3>
              <p class="portfolio__description">
                {{ item.describe }}
              </p>
              <a
                :href="item.url"
                target="_blank"
                class="button button--flex button--small portfolio__button"
              >
                Demo
                <i class="fa-solid fa-right-long button__icon"></i>
              </a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// 导入图片
import portfolio1Img from '@/assets/img/portfolio1.jpg'
import portfolio2Img from '@/assets/img/portfolio2.jpg'
import portfolio3Img from '@/assets/img/portfolio3.jpg'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const portfolioList = ref([
      {
        url: 'http://www.caojinlong.site:8081',
        title: 'Cesium例子合集',
        describe: '本合集汇集了多个 Cesium 的使用示例，涵盖基础到高级应用，使用了Cesium的核心功能。包括：天气效果、弹窗、聚合效果、常用数据加载、白膜特效等等。',
        img: portfolio1Img
      },
      {
        url: 'http://www.caojinlong.site:8082',
        title: 'Openlayers例子合集',
        describe: '本合集汇集了多个 Openlayers 的使用示例，涵盖基础到高级应用，使用了Openlayers的核心功能。包括：地图加载、图层切换、高亮弹窗、腾讯地图IP定位、工具箱等等。',
        img: portfolio2Img
      },
      {
        url: 'http://www.caojinlong.site:8083',
        title: 'Mapbox例子合集',
        describe: '本合集展示了多个基于 Mapbox 的三维地球和地图功能示例，涵盖基础到高级应用，使用了Mapbox的核心功能。包括：要素高亮、测量、图层动态弹窗、动态线、聚合图等等。',
        img: portfolio3Img
      }
    ])
    return {
      modules: [Pagination, Navigation],
      portfolioList
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../styles/tools/_sassMagic.scss';
.portfolio {
  &__container {
    overflow: initial;
  }

  &__content {
    padding: 0 1.5rem;
    @include min-screen(568px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include min-screen(768px) {
      align-items: center;
    }
    @include min-screen(1024px) {
      column-gap: 5rem;
    }
  }

  &__img {
    width: 265px;
    border-radius: 0.5rem;
    justify-self: center;
    @include min-screen(768px) {
      width: 320px;
    }
  }

  &__title {
    font-size: var(--h3-font-size);
    margin-bottom: var(--mb-0-5);
  }

  &__description {
    margin-bottom: var(--mb-0-75);
  }

  &__button:hover .button__icon {
    transform: translateX(0.25rem);
  }
}
.grid {
  display: grid;
}
:deep(.swiper-button-next):after,
:deep(.swiper-button-prev):after {
  font-size: 1.5rem;
  color: var(--first-color);
}
:deep(.swiper-pagination-bullet-active) {
  background-color: var(--first-color);
}
</style>
