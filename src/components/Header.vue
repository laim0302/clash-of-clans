<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <router-link class="navbar-logo" to="/"> {{ title }}</router-link>
        <nav>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link.alias">
              <router-link class="navbar-link" :to="link.url">{{ link.title }} </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>

  </header>
</template>

<script>
import { app } from '@/_config';
import { links } from '@/routes';
export default {
  data() {
    return {
      title: app.title,
      links: links,
    }
  }
};
</script>

<style lang="scss">
</style>
