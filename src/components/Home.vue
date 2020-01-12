<template>
  <div>
    <h1>Trade or View</h1>
    <h6>Save & Load</h6>
    <h6>Click on 'End Day'</h6>
    <hr />
    <p>Your Funds: {{ funds | currency }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style></style>
