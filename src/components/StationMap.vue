<script setup>
import { ref, onMounted } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map';
import axiosInstance from '../api/axiosInstance';

const locations = ref([]);
const apiKey = import.meta.env.VITE_GMAPS_API_KEY

onMounted(async () => {
  try {
    const response = await axiosInstance.get('/8cdafa08-d378-4bf1-aad4-fafffe815940/resource/9febc26f-d6a7-45f2-8f73-f529ba4da930/download');
    // assign latitute and longitude values plus its ID to then map the stations in GMaps
    locations.value = response.data.locations.map(item => ({
      lat: item.coordinates.latitude,
      lng: item.coordinates.longitude,
      id: item.id
    }));
  } catch (err) {
    console.error(err);
  }
});
</script>

<template>
  <div class="mapContainer">
    <!-- google maps API with a marker that loops through each charging station and maps them using their respective coordinates -->
    <GoogleMap :api-key="apiKey" style="width: 100%; height: 100%;" :center="{ lat: 41.3851, lng: 2.1734 }" :zoom="14">
      <Marker v-for="(location, index) in locations" :key="index" :options="{ position: location }" />
    </GoogleMap>
  </div>
</template>

<style scoped>
.mapContainer {
  width: 100%;
  height: 50vh;
  border-radius: 0.2em;
  border: 0.4em solid rgba(128, 128, 128, 0.2);
}
</style>