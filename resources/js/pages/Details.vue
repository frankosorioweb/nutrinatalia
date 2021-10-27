<template>
  <p>{{ type }} - {{ $route.params.shortName }}</p>
</template>

<script>
export default {
  props: ['type']
};
</script>