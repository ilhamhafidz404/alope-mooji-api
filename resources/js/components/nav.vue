<template>
  <nav>
    <ul class="flex">
      <li>
        <router-link :to="{ name: 'Home' }" class="mr-1 py-1 px-3"
          >Home</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'User' }" class="mr-1 py-1 px-3"
          >User</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'User.Add' }" class="mr-1 py-1 px-3"
          >Add User</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>