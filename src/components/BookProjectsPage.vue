<template>
  <section class="book-projects-page" id="projects">
    <header class="book-projects-heading">
      <div>
        <span class="eyebrow">{{ english ? '02 / SELECTED WORK' : '02 / 项目作品' }}</span>
        <h2>{{ english ? 'Ideas, made real.' : '作品，让想法落地。' }}</h2>
        <p>
          {{
            english
              ? 'Maps, spatial experiences and applications built for real-world challenges.'
              : '从地图与空间，到真实业务中的交互体验。'
          }}
        </p>
      </div>
      <span v-if="projects.length" class="book-projects-total"
        >{{ String(projects.length).padStart(2, '0') }}
        <small>{{ english ? 'PROJECTS' : '个项目' }}</small></span
      >
    </header>
    <div v-if="projects.length" class="book-projects-grid">
      <article v-for="(project, index) in projects" :key="project.id" class="book-project-card">
        <button
          class="book-project-visual"
          type="button"
          :aria-label="`${english ? 'View project' : '查看项目'}：${project.name}`"
          @click="$emit('open', project.id)"
        >
          <img
            v-if="project.images?.length"
            :src="project.images[0]"
            :alt="project.name"
            width="1000"
            height="590"
            loading="lazy"
            decoding="async"
          /><span v-else class="book-project-placeholder">{{ project.name }}</span
          ><span class="book-project-visual-caption"
            ><span>{{ String(index + 1).padStart(2, '0') }} / {{ project.type }}</span
            ><b>↗</b></span
          >
        </button>
        <div class="book-project-copy">
          <p class="book-project-category">
            {{ project.category || project.type
            }}<span v-if="project.featured">{{ english ? 'SELECTED' : '精选' }}</span>
          </p>
          <h3>{{ project.headline || project.name }}</h3>
          <p v-if="project.headline && project.headline !== project.name" class="book-project-name">
            {{ project.name }}
          </p>
          <p class="book-project-summary">{{ project.summary || project.description }}</p>
          <div class="book-project-technologies">
            <span
              v-for="(technology, technologyIndex) in project.technologies"
              :key="technologyIndex"
              >{{ technology }}</span
            >
          </div>
          <button class="book-project-open" type="button" @click="$emit('open', project.id)">
            {{ english ? 'Explore this project' : '展开这个项目' }} <span>↗</span>
          </button>
        </div>
      </article>
    </div>
    <div v-else class="book-project-empty" :role="error ? 'alert' : 'status'">
      <span aria-hidden="true">↗</span>
      <h2>
        {{
          loading
            ? english
              ? 'Gathering the work…'
              : '正在整理作品…'
            : error
              ? english
                ? 'Projects are temporarily unavailable.'
                : '项目暂时无法加载。'
              : english
                ? 'New projects are on the way.'
                : '新的作品，正在路上。'
        }}
      </h2>
      <button v-if="error" type="button" class="pill" @click="$emit('retry')">
        {{ english ? 'Try again' : '重新加载' }}
      </button>
    </div>
    <footer class="book-project-foot">
      <span>{{ english ? 'BUILT FOR REAL-WORLD CHALLENGES' : '为真实场景而构建。' }}</span
      ><span>{{
        english ? 'SCROLL TO EXPLORE · TURN THE PAGE TO CONNECT' : '上下浏览作品，翻页与我联系。'
      }}</span>
    </footer>
  </section>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  projects: { type: Array, default: () => [] },
  locale: { type: String, default: 'zh' },
  loading: Boolean,
  error: Boolean
})
defineEmits(['open', 'retry'])
const english = computed(() => props.locale === 'en')
</script>
