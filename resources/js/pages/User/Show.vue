<template>
  <section>
    <h1>{{ $route.params.id }}</h1>
    {{ user }}
    <a href="" @click.prevent="hadlingDelete(user.id)">Hapus</a>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      user: [],
    };
  },
  mounted() {
    axios.get("/api/user/" + this.$route.params.id).then((response) => {
      this.user = response.data;
    });
  },
  methods: {
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