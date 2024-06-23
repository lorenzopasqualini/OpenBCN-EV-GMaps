<template>
  <div class="container">
    <StationMap />
    <StationTable />
  </div>
</template>

<script setup>
import StationMap from './components/StationMap.vue';
import StationTable from './components/StationTable.vue';
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 2em;
}
</style>
