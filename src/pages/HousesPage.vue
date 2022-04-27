<template>
  <button
    class="btn btn-success square-left"
    data-bs-target="#create-house-modal"
    data-bs-toggle="modal"
  >
    Create
  </button>
  <div class="row">
    <div class="col-4" v-for="h in houses" :key="h.id">
      <House :house="h" />
    </div>
  </div>

  <Modal id="create-house-modal">
    <template #modal-title-slot>
      <h3>Create a House!</h3>
    </template>
    <template #modal-body-slot>
      <HouseForm />
    </template>
  </Modal>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core";
import { housesService } from "../services/HousesService.js";
import { AppState } from "../AppState.js";
export default {
  setup() {
    onMounted(async () => {
      try {
        await housesService.getHouses();
      } catch (error) {
        logger.error(error);
        Pop.toast(error.message, "error");
      }
    });
    return {
      houses: computed(() => AppState.houses),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>