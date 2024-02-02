<template>
  <div class="row h-100 p-0">
    <div class="col-2 header p-2 mh-100">
      <SideNav />
    </div>
    <div class="col-10 p-0 bg-white">
      <div class="row bg-primary m-0 p-0">
        <Header />
      </div>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import SideNav from "./components/SideNav.vue";
// import { Schedule } from "@syncfusion/ej2-vue-schedule";
import { RouterView } from "vue-router";
// import { RouterLink, RouterView } from "vue-router";
</script>
