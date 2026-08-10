<template>
  <el-dialog
    v-model="dialogVisible"
    :title="title"
    width="90%"
    top="3vh"
    :fullscreen="isMobile"
    :close-on-click-modal="true"
    :close-on-press-escape="true"
    class="resume-preview-dialog"
    :class="{ 'light-theme': !isDark }"
    @closed="handleClosed"
  >
    <template #header>
      <div class="dialog-header">
        <i class="fa-solid fa-file-pdf dialog-icon"></i>
        <span class="dialog-title">{{ title }}</span>
      </div>
    </template>

    <div class="pdf-viewer-wrapper">
      <vue-pdf-app
        :pdf="pdfSrc"
        :theme="isDark ? 'dark' : 'light'"
        :file-name="fileName"
        page-scale="page-width"
      />
    </div>
  </el-dialog>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, computed, defineAsyncComponent, h } from 'vue'
import 'vue3-pdf-app/dist/icons/main.css'
import { RESUME_FILE_NAME } from '@/content/siteContent'

// 懒加载 vue3-pdf-app（内含完整 pdf.js，体积较大），仅在弹窗首次打开时加载，
// 配合 el-dialog 的内容懒渲染，避免拖慢首屏。
const VuePdfApp = defineAsyncComponent({
  loader: () => import('vue3-pdf-app').then((m) => m.default),
  loadingComponent: {
    render: () =>
      h('div', { class: 'pdf-loading' }, [
        h('i', { class: 'fa-solid fa-circle-notch fa-spin' }),
        h('span', null, '加载中…')
      ])
  },
  delay: 0
})

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  pdfSrc: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: '简历预览'
  },
  isDark: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['close'])

const dialogVisible = ref(false)
const windowWidth = ref(window.innerWidth)
const fileName = RESUME_FILE_NAME

const isMobile = computed(() => windowWidth.value <= 768)

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
.dialog-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dialog-icon {
  color: #64ffda;

  :deep(.resume-preview-dialog.light-theme) & {
    color: #859900;
  }
}

.dialog-title {
  font-size: 1.4rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
}

.pdf-viewer-wrapper {
  width: 100%;
  height: 100%;

  :deep(.vue-pdf-app) {
    height: 100%;
  }
}

.pdf-loading {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  color: #8892b0;
  font-size: 0.95rem;

  i {
    font-size: 2rem;
    color: #64ffda;
  }

  :deep(.resume-preview-dialog.light-theme) & {
    color: #657b83;

    i {
      color: #859900;
    }
  }
}
</style>

<style lang="scss">
/* 全局样式 - 用于覆盖 Element Plus 弹窗并适配主题 */
.resume-preview-dialog {
  /* 暗夜主题（默认） */
  &:not(.light-theme) {
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
    .el-dialog__body {
      color: #8892b0;
    }
    .el-dialog__close {
      color: #8892b0;
    }
  }

  /* 明亮主题 */
  &.light-theme {
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
    .el-dialog__body {
      color: #657b83;
    }
    .el-dialog__close {
      color: #657b83;
    }
  }

  .el-dialog {
    border-radius: 12px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-width: 1200px;
  }

  /* 非全屏模式（桌面） */
  &:not(.is-fullscreen) {
    .el-dialog {
      margin: 3vh auto !important;
      max-height: 94vh;
      position: relative;
    }
    .el-dialog__header {
      padding: 20px 28px 14px;
      margin: 0;
      border-bottom: 1px solid;
      flex-shrink: 0;
    }
    .el-dialog__body {
      height: 80vh;
      padding: 0;
      overflow: hidden;
      flex: 1;
    }
    .el-dialog__headerbtn {
      top: 20px;
      right: 28px;
    }
  }

  /* 全屏模式（移动端） */
  &.is-fullscreen {
    .el-dialog {
      border-radius: 0;
    }
    .el-dialog__header {
      padding: 16px 20px 12px;
    }
    .el-dialog__body {
      padding: 0;
      height: calc(100vh - 56px);
      overflow: hidden;
    }
    .el-dialog__headerbtn {
      top: 16px;
      right: 20px;
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
}
</style>
