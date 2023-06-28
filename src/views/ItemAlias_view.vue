<template>
  <div class="wrapper-person">
    <div v-if="item">
      <img :src="item.img" :alt="item.descr" />

      <h1 style="color: #fff" class="title">{{ item.title }}</h1>
      <p>{{ item.descr }}</p>

      <CardFooter_ui :info="item.info" />
      <!-- <div class="card-stats">
        <div v-for="(stat, index) in item.info" :key="index" class="one-third">
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat">{{ stat.title }}</div>
        </div>
      </div> -->
      <div>
        <router-link to="/" class="btn btnPrimary">Back to home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import items from "@/seeders/items.js";
import CardFooter_ui from "@/components/UI/CardFooter_ui.vue";

export default {
  data() {
    return {
      item: null,
    };
  },
  created() {
    const alias = this.$route.params.itemAlias;
    const item = items.find((el) => el.alias === alias);
    this.item = item;
  },
  components: {
    CardFooter_ui,
  },
};
</script>

<style lang="scss">
.wrapper-person {
  text-align: center;
  max-width: 640px;
  align-self: center;

  .card-stats {
    border-radius: 14px;
    margin: 20px 0;
  }
}
</style>
