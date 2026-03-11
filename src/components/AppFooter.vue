<template>
  <div class="footer__bg">
    <div class="footer__container container grid">
      <div class="footer__information">
        <i class="fa-solid fa-phone footer__icon"></i>
        <div>
          <h3 class="footer__title">{{ t('tel') }}</h3>
          <span class="footer__subtitle">{{ t('tel__number') }}</span>
        </div>
      </div>

      <div class="footer__information footer__wechat">
        <i class="fa-brands fa-weixin footer__icon"></i>

        <div>
          <h3 class="footer__title">{{ t('wechat') }}</h3>
          <img src="@/assets/img/weixin.jpg" alt="weixin" class="weixin" />
        </div>
      </div>

      <div class="footer__information">
        <i class="fa-solid fa-location-dot footer__icon"></i>

        <div>
          <h3 class="footer__title">{{ t('location') }}</h3>
          <span class="footer__subtitle">{{ t('location__detail') }}</span>
        </div>
      </div>
    </div>

    <p class="footer__copy">&copy; 2024 Caojinlong</p>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="scss" scoped>
@import '../styles/tools/_sassMagic.scss';
.footer__container {
  gap: 2rem;
  @include min-screen(568px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @include min-screen(768px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 0 1rem;
  }
  @include min-screen(1024px) {
    padding: 0;
  }
}

.footer__bg {
  background-color: var(--first-color-second);
  padding: 2rem 0 3rem;
  @include min-screen(768px) {
    padding: 3rem 0 3.5rem;
  }
}

.footer__title {
  font-size: var(--normal-font-size);
  margin-bottom: var(--mb-0-5);
  font-weight: var(--font-medium);
}

.footer__subtitle {
  font-size: var(--small-font-size);
  opacity: 0.9;
}

.footer__information {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
  margin-bottom: var(--mb-2);
}

.footer__icon {
  font-size: 2.5rem;
  margin-bottom: var(--mb-1);
  color: var(--first-color-light);
  transition: all 0.3s ease;
  .footer:hover {
    transform: translateY(-3px);
    color: var(--first-color);
  }
}

.footer__wechat {
  .weixin {
    width: 80px;
    height: 80px;
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    margin-top: var(--mb-0-5);
  }
}

.footer__copy {
  font-size: var(--smaller-font-size);
  text-align: center;
  color: var(--text-color-light);
  margin-top: var(--mb-3);
  @include min-screen(768px) {
    margin-top: 3rem;
  }
}

.footer__title,
.footer__subtitle,
.footer__information {
  color: #fff;
  fill: #fff;
}
</style>
