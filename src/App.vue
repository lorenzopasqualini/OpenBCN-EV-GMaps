<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        <h5>{{ item }}</h5>
      </li>
    </ul>
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
</style>
