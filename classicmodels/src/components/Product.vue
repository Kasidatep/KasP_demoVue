<template>
 <div class="b-container-fluid d-flex justify-content-center">
   <product-list-component/>
 </div>
</template>

<script>
import ProductListComponent from "./ProductListComponent.vue";
export default {
  name: "ProductApp",
  components: {
    ProductListComponent,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
