<template>
  <div>
    <div class="row mb-3">
      <div class="col-md-8">
        <h4>All Bookings</h4>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-striped table-md">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date Of Birth</th>
            <th>Location (Pickup / DropOff)</th>
            <th>Vehicle Name</th>
            <th>Vehicle Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(booking,i) in bookings" :key="i">
            <td class="align-middle">{{ i + 1 }}</td>
            <td class="align-middle">{{ booking.name }}</td>
            <td class="align-middle">{{ booking.email }}</td>
            <td class="align-middle">{{ booking.phoneNumber }}</td>
            <td class="align-middle">{{ booking.dob }}</td>
            <td class="align-middle">{{ booking.pickupLocation + ' / ' + booking.dropOffLocation }}</td>
            <td
              class="align-middle"
            >{{ booking.vehicleDetails.model }} {{ booking.vehicleDetails.make }}</td>
            <td class="align-middle">
              <img :src="booking.vehicleDetails.imageUrl" height="100" />
            </td>
            <td class="align-middle">
              <div class="btn-group">
                <button
                  v-if="booking.status === 1"
                  class="btn btn-success btn-sm"
                  @click.prevent="rentToCustomer(booking, 2)"
                >Approve</button>
                <button
                  v-if="booking.status === 2"
                  class="btn btn-warning btn-sm"
                  @click.prevent="rentToCustomer(booking, 1)"
                >Decline</button>
                <button class="btn btn-danger btn-sm" @click.prevent="deletebooking(booking)">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  layout: "auth",
  data() {
    return {};
  },
  mounted() {
    // this.$store.dispatch("emptyBookings");
  },
  computed: {
    bookings() {
      return this.$store.getters.getBookings;
    },
  },
  methods: {
    async deletebooking({ id }) {
      await this.$store.dispatch("deleteBooking", id);
    },
    async rentToCustomer({ id }, status) {
      await this.$store.dispatch("updateBooking", { id, status });
      alert("Booking Updated Successfully");
    },
  },
};
</script>