<template>
  <el-dialog
    v-model="dialogVisible"
    :title="project.name"
    width="750px"
    top="5vh"
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
        <el-carousel height="360px" arrow="always" indicator-position="outside">
          <el-carousel-item v-for="(img, index) in project.images" :key="index">
            <img :src="img" :alt="`${project.name} 截图 ${index + 1}`" class="carousel-image" />
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
import { ref, watch, onUnmounted } from 'vue'

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

onUnmounted(() => {
  unlockBodyScroll()
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
  color: #ccd6f6;
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
    color: #ccd6f6;
    margin-bottom: 16px;

    &::before {
      content: '';
      width: 4px;
      height: 18px;
      background-color: #64ffda;
      border-radius: 2px;
    }

    i {
      color: #64ffda;
    }
  }

  .description-text {
    line-height: 1.8;
    color: #8892b0;
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
  }

  .achievement-text {
    flex: 1;
    line-height: 1.7;
    color: #8892b0;
    font-size: 0.9rem;
  }
}
</style>

<style lang="scss">
/* 全局样式 - 用于覆盖 Element Plus 弹窗（Teleport 到 body 下） */
.project-detail-dialog {
  background: #112240;
  .el-dialog {
    background-color: #112240;
    border: 1px solid #233554;
    border-radius: 12px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    margin: 5vh auto !important;
    position: relative;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .el-dialog__header {
    padding: 24px 32px 16px;
    margin: 0;
    border-bottom: 1px solid #233554;
    background-color: #112240;
    flex-shrink: 0;
  }

  .el-dialog__body {
    height: 70vh;
    padding: 24px 32px;
    background-color: #112240;
    color: #8892b0;
    overflow-y: auto;
    flex: 1;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: #233554;
      border-radius: 3px;
    }
  }

  .el-dialog__footer {
    padding: 16px 32px 24px;
    border-top: 1px solid #233554;
    background-color: #112240;
    flex-shrink: 0;
  }

  /* Element Plus 组件深色主题覆盖 */
  .el-tag--info {
    background-color: #233554;
    border-color: #64ffda;
    color: #64ffda;
  }

  .el-tag--success {
    background-color: rgba(100, 255, 218, 0.1);
    border-color: #64ffda;
    color: #64ffda;
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
  }

  .el-dialog__headerbtn {
    top: 24px;
    right: 32px;

    .el-dialog__close {
      color: #8892b0;
      font-size: 1.2rem;

      &:hover {
        color: #64ffda;
      }
    }
  }

  /* 轮播图深色样式 */
  .el-carousel {
    background-color: #0a192f;
    border-radius: 8px;
  }

  .el-carousel__arrow {
    background-color: rgba(100, 255, 218, 0.3);

    &:hover {
      background-color: #64ffda;
    }
  }

  .el-carousel__indicator {
    .el-carousel__button {
      background-color: #233554;
    }

    &.is-active .el-carousel__button {
      background-color: #64ffda;
    }
  }
}

// /* 遮罩层样式 */
// .el-overlay {
//   background-color: rgba(0, 0, 0, 0.75);
//   backdrop-filter: blur(4px);
// }
</style>
