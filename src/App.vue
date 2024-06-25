<template>
  <div class="container">
    <Header />
    <StationMap />
    <StationTable />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import StationMap from './components/StationMap.vue';
import StationTable from './components/StationTable.vue';
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin: 2em 0;
  color: #fff;
  overflow-x: scroll;
  overflow-y: hidden;
}
</style>
