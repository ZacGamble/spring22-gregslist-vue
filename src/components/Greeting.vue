<template>
  <div class="component">
    <h1>Welcome to Gregslist</h1>
    <img
      src="https://thiscatdoesnotexist.com"
      alt="cats"
      class="cat img-fluid"
    />
    <h3>Greg's greeting component injection.</h3>
  </div>
</template>


<script>
export default {
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
.cat {
  cursor: pointer;
  border-radius: 75%;
}
.cat:hover {
  transform: scale(1.03);
}
</style>