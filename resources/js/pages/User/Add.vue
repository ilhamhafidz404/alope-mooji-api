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
    {{ errors }}
  </form>
</template>

<script>
export default {
  data() {
    return {
      forms: {
        name: "",
        email: "",
        password: "",
      },
      errors: {},
    };
  },
  methods: {
    submitForm() {
      axios
        .post("/api/user", this.forms)
        .then((response) => {
          this.$noty.success(response.data.message);
          this.$router.push({
            name: "User",
          });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<style>
</style>