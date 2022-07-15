<template>
  <section class="mt-7">
    <h1 class="text-3xl">Data User</h1>
    <table>
      <tr class="text-white bg-gray-800">
        <th class="p-4">No</th>
        <th class="p-4">Name</th>
        <th class="p-4">Email</th>
        <th class="p-4">Password</th>
        <th class="p-4" colspan="2">action</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td class="p-4">{{ user.id }}</td>
        <td class="p-4">{{ user.name }}</td>
        <td class="p-4">{{ user.email }}</td>
        <td class="p-4">{{ user.password }}</td>
        <td class="p-4">
          <router-link :to="'user/' + user.id">Lihat</router-link>
        </td>
        <td class="p-4">
          <router-link :to="'/user/' + user.id + '/edit'">Edit</router-link>
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  // update() {
  //   this.getUsers();
  // },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios.get("/api/users").then((response) => {
        this.users = response.data;
      });
    },
    hadlingDelete(id) {
      axios.delete("/api/user/" + id).then((response) => {
        this.$router.push({
          name: "User",
        });
      });
    },
  },
};
</script>

<style>
</style>