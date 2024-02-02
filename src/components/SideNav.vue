<template>
  <section>
    <div class="logo mx-auto d-flex justify-content-start p-3">
      <img
        src="https://mis.benedictocollege.edu.ph/assets/logo-21a9a44cc070aa7b0436551dba367c97e53bce3864cb2151d4ed24682b8ae540.png"
        alt="Benedito Logo"
        class="img-fluid w-70"
      />
    </div>
    <nav>
      <ul>
        <li v-for="items in links" :key="items.name">
          <router-link :to="{ name: items.name }" class="router__link">
            <component :is="items.icon" />
            {{ items.link }}
          </router-link>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script setup>
import { h } from "vue";

const links = [
  {
    name: "Dashboard",
    link: "Dashboard",
    icon: h("i", { class: "fi fi-rr-home" }),
  },

  {
    name: "Schedule",
    link: "Schedule",
    icon: h("i", { class: "fi fi-rr-calendar-lines" }),
  },
];
</script>

<style scoped>
nav {
  margin-top: 3rem;
}
.router__link {
  color: white;
  text-decoration: none;
  display: flex;
  gap: 1rem;
}

.icon {
  color: white;
}
</style>
