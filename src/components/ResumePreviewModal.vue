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

    <div class="resume-tools">
      <span>{{ locale === 'zh' ? '原版中文简历' : 'Original resume · Chinese' }}</span>
      <button
        type="button"
        @click="scale = Math.max(50, scale - 25)"
        :aria-label="locale === 'zh' ? '缩小' : 'Zoom out'"
      >
        −
      </button>
      <span>{{ scale }}%</span>
      <button
        type="button"
        @click="scale = Math.min(200, scale + 25)"
        :aria-label="locale === 'zh' ? '放大' : 'Zoom in'"
      >
        ＋
      </button>
      <a :href="pdfSrc" :download="fileName">{{
        locale === 'zh' ? '下载简历 ↓' : 'Download resume ↓'
      }}</a>
    </div>
    <div class="pdf-viewer-wrapper">
      <vue-pdf-app
        :pdf="pdfSrc"
        :theme="isDark ? 'dark' : 'light'"
        :file-name="fileName"
        :page-scale="String(scale)"
        :config="{ toolbar: false, sidebar: false, secondaryToolbar: false, errorWrapper: false }"
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
        h('span', null, props.locale === 'zh' ? '加载中…' : 'Loading…')
      ])
  },
  delay: 0
})

const scale = ref(100)
const props = defineProps({
  locale: { type: String, default: 'zh' },
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
  color: var(--lime);

  :deep(.resume-preview-dialog.light-theme) & {
    color: var(--lime);
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
  color: var(--muted);
  font-size: 0.95rem;

  i {
    font-size: 2rem;
    color: var(--lime);
  }

  :deep(.resume-preview-dialog.light-theme) & {
    color: var(--muted);

    i {
      color: var(--lime);
    }
  }
}
</style>

<style lang="scss">
/* 全局样式 - 用于覆盖 Element Plus 弹窗并适配主题 */
.resume-preview-dialog {
  background: var(--surface-raised);
  border: 1px solid var(--line);
  border-radius: 12px;
  box-shadow: var(--shadow);
  color: var(--ink);

  .el-dialog__header,
  .el-dialog__body,
  .el-dialog__footer {
    background: var(--surface-raised);
    border-color: var(--line);
  }
  .dialog-title {
    color: var(--ink);
  }
  .el-dialog__body,
  .el-dialog__close {
    color: var(--muted);
  }

  .el-dialog {
    border-radius: 12px;
    box-shadow: 0 25px 50px -12px var(--backdrop);
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
        color: var(--lime);

        html.light-theme & {
          color: var(--lime);
        }
      }
    }
  }
}
</style>

<style scoped>
.resume-tools {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
  color: var(--muted);
  font-size: 12px;
}
.resume-tools button {
  background: var(--surface);
  color: var(--ink);
  border: 1px solid var(--line-strong);
  border-radius: 6px;
  padding: 4px 10px;
  cursor: pointer;
}
.resume-tools a {
  color: var(--lime);
  margin-left: auto;
}
</style>
