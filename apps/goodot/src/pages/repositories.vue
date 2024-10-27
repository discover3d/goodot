<template>
  <div>
    <h1>User Repositories</h1>
    <ul v-if="repositories">
      <li v-for="repo in repositories" :key="repo.id">
        <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
        <p>{{ repo.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const repositories = ref([]);

onMounted(async () => {
  const response = await fetch('/api/repositories');
  repositories.value = await response.json();
});
</script>

<style scoped>
/* Add any custom styles here */
</style>
