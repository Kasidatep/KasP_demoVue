<template>
  <div class="container justify-content-center">
    <div class="row w-100 bg-secondary text-white">
      <h2>Classic Model Shop</h2>
    </div>
    <div class="row w-100 bg-dark text-white">
      Total items : {{ products.totalElements }}
      <span class="ml-4">items: {{ products.number*products.size+1 }} - {{ products.number*products.size+ products.size }}</span>
    </div>
    <div class="row w-100">
      <div
        v-for="p in products.content"
        v-bind:key="p.id"
        class="col-2 p-1 border-0"
      >
        <div class="img-thumbnail border rounded">
          <img
            :src="getImgUrl(p)"
            class="img-fluid img-thumbnail border-0"
            style="height: 150px;"
          />
        </div>
        <div class="caption">{{ p.id }} : {{ p.productName }}</div>
      </div>
    </div>
    <div class="row w-100 text-black-50 border-bottom my-2 p-0"></div>
    <paging-component
      :totalPages="products.totalPages"
      :offset="products.number"
      :pageSize="products.size"
    />
  </div>
</template>

<script>
import ProductDataService from "../service/ProductDataService";
import PagingComponent from "./PagingComponent.vue";

export default {
  components: { PagingComponent },
  name: "ProductList",
  data() {
    return {
      products: [],
      message: [],
      fileAPiUrl: "api/files/"
    };
  },
  methods: {
    refreshProducts(pageNo = 0) {
      ProductDataService.retrieveAllProduct(pageNo)
        .then((response) => {
          this.products = response.data;
        })
        .catch((e) => {
          this.message = e;
        });
    },
    getImgUrl(product) {
      return this.fileAPiUrl+product.productCode+'.jpg';
    },
    selectPage: function(pageNo) {
      this.refreshProducts(pageNo);
    },
  },
  created() {
    this.refreshProducts();
  },
};
</script>
<style scoped>
.caption {
  font-size: 0.8em;
}
</style>
