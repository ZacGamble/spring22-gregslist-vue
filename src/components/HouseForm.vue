<template>
  <div class="component">
    <form @submit.prevent="handleSubmit()">
      <div class="form-group">HELLO</div>
      <div class="form-group">
        <label for="year" class="form-label">Year:</label>
        <input
          type="text"
          class="form-control"
          id="year"
          v-model="editable.year"
        />
      </div>
      <div class="form-group">
        <label for="model" class="form-label">Levels:</label>
        <input
          type="text"
          class="form-control"
          id="levels"
          v-model="editable.levels"
        />
      </div>
      <div class="form-group">
        <label for="price" class="form-label">Price:</label>
        <input
          type="number"
          class="form-control"
          id="price"
          v-model="editable.price"
        />
      </div>
      <div class="form-group">
        <label for="img" class="form-label">Img:</label>
        <input
          type="text"
          class="form-control"
          id="img"
          v-model="editable.imgUrl"
        />
      </div>
      <div class="form-group">
        <label for="beds" class="form-label">Beds:</label>
        <textarea
          type="text"
          class="form-control"
          id="beds"
          v-model="editable.bedrooms"
        />
      </div>
      <div class="form-group">
        <label for="bathrooms" class="form-label">Bath:</label>
        <textarea
          type="text"
          class="form-control"
          id="bathrooms"
          v-model="editable.bathrooms"
        />
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit</button>
    </form>
    -->-->-->
  </div>
</template>

<script>
import { ref, watchEffect } from "@vue/runtime-core";
import { House } from "../models/House";
import { housesService } from "../services/HousesService";
import Pop from "../utils/Pop";
import { Modal } from "bootstrap";
import { useRouter } from "vue-router";
import { logger } from "../utils/Logger";
export default {
  props: {
    house: {
      type: House,
      default: () => new House(),
    },
  },

  setup(props) {
    const router = useRouter();
    const editable = ref({});
    watchEffect(() => {
      editable.value = { ...props.house };
    });
    return {
      editable,
      async handleSubmit(id) {
        try {
          if (editable.value.id) {
            await housesService.editHouse(editable.value);
            Pop.toast("House edited!", "success");
            Modal.getOrCreateInstance(
              document.getElementById("edit-house-modal")
            ).toggle();
          } else {
            const createdHouse = await housesService.createHouse(
              editable.value
            );
            router.push({
              name: "HouseDetailsPage",
              params: { id: createdHouse.id },
            });
            Pop.toast("House created!", "success");
            Modal.getOrCreateInstance(
              document.getElementById("create-house-modal")
            ).toggle();
          }
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>