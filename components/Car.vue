<template>
  <div class="card mb-4 shadow-sm">
    <img :src="details.imageUrl" class="card-img-top" :alt="details.model" />
    <div class="card-body">
      <h5 class="card-text">{{ details.make }} {{ details.model }}, {{ details.year }}</h5>
      <p class="card-text">{{ details.price }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <nuxt-link
            :to="goToViewPage(details.id)"
            type="button"
            class="btn btn-sm btn-primary"
          >View</nuxt-link>
          <!-- <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> -->
        </div>
        <small class="text-muted">{{ details.location }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToViewPage(id) {
      return `view?carId=${id}`;
    },
  },
};
</script>