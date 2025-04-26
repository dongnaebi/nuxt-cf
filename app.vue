<script setup lang="ts">
const { data } = useFetch('/api/home')
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    {{ data }}
    <NuxtWelcome />
  </div>
</template>
