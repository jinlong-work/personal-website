<template>
  <el-dialog
    v-model="dialogVisible"
    :title="project.name"
    width="750px"
    top="5vh"
    :fullscreen="isMobile"
    :close-on-click-modal="true"
    :close-on-press-escape="true"
    class="project-detail-dialog"
    @closed="handleClosed"
  >
    <template #header>
      <div class="dialog-header">
        <span class="dialog-title">{{ project.name }}</span>
        <el-tag v-if="project.type" type="success" size="small" effect="dark">{{
          project.type
        }}</el-tag>
      </div>
    </template>

    <div class="dialog-content">
      <!-- 项目图片 -->
      <div v-if="project.images && project.images.length" class="image-section">
        <div class="image-hint">
          <i class="fa-solid fa-magnifying-glass-plus"></i>
          点击图片可放大预览
        </div>
        <el-carousel :height="carouselHeight" arrow="always" indicator-position="outside">
          <el-carousel-item v-for="(img, index) in project.images" :key="index">
            <div class="image-wrapper">
              <el-image
                :src="img"
                :alt="`${project.name} 截图 ${index + 1}`"
                :preview-src-list="project.images"
                :initial-index="index"
                scale="0.7"
                fit="cover"
                class="carousel-image"
                preview-teleported
              />
              <div class="image-click-hint">
                <i class="fa-solid fa-hand-pointer"></i>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>

      <!-- 项目描述 -->
      <div class="info-section">
        <h4 class="section-title">
          <i class="fa-solid fa-file-lines"></i>
          项目简介
        </h4>
        <p class="description-text">{{ project.description }}</p>
      </div>

      <!-- 技术栈 -->
      <div class="tech-section">
        <h4 class="section-title">
          <i class="fa-solid fa-code"></i>
          技术栈
        </h4>
        <div class="tech-tags">
          <el-tag
            v-for="(tech, index) in project.technologies"
            :key="index"
            type="info"
            effect="dark"
          >
            {{ tech }}
          </el-tag>
        </div>
      </div>

      <!-- 主要职责 -->
      <div class="achievements-section">
        <h4 class="section-title">
          <i class="fa-solid fa-tasks"></i>
          主要职责
        </h4>
        <ul class="achievements-list">
          <li
            v-for="(achievement, index) in project.achievements"
            :key="index"
            class="achievement-item"
          >
            <span class="achievement-number">{{ index + 1 }}</span>
            <span class="achievement-text">{{ achievement }}</span>
          </li>
        </ul>
      </div>
    </div>

    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="handleClose">关闭</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, watch, onUnmounted, nextTick, computed, onMounted } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  project: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['close'])

const dialogVisible = ref(false)
const windowWidth = ref(window.innerWidth)

const isMobile = computed(() => windowWidth.value <= 768)

const carouselHeight = computed(() => {
  if (windowWidth.value <= 480) return '200px'
  if (windowWidth.value <= 768) return '260px'
  return '360px'
})

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

const lockBodyScroll = () => {
  document.body.style.overflow = 'hidden'
}

const unlockBodyScroll = () => {
  document.body.style.overflow = ''
}

watch(
  () => props.visible,
  (newVal) => {
    dialogVisible.value = newVal
    if (newVal) {
      lockBodyScroll()
      nextTick(() => {
        const dialog = document.querySelector('.project-detail-dialog')
        if (dialog) {
          const isLight = document.documentElement.classList.contains('light-theme')
          dialog.classList.toggle('light-theme', isLight)
        }
      })
    } else {
      unlockBodyScroll()
    }
  }
)

watch(dialogVisible, (newVal) => {
  if (!newVal) {
    emit('close')
    unlockBodyScroll()
  }
})

const handleClose = () => {
  dialogVisible.value = false
}

const handleClosed = () => {
  emit('close')
  unlockBodyScroll()
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  unlockBodyScroll()
  window.removeEventListener('resize', handleResize)
})
</script>

<style lang="scss" scoped>
/* 组件内部样式 - 只作用于组件内的元素 */
.dialog-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.dialog-title {
  font-size: 1.4rem;
  font-weight: 700;
}

.dialog-content {
  .image-section {
    margin-bottom: 28px;
  }

  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #233554;

    :deep(.project-detail-dialog.light-theme) & {
      border-color: #eee8d5;
    }
  }

  .info-section,
  .tech-section,
  .achievements-section {
    margin-bottom: 28px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .section-title {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.05rem;
    font-weight: 600;
    margin-bottom: 16px;

    &::before {
      content: '';
      width: 4px;
      height: 18px;
      background-color: #64ffda;
      border-radius: 2px;

      :deep(.project-detail-dialog.light-theme) & {
        background-color: #859900;
      }
    }

    i {
      color: #64ffda;

      :deep(.project-detail-dialog.light-theme) & {
        color: #859900;
      }
    }
  }

  .description-text {
    line-height: 1.8;
    margin: 0;
    font-size: 0.95rem;
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .achievements-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .achievement-item {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 16px 0;
    border-bottom: 1px solid #233554;

    :deep(.project-detail-dialog.light-theme) & {
      border-color: #eee8d5;
    }

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }

    &:first-child {
      padding-top: 0;
    }
  }

  .achievement-number {
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    background-color: #64ffda;
    color: #0a192f;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    font-weight: 700;

    :deep(.project-detail-dialog.light-theme) & {
      background-color: #859900;
      color: #fef9ef;
    }
  }

  .achievement-text {
    flex: 1;
    line-height: 1.7;
    font-size: 0.9rem;
  }
}

/* 移动端适配 - scoped内 */
@media (max-width: 768px) {
  .dialog-title {
    font-size: 1.2rem;
  }
  .dialog-content {
    .image-section {
      margin-bottom: 20px;
    }
    .info-section,
    .tech-section,
    .achievements-section {
      margin-bottom: 20px;
    }
    .section-title {
      font-size: 1rem;
      margin-bottom: 12px;
    }
    .description-text {
      font-size: 0.9rem;
    }
    .achievement-item {
      padding: 12px 0;
      gap: 10px;
    }
    .achievement-text {
      font-size: 0.85rem;
    }
  }
}

@media (max-width: 480px) {
  .dialog-title {
    font-size: 1.1rem;
  }
  .dialog-content {
    .tech-tags {
      gap: 8px;
    }
    .achievement-number {
      width: 24px;
      height: 24px;
      font-size: 0.8rem;
    }
  }

  .image-hint {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 12px;
    font-size: 0.85rem;
    color: #8892b0;

    :deep(.project-detail-dialog.light-theme) & {
      color: #657b83;
    }

    i {
      color: #64ffda;

      :deep(.project-detail-dialog.light-theme) & {
        color: #859900;
      }
    }
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .image-click-hint {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 1rem;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;

    .image-wrapper:hover & {
      opacity: 1;
    }
  }
}
</style>

<style lang="scss">
/* 全局样式 - 用于覆盖 Element Plus 弹窗 */
.project-detail-dialog {
  /* 暗夜主题（默认） */
  &:not(.light-theme) {
    background-color: #112240;
    .el-dialog {
      background-color: #112240;
      border: 1px solid #233554;
    }
    .el-dialog__header,
    .el-dialog__body,
    .el-dialog__footer {
      background-color: #112240;
      border-color: #233554;
    }
    .dialog-title {
      color: #ccd6f6;
    }
    .section-title {
      color: #ccd6f6;
    }
    .description-text,
    .achievement-text {
      color: #8892b0;
    }
    .el-dialog__body {
      color: #8892b0;
    }
    .el-dialog__close {
      color: #8892b0;
    }
    .el-carousel {
      background-color: #0a192f;
    }
    .el-carousel__indicator .el-carousel__button {
      background-color: #233554;
    }
    .el-dialog__body::-webkit-scrollbar-thumb {
      background: #233554;
    }
    .achievement-item {
      border-bottom-color: #233554;
    }
  }

  /* 明亮主题 */
  &.light-theme {
    background-color: #fef9ef;
    .el-dialog {
      background-color: #fef9ef;
      border: 1px solid #eee8d5;
    }
    .el-dialog__header,
    .el-dialog__body,
    .el-dialog__footer {
      background-color: #fef9ef;
      border-color: #eee8d5;
    }
    .dialog-title {
      color: #586e75;
    }
    .section-title {
      color: #586e75;
    }
    .description-text,
    .achievement-text {
      color: #657b83;
    }
    .el-dialog__body {
      color: #657b83;
    }
    .el-dialog__close {
      color: #657b83;
    }
    .el-carousel {
      background-color: #fdf6e3;
    }
    .el-carousel__indicator .el-carousel__button {
      background-color: #eee8d5;
    }
    .el-dialog__body::-webkit-scrollbar-thumb {
      background: #eee8d5;
    }
    .achievement-item {
      border-bottom-color: #eee8d5;
    }
  }

  .el-dialog {
    border-radius: 12px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /* 非全屏模式下的样式 */
  &:not(.is-fullscreen) {
    .el-dialog {
      margin: 5vh auto !important;
      max-height: 85vh;
      position: relative;
    }
    .el-dialog__header {
      padding: 24px 32px 16px;
      margin: 0;
      border-bottom: 1px solid;
      flex-shrink: 0;
    }
    .el-dialog__body {
      height: 70vh;
      padding: 24px 32px;
      overflow-y: auto;
      flex: 1;

      &::-webkit-scrollbar {
        width: 6px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 3px;
      }
    }
    .el-dialog__footer {
      padding: 16px 32px 24px;
      border-top: 1px solid;
      flex-shrink: 0;
    }
    .el-dialog__headerbtn {
      top: 24px;
      right: 32px;
    }
  }

  /* 全屏模式下的样式 */
  &.is-fullscreen {
    .el-dialog {
      border-radius: 0;
    }
    .el-dialog__header {
      padding: 20px 20px 12px;
    }
    .el-dialog__body {
      padding: 20px;
    }
    .el-dialog__footer {
      padding: 12px 20px 16px;
    }
    .el-dialog__headerbtn {
      top: 20px;
      right: 20px;
    }
  }

  /* Element Plus 组件深色主题覆盖 */
  .el-tag--info {
    background-color: #233554;
    border-color: #64ffda;
    color: #64ffda;

    html.light-theme & {
      background-color: #fdf6e3;
      border-color: #859900;
      color: #859900;
    }
  }

  .el-tag--success {
    background-color: rgba(100, 255, 218, 0.1);
    border-color: #64ffda;
    color: #64ffda;

    html.light-theme & {
      background-color: rgba(133, 153, 0, 0.1);
      border-color: #859900;
      color: #859900;
    }
  }

  .el-button--primary {
    background-color: #64ffda;
    border-color: #64ffda;
    color: #0a192f;
    font-weight: 600;

    &:hover {
      background-color: #4dd9b5;
      border-color: #4dd9b5;
    }

    html.light-theme & {
      background-color: #859900;
      border-color: #859900;
      color: #fef9ef;

      &:hover {
        background-color: #6b7a00;
        border-color: #6b7a00;
      }
    }
  }

  .el-dialog__headerbtn {
    .el-dialog__close {
      font-size: 1.2rem;

      &:hover {
        color: #64ffda;

        html.light-theme & {
          color: #859900;
        }
      }
    }
  }

  /* 轮播图样式 */
  .el-carousel {
    border-radius: 8px;
  }

  .el-carousel__arrow {
    background-color: rgba(100, 255, 218, 0.3);

    &:hover {
      background-color: #64ffda;
    }

    html.light-theme & {
      background-color: rgba(133, 153, 0, 0.3);

      &:hover {
        background-color: #859900;
      }
    }
  }

  .el-carousel__indicator {
    &.is-active .el-carousel__button {
      background-color: #64ffda;

      html.light-theme & {
        background-color: #859900;
      }
    }
  }
}
</style>
