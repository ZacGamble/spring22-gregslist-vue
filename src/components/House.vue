<template>
  <div class="component p-3">
    <router-link :to="{ name: 'HouseDetailsPage', params: { id: house.id } }">
      <div class="p-2 bg-dark rounded">
        <img :src="house.imgUrl" alt="" class="img-fluid" />
        <div>
          <h3>{{ house.levels }} Story</h3>
          <h3>{{ house.bathrooms }} Bath</h3>
          <h3>{{ house.bedrooms }} Bed</h3>
          <div>
            <h3>$ {{ house.price }}</h3>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>


<script>
import { House } from "../models/House";
export default {
  props: {
    house: {
      type: House,
      required: true,
    },
  },

  setup(props) {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>