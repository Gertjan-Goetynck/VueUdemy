<template>
  <div class="container">
    <form v-if="!isSubmitted">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->
          <app-full-name v-model="fullName"></app-full-name>
          <div class="form-group">
            <label for="email">Email:</label>
            <input v-model="email" type="email" id="email" class="form-control" />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input v-model="password" type="password" id="password" class="form-control" />
          </div>
          <div class="form-group">
            <button @click.prevent="isSubmitted = !isSubmitted">Submit</button>
          </div>
          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{fullName}}</p>
            <p>Mail:{{email}}</p>
            <p>Password:{{password}}</p>
            <p>Store in Database?:</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fullName from "./Fullname.vue";
export default {
  components: {
    appFullName: fullName
  },
  data() {
    return {
      fullName: "Gertjan Goetynck",
      email: "",
      password: "",
      isSubmitted: false
    };
  }
};
</script>

<style>
</style>
