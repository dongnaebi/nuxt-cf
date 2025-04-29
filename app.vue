<script setup lang="ts">
const { t } = useI18n()
const { data } = useFetch('/api/home')
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    {{ data }}
    <h1 v-html="t('hello').replace('\n', '<br>')"></h1>
    <p v-html="t('test', [`<b class='text-primary-400 dark:text-primary-200'>`, '</b>'])"></p>
    <NuxtWelcome />
  </div>
</template>
