<template>
  <div class="wrapper">
    <Header_comp />
    <div class="wrapper-content">
      <router-view />
    </div>
    <Footer_comp />
  </div>
</template>



<script>
import Header_comp from '@/components/Header_comp.vue';
import Footer_comp from '@/components/Footer_comp.vue';

export default {
  components: {
    Header_comp,
    Footer_comp,
  },
};
</script>

<style lang="scss">
</style>
