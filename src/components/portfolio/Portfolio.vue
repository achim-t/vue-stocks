<template>
  <div>
    <Stock v-for="stock in stocks" :stock="stock" :key="stock.id" />
  </div>
</template>

<script>
import Stock from "./Stock";
import { mapGetters } from "vuex";
export default {
  components: { Stock },
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio",
      funds: "funds"
    })
  }
};
</script>

<style></style>
