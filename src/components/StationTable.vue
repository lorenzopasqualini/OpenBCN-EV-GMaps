<template>
    <button @click="fetchStations">&#10226;</button>
    <!-- renders only after the fetchStations() function is called and the API request is completed (line 53) -->
    <table v-if="!isLoading">
        <thead>
            <tr>
              <th>Address</th>
              <th>Availability</th>
              <th>Hours</th>
              <th>Schedule</th>
              <th>Ports</th>
              <th>On street</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.id">
              <td>{{ item.address.address_string }}</td>
              <td>{{ item.access_restriction }}</td>
              <td> <li v-for="hours in item.opening_hours" :key="hours.id">{{ hours.hour_begin }}-{{ hours.hour_end }}</li> </td>
              <td> <li v-for="hours in item.opening_hours" :key="hours.id">{{ (hours.weekday_begin === 1 && hours.weekday_end === 7) ? 'All week' : 'Some weekdays' }}</li> </td>
              <td :style="{ backgroundColor: item.stations.length < 5 ? 'sienna' : 'darkslategray', textAlign: 'center' }">{{ item.stations.length }}</td>
              <td>{{ item.onstreet_location ? '&#9989;' : '&#9940;' }}</td>
            </tr>
        </tbody>
    </table>
    <div v-if="isLoading" class="spinner"></div>
  </template>

<script>
import axiosInstance from '../api/axiosInstance';

export default {
  data() {
    return {
      items: [],
      isLoading: false
    };
  },
  // make API call on mount for vue3
  mounted() {
    this.fetchStations();
  },
  methods: {
    fetchStations() {
      this.isLoading = true;
      // use .get method from axiosInstance with corresponding header and authorizations (view /api/axiosInstance for reference)
      axiosInstance.get('/8cdafa08-d378-4bf1-aad4-fafffe815940/resource/9febc26f-d6a7-45f2-8f73-f529ba4da930/download')
        .then(response => {
          this.items = response.data.locations;
        })
        .catch(err => {
          console.error(err);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  }
};
</script>

<style scoped>
li{
  list-style-type: none;
}
td{
  border: 0.1em solid rgba(128, 128, 128, 0.2);
  border-radius: 0.2em;
  width: 25%;
  padding: 1.2em;
  user-select: none;
  transition: 0.2s;
}
th{
  background-color: #1f94ff;
  color: #000;
  border-radius: 0.2em;
}
tbody tr:hover{
  background: rgb(31, 148, 255, 0.2);
  scale: 99%;
  cursor: pointer;
  transition: 0.2s;
}
button{
  position: fixed;
  top: 1em;
  right: 1em;
  background-color: #1f94ff;
  border: none;
  padding: 0.9em 1em;
  font-size: x-large;
  color: white;
  border-radius: 100%;
  cursor: pointer;
  transition: 0.2s;
}
button:hover{
  background-color: #12538f;
}

/* loader */
.spinner{
  margin: auto;
  margin-top: 4em;
  border: 0.3em solid rgba(0, 0, 0, 0.1);
  border-top: 0.3em solid #3498db;
  border-radius: 50%;
  width: 2em;
  height: 2em;
  animation: spin 1s linear infinite;
  transform: translate(-50%, -50%);
}
@keyframes spin{
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
}
</style>