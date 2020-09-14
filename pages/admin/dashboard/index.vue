<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h3>{{ cars }}</h3>
            <h6>Total No. of Cars in Inventory</h6>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h3>{{ bookings }}</h3>
            <h6>Total No. of Bookings</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "auth",
  computed: {
    cars() {
      return this.$store.getters.getInventories.length || 0;
    },
    bookings() {
      return this.$store.getters.getBookings.length || 0;
    },
  },
};
</script>