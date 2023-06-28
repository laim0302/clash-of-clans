<template>
  <carousel :settings1="settings1" :breakpoints="breakpoints">
    <slide class="card__wrapper" v-for="item in items" :key="item.id">
      <Card_ui
        :name="`${item.lvl} lvl`"
        :title="item.title"
        :imgUrl="item.img"
        :link="`${item.alias}`"
      >
        <template v-slot:body>
          {{ item.descr }}
        </template>

        <template v-slot:footer>
          <CardFooter_ui :info="item.info" />
          <!-- <div class="card-stats">
            <div
              v-for="(stat, index) in item.info"
              :key="index"
              class="one-third"
            >
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat">{{ stat.title }}</div>
            </div>
          </div> -->
        </template>
      </Card_ui>
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import items from "@/seeders/items.js";
import Card_ui from "@/components/UI/Card_ui";
import CardFooter_ui from "@/components/UI/CardFooter_ui.vue";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  components: {
    Card_ui,
    CardFooter_ui,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      items: items,
      settings1: {
        itemsToShow: 2,
        wrapAround: true,
        snapAlign: "center",
        slidesCount: 2,
      },
      breakpoints: {
        400: {
          itemsToShow: 1,
        },
        700: {
          itemsToShow: 2,
        },
        1024: {
          itemsToShow: 3,
        },
      },
    };
  },
};
</script>
