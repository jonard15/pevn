<template>
  <div>
    <v-container>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in desserts"
            :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
          </tr>
        </tbody>
      </template>
  </v-simple-table>
    </v-container>

  </div>
</template>

<script>

export default {
    data: () => ({
      showPassword: false,
      desserts: [],
    }),

    methods:{
      async getUsers(){
        const users = await fetch("http://localhost:5000/users")
        const jsonData = await users.json()
        this.desserts = jsonData
      }
    },

    created () {
      this.getUsers();
    }
}
</script>
