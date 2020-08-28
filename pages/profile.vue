<template>
  <div class="home col-8 mx-auto py-5 mt-5">
    <h1>Profile</h1>
    <div class="card">
      <div class="card-body" v-if="user">
        <h3>Hello, {{ user.name }}</h3>
        <span>{{ user.email }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import User from "~/plugins/User";

export default {
  data() {
    return {
      user: null
    };
  },
  mounted() {
    User.me().then(response => {
      this.user = response.data;
    });
  }
}
</script>

<style scoped>

</style>
