<template>
  <main role="main">
    <section class="jumbotron text-center">
      <div class="container">
        <h1>Car Hiring on a Tap.</h1>
        <p
          class="lead text-muted"
        >Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        <p>
          <!-- <a href="#" class="btn btn-primary my-2">Main call to action</a>
          <a href="#" class="btn btn-secondary my-2">Secondary action</a>-->
        </p>
      </div>
    </section>

    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-4 pt-5" v-for="(car, i) in cars" :key="i">
            <Car :details="car" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Car from "@/components/Car";
export default {
  components: { Car },
  data() {
    return {
      cars: undefined,
    };
  },
  // computed: {
  //   cars() {
  //     return this.$store.getters.getInventories;
  //   },
  // },
  mounted() {
    setInterval(async () => {
      await this.fetchCars();
      clearInterval(1000);
    }, 1000);
  },
  methods: {
    fetchCars() {
      this.cars = this.$store.getters.getInventories;
    },
  },
};
</script>

<style>
</style>
