<script>
import axiosInstance from '/src/api/axiosInstance';

export default {
  data() {
    return {
      data: null,
    };
  },
  created() {
    this.fetchStations();
  },
  methods: {
    async fetchStations() {
      try {
        const response = await axiosInstance.get('/a2bd4c83-d024-4d78-8436-040ef996cf7f/resource/ada4c823-9566-477d-9362-7b15e7d38189/download');
        this.data = response.data.locations;
        console.log(response.data.locations);
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>

<template>
  <div class="container">{{ data }}</div>
</template>


<style scoped>
</style>
