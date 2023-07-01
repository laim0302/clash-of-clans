<template>
  <div class="wrapper-person">
    <div v-if="item">
      <img :src="item.img" :alt="item.descr" />

      <h1 style="color: #fff" class="title">{{ item.title }}</h1>
      <p>{{ item.descr }}</p>

      <CardFooter :info="item.info" />

      <div>
        <router-link to="/" class="btn btnPrimary">Back to home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import items from "@/seeders/items.js";
import CardFooter from "@/components/UI/CardFooter.vue";

export default {
  data() {
    return {
      item: null,
    };
  },
  async created() {
    const alias = this.$route.params.itemAlias;
    const item = alias && items.find((el) => el.alias === alias);

    if (!item) {
      return await this.$router.push({ name: "404" });
    }

    this.item = item;
    // this.item = JSON.parse(JSON.stringify(item));
    // this.isLoading = false;
  },
  components: {
    CardFooter,
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
