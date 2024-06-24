<script setup>
import { ref, onMounted } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map';
import axiosInstance from '../api/axiosInstance';

const locations = ref([]);

onMounted(async () => {
  try {
    const response = await axiosInstance.get('/8cdafa08-d378-4bf1-aad4-fafffe815940/resource/9febc26f-d6a7-45f2-8f73-f529ba4da930/download');
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
    <GoogleMap api-key="AIzaSyDCEuoKMsLEL5P6UMYPA0_Pbc8JNe7zEok" style="width: 100%; height: 100%;" :center="{ lat: 41.3851, lng: 2.1734 }" :zoom="14">
      <Marker v-for="(location, index) in locations" :key="index" :options="{ position: location }" />
    </GoogleMap>
  </div>
</template>

<style scoped>
.mapContainer {
  width: 100%;
  height: 30em;
  border-radius: 1em;
  border: 0.5em solid teal
}
</style>