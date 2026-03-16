<template>
  <section class="about section" id="about">
    <h2 class="section__title">关于我</h2>
    <span class="section__subtitle">自我介绍</span>
    <div class="about__container container grid">
      <img src="@/assets/img/个人照片2.jpg" class="about__img" />

      <div class="about__data">
        <p class="about__description">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您好！我叫曹进龙，2023年毕业于湖北大学地理信息科学专业。在过去的一年中，我深入学习了WebGIS开发相关的知识，掌握了诸如Vue、Openlayers、Mapbox、Cesium等前端技术，并且熟悉使用这些技术来开发与GIS相关的应用。我对地理信息系统有着浓厚的兴趣，乐于钻研技术细节，致力于将地理数据与现代Web技术相结合，开发出高效、直观的GIS应用。我相信自己的专业背景和技术能力能够胜任贵公司的WebGIS岗位，期待能有机会为公司贡献我的力量。
        </p>
        <div class="about__info">
          <div class="about__info-item">
            <span class="about__info-title">24</span>
            <span class="about__info-name">年龄</span>
          </div>

          <div class="about__info-item">
            <span class="about__info-title">本科</span>
            <span class="about__info-name">学历</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '../styles/tools/_sassMagic.scss';
.about {
  &__container {
    justify-content: center;
    @include min-screen(568px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include min-screen(768px) {
      column-gap: 5rem;
    }
  }
  &__data {
    max-width: 344px;
    animation: fadeIn 0.8s ease forwards;
    @include min-screen(768px) {
      margin: 0 auto;
      align-self: center;
    }
  }
  &__img {
    width: 85px;
    height: 100px;
    border-radius: 100%;
    justify-self: center;
    align-self: center;
    transition: all 0.5s ease;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    @include min-screen(768px) {
      width: 170px;
      height: 200px;
    }
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    }
  }

  &__description {
    text-align: center;
    margin-bottom: var(--mb-2-5);
    line-height: 1.6;
    @include min-screen(768px) {
      text-align: initial;
    }
  }

  &__info {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: var(--mb-2-5);
  }
  &__info-item {
    width: 100px;
    height: 50px;
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-5px);
    }
  }

  &__info-title {
    font-size: var(--h2-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--first-color);
    margin-bottom: var(--mb-0-5);
    transition: all 0.3s ease;
  }

  &__info-name {
    font-size: var(--smaller-font-size);
    color: var(--text-color);
  }

  &__info-title,
  &__info-name {
    display: block;
    text-align: center;
  }
}
</style>
