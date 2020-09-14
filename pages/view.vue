<template>
  <div class="container p-4">
    <div class="row">
      <div class="col-md-6">
        <h5>{{ car.model }} {{ car.make }} {{ car.year }}</h5>
        <img :src="car.imageUrl" height="200" />
        <p>
          <strong>Available in:</strong>
          {{ car.location }} {{ car.isBooked ? 'Not Booked': 'Booked' }}
        </p>
        <p>Price: {{ car.price }}</p>
      </div>
      <div class="col-md-6" v-if="bookingStatus === 1">
        <h6>Book Vehicle Now</h6>
        <div class="card">
          <div class="card-body p-4">
            <form>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for>Name</label>
                    <input
                      type="text"
                      v-model="booking.name"
                      class="form-control"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label for>Email address</label>
                    <input
                      type="email"
                      v-model="booking.email"
                      class="form-control"
                      id
                      placeholder="Enter email"
                    />
                    <small
                      id="emailHelp"
                      class="form-text text-muted"
                    >We'll never share your email with anyone else.</small>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label for>Phone Number</label>
                    <input
                      type="tel"
                      class="form-control"
                      id="phone_number"
                      name="phone"
                      v-model="booking.phoneNumber"
                      placeholder="e.g 08104555495"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label for>Date of Birth</label>
                    <input type="date" v-model="booking.dob" class="form-control" />
                  </div>
                </div>
                <div class="col-md-12">
                  <hr />
                  <h5>Pickup Details</h5>
                  <hr />
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for>Pickup Location</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="booking.pickupLocation"
                      id
                      name="address"
                      placeholder="E.g Gbagada, Lagos"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for>Drop-Off Location</label>
                    <input
                      type="text"
                      class="form-control"
                      name="address"
                      v-model="booking.dropOffLocation"
                      id="address"
                      placeholder="E.g Gbagada, Lagos"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for>Pickup Date</label>
                    <input
                      type="date"
                      class="form-control"
                      v-model="booking.pickupDate"
                      id
                      placeholder="E.g Gbagada, Lagos"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for>Drop-Off Date</label>
                    <input
                      type="date"
                      class="form-control"
                      v-model="booking.dropOffDate"
                      id
                      placeholder="E.g Gbagada, Lagos"
                    />
                  </div>
                </div>
              </div>
              <button type="submit" class="btn btn-primary" @click.prevent="submitBooking">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6" v-if="bookingStatus === 2">
        <div class="alert alert-success">Your Booking Request has been confirmed</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      booking: {
        name: "",
        email: "",
        phoneNumber: "",
        dob: "",
        pickupLocation: "",
        dropOffLocation: "",
        pickupDate: "",
        dropOffDate: "",
      },
      bookingStatus: 1,
    };
  },
  mounted() {
    this.setDetailsCar();
  },
  computed: {
    car() {
      return this.$store.getters.getCar;
    },
  },
  methods: {
    async setDetailsCar() {
      const carId = this.$route.query.carId;
      await this.$store.dispatch("setCarDetails", carId);
    },
    async submitBooking() {
      await this.$store
        .dispatch("bookCar", {
          ...this.booking,
          vehicleDetails: { ...this.car },
        })
        .then((res) => {
          this.bookingStatus = 2;
        });
    },
  },
};
</script>