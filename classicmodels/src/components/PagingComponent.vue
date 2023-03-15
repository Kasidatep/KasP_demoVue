<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 bg-light float-left">
        <button
          v-on="index - 1 == offset ? {} : { click: pageClick }"
          class="btn m-1 py-0"
          :class="index - 1 == offset ? 'btn-primary' : 'btn-outline-primary'"
          :style="index - 1 == offset ? 'cursor : not-allowed' : ''"
          v-for="index in totalPages"
          :key="index"
          :value="index - 1"
        >
          {{ index }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageingComponent",
  props: ["totalPages", "offset", "pageSize"],
  methods: {
    pageClick: function (event) {
      this.$parent.selectPage(event.target.value);
    },
  },
};
</script>
