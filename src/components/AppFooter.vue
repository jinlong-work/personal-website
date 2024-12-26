<template>
  <footer class="footer" id="contact">
    <div class="footer__bg">
      <div class="footer__container container grid">
        <div class="footer__information">
          <i class="fa-solid fa-phone footer__icon"></i>
          <div>
            <h3 class="footer__title">{{ $t('tel') }}</h3>
            <span class="footer__subtitle">13310539521</span>
          </div>
        </div>

        <div class="footer__information">
          <i class="fa-solid fa-envelope footer__icon"></i>

          <div>
            <h3 class="footer__title">{{ $t('email') }}</h3>
            <span class="footer__subtitle">1426559553@qq.com</span>
          </div>
        </div>

        <div class="footer__information">
          <i class="fa-brands fa-weixin footer__icon"></i>

          <div>
            <!-- <h3 class="footer__title">{{ $t('wechat') }}</h3> -->
            <img src="../assets/img/weixin.jpg" alt="weixin" class="weixin" />
          </div>
        </div>

        <div class="footer__information">
          <i class="fa-solid fa-location-dot footer__icon"></i>

          <div>
            <h3 class="footer__title">{{ $t('location') }}</h3>
            <span class="footer__subtitle">{{ $t('location__detail') }}</span>
          </div>
        </div>
      </div>

      <p class="footer__copy">&copy; 2024 Caojinlong</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../styles/tools/_sassMagic.scss';
.footer {
  padding-top: 2rem;
  &__container {
    @include min-screen(568px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include min-screen(768px) {
      grid-template-columns: repeat(3, 1fr);
      padding: 0 1rem;
    }
    @include min-screen(1024px) {
      padding: 0;
    }
  }

  &__bg {
    background-color: var(--first-color-second);
    padding: 2rem 0 3rem;
    @include min-screen(768px) {
      padding: 3rem 0 3.5rem;
    }
  }

  &__title {
    font-size: var(--normal-font-size);
    margin-bottom: var(--mb-0-25);
  }

  &__subtitle {
    font-size: var(--normal-font-size);
  }

  &__information {
    display: flex;
    padding-left: 40px;
    margin-bottom: var(--mb-2);
    align-items: center;
  }

  &__icon {
    font-size: 2rem;
    margin-right: var(--mb-0-75);
  }
  &__copy {
    font-size: var(--smaller-font-size);
    text-align: center;
    color: var(--text-color-light);
    margin-top: var(--mb-3);
    @include min-screen(768px) {
      margin-top: 4.5rem;
    }
  }

  &__title,
  &__subtitle,
  &__information {
    color: #fff;
    fill: #fff;
  }

  .weixin {
    width: 100px;
    height: auto;
    max-width: 100%;
  }
}
</style>
