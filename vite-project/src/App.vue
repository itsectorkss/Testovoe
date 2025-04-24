<template>
  <div>
    <nav class="navbar">
      <router-link to="/">Главная</router-link>
      <router-link to="/contacts">Контакты</router-link>
    </nav>
    <router-view />
  </div>
</template>


<style scoped>
.navbar {
  display: flex;
  gap: 16px;
  padding: 16px;
  background: #f0f0f0;
  border-bottom: 1px solid #ddd;
}

.navbar a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
