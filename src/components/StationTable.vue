<template>
    <table class="table">
        <thead>
            <tr>
            <th>Address</th>
            <th>Availability</th>
            <th>Open hours</th>
            <th>Open days</th>
            <th>Number of stations</th>
            <th>On street location</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.id">
            <td>{{ item.address.address_string }}</td>
            <td>{{ item.access_restriction }}</td>
            <td> <li v-for="hours in item.opening_hours" :key="hours.id">{{ hours.hour_begin }} - {{ hours.hour_end }}</li> </td>
            <td> <li v-for="hours in item.opening_hours" :key="hours.id">{{ (hours.weekday_begin === 1 && hours.weekday_end === 7) ? 'All week' : 'Some weekdays' }}</li> </td>
            <td>{{ item.stations.length }}</td>
            <td>{{ item.onstreet_location ? '&#9989;' : '&#9940;' }}</td>
            </tr>
        </tbody>
    </table>
  </template>

<script>
import axiosInstance from '../api/axiosInstance';

export default {
  data() {
    return {
      items: []
    };
  },
  mounted() {
    axiosInstance.get('/8cdafa08-d378-4bf1-aad4-fafffe815940/resource/9febc26f-d6a7-45f2-8f73-f529ba4da930/download')
      .then(response => {
        this.items = response.data.locations;
        console.log(response.data.locations);
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>

<style scoped>
li{
  list-style-type: none;
}
th, td{
  border: 0.1em solid teal;
  padding: 1em;
  width: 100%;
}
thead{
  background: teal;
}
</style>