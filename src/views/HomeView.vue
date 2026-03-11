<template>
  <header class="header scroll-header">
    <AppNav></AppNav>
  </header>
  <main class="main">
    <AppHome></AppHome>
    <AppAbout></AppAbout>
    <AppQualification></AppQualification>
    <AppSkills></AppSkills>
    <AppPortfolio></AppPortfolio>
  </main>
  <footer class="footer" id="contact">
    <AppFooter></AppFooter>
  </footer>
</template>

<script setup>
import AppNav from '../components/AppNav.vue'
import AppHome from '../components/AppHome.vue'
import AppAbout from '../components/AppAbout.vue'
import AppSkills from '../components/AppSkills.vue'
import AppQualification from '../components/AppQualification.vue'
import AppPortfolio from '../components/AppPortfolio.vue'
import AppFooter from '../components/AppFooter.vue'
</script>

<style lang="scss">
@import '../styles/tools/_sassMagic.scss';
.footer {
  padding-top: 2rem;
}
</style>
