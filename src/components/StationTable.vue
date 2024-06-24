<template>
    <table class="table">
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
  border: 0.1em solid #1f94ff;
  border-radius: 0.3em;
  padding: 1.2em;
  width: 30%;
  user-select: none;
  transition: 0.2s;
}
thead{
  background: #1f94ff;
  border-radius: 0.3em;
}
th{
  padding: 0;
  color: #000;
}
tbody tr:hover{
  background: rgb(31, 148, 255, 0.5);
  scale: 102%;
  transition: 0.2s;
}
</style>