<template>
  <v-app>
    <v-card width="400" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field prepend-icon="mdi-account-circle" label="Username"></v-text-field>
        <v-text-field prepend-icon="mdi-lock" append-icon="mdi-eye-off" :type="showPassword ? 'text': 'password'" label="Password" @click:append="showPassword = !showPassword"></v-text-field>
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
      <v-card-actions>
    <v-btn color="success">Registeasasr</v-btn>
    <v-spacer></v-spacer>
    <v-btn color="info">Login</v-btn>
  </v-card-actions>
  </v-card>

  </v-app>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      showPassword: false
    }),

    methods:{
      async getUsers(){
        const users = await fetch("http://localhost:5000/users")
        const jsonData = await users.json()
        console.log(jsonData);
      }
    },

    created () {
      this.getUsers();
    }
  }
</script>
