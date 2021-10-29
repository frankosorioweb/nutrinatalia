<template>
  <section class="section-presentation-video gradient-bg text-center py-6 px-3">
    <h2 class="primary-font font-weight-bold mb-3 mx-2 grey--text text--lighten-5">
      Te cuento <span class="grey--text text--darken-4">más</span> sobre
      <span class="grey--text text--darken-4">mí</span>
    </h2>
    <div class="responsive-video mx-auto px-3">
      <video
        class="presentation-video rounded"
        controls
        controlsList="nodownload"
        @contextmenu="onContextMenu($event)"
      >
        <source src="/api/getPresentationVideo" type="video/mp4" />
      </video>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    onContextMenu(e) {
      e.preventDefault();
    }
  },
};
</script>