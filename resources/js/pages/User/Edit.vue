<template>
  <form
    action="/user"
    method="POST"
    @submit.prevent="submitForm()"
    class="mt-10"
  >
    <input type="text" class="border" placeholder="Name" v-model="forms.name" />
    <input
      type="text"
      class="border"
      placeholder="Email"
      v-model="forms.email"
    />
    <input
      type="text"
      class="border"
      placeholder="Password"
      v-model="forms.password"
    />
    <button class="bg-indigo-500 px-5 py-2 rounded">Submit</button>
    {{ forms }}
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      forms: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    getUser() {
      axios.get("/api/user/" + this.$route.params.id).then((response) => {
        this.forms = response.data;
      });
    },
    submitForm() {
      axios
        .put("/api/user/" + this.$route.params.id, this.forms)
        .then((response) => {
          this.$router.push({
            name: "User",
          });
        });
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style>
</style>