<template>
  <h1>Portfolio</h1>
</template>

<script>
export default {
  computed: {
    stocks() {
      return this.$store.getters.stockPortfolio;
    }
  }
};
</script>

<style></style>
