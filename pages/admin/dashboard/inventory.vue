<template>
  <div>
    <div class="row mb-3">
      <div class="col-md-8">
        <h4>Car Inventory</h4>
      </div>
      <div class="col-md-4 text-right">
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >Add New Vehicle</button>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-striped table-md">
        <thead>
          <tr>
            <th>#</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
            <th>Location</th>
            <th>Vehicle Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(car,i) in cars" :key="i">
            <td class="align-middle">{{ i + 1 }}</td>
            <td class="align-middle">{{ car.make }}</td>
            <td class="align-middle">{{ car.model }}</td>
            <td class="align-middle">{{ car.year }}</td>
            <td class="align-middle">{{ car.price }}</td>
            <td class="align-middle">{{ car.location }}</td>
            <td class="align-middle">
              <img :src="car.imageUrl" height="100" />
            </td>
            <td>
              <div class="btn-group">
                <button class="btn btn-info" @click.prevent="editCar(car)">Edit</button>
                <button class="btn btn-danger" @click.prevent="deleteCar(car)">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              id="exampleModalLongTitle"
            >{{ editing ? 'Edit Product' : 'Add Vehicle' }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="make">Make</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="formData.make"
                  placeholder="Enter vehicle make"
                />
              </div>
              <div class="form-group">
                <label for="model">Model</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="formData.model"
                  placeholder="Enter vehicle model"
                />
              </div>
              <div class="form-group">
                <label for>Year</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="formData.year"
                  placeholder="Enter vehicle year"
                />
              </div>
              <div class="form-group">
                <label for>Price</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="formData.price"
                  placeholder="Enter vehicle price"
                />
              </div>
              <div class="form-group">
                <label for>Location of Availability</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="formData.location"
                  placeholder="Enter location"
                />
              </div>
              <div class="form-group">
                <label for>
                  Vehicle Image
                  <button
                    class="btn-sm btn btn-secondary"
                    @click.prevent="enterUrl = !enterUrl"
                  >{{ !enterUrl ? 'Enter Image Url' : 'Select Image' }}</button>
                </label>
                <input
                  v-if="enterUrl"
                  type="text"
                  class="form-control"
                  v-model="formData.imageUrl"
                  placeholder="Enter Image Url"
                />
                <input v-if="!enterUrl" type="file" class="input-sm" @change.prevent="setImageUrl" />
                <div class v-if="formData.imageUrl">
                  <img :src="formData.imageUrl" height="70" />
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click.prevent="addVehicle">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "auth",
  data() {
    return {
      editing: false,
      enterUrl: false,
      formData: {
        make: "",
        model: "",
        price: "",
        year: "",
        location: "",
        imageUrl: "",
      },
    };
  },
  computed: {
    cars() {
      return this.$store.getters.getInventories;
    },
  },
  methods: {
    async editCar(car) {
      this.formData = {
        ...car,
      };
      $(".modal").modal("show");
    },

    async deleteCar({ id }) {
      await this.$store.dispatch("deleteVehicle", id).then((res) => {
        alert("Car Deleted");
      });
    },

    async addVehicle() {
      const formData = this.formData;
      await this.$store.dispatch("addVehicle", formData).then((res) => {
        $(".modal").modal("hide");
        alert("Car Added");
      });
    },
  },
};
</script>