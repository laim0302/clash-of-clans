<template>
  <footer class="footer">
    <div class="container">
      <nav>
        <ul class="navbar-list">
          <li class="navbar-item" v-for="link in links" :key="link.alias">
            <router-link class="navbar-link" :to="link.url">{{ link.title }} </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
import { links } from '@/routes';
export default {
  data() {
    return {
      links: links,
    }
  }
};
</script>

<style lang="scss">
</style>
