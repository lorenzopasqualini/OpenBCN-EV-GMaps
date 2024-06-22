<template>
  <div class="container">
    <h1>Keonn Technologies BCN EV Stations Map</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Address</th>
          <th>Availability</th>
          <th>Open hours</th>
          <th>Number of stations</th>
          <th>On street location</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.address.address_string }}</td>
          <td>{{ item.access_restriction }}</td>

          <td>
            <li v-for="hours in item.opening_hours" :key="hours.id">
              {{ hours.hour_begin }} - {{ hours.hour_end }}
            </li>
          </td>

          <td>{{ item.stations.length }}</td>

          <td>{{ item.onstreet_location ? '&#9989;' : '&#9940;' }}</td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: []
    };
  },
  mounted() {
    axios.get('/data/loc.json')
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
td{
  border: 0.5em solid red
}
</style>
