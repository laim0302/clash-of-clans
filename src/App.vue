<template>
  <div class="wrapper">
    <Header />
    <div class="wrapper-content">
      <section>
        <div class="container">
          <router-view />
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss"></style>
