<template>
  <button class="btn btn-success ms-2" @click="removeHouse">Remove</button>
  <div class="container-fluid">
    <div v-if="house">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <img
            :src="house.imgUrl"
            :alt="`${house.year} ${house.bedrooms} bd ${house.bathrooms} bath`"
            class="img-fluid"
          />
          <div class="p-2" v-if="house.creatorId === account.id">
            <i
              class="mdi mdi-pencil selectable"
              data-bs-toggle="modal"
              data-bs-target="#edit-house-modal"
            ></i>
          </div>
          <div class="d-flex justify-content-between p-2">
            <h5>Built: {{ house.year }}</h5>
            <h5>{{ house.levels }} floors</h5>
            <h5>{{ house.bathrooms }} bath</h5>
            <h5>{{ house.bedrooms }} bed</h5>
            <h5>${{ house.price }}</h5>
          </div>
          <div class="d-flex p-2">
            <p>{{ house.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>...Loading</h1>
    </div>
  </div>

  <!-- Edit house Modal -->
  <Modal id="edit-house-modal">
    <template #modal-title-slot>
      <h3>Edit house!</h3>
    </template>
    <template #modal-body-slot>
      <HouseForm :house="house" />
    </template>
  </Modal>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { AppState } from "../AppState";
import { housesService } from "../services/HousesService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    onMounted(async () => {
      try {
        AppState.house = null;
        await housesService.getHouseById(route.params.id);
      } catch (error) {
        logger.error(error);
        Pop.toast(error.message, "error");
      }
    });
    return {
      async removeHouse() {
        try {
          if (await Pop.confirm()) {
            await housesService.removeHouse(route.params.id);
            Pop.toast("House deleted!", success);
            router.push({ name: "HousesPage" });
          }
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
      house: computed(() => AppState.house),
      account: computed(() => AppState.account),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>