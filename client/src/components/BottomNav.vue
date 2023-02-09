<template>

  <v-bottom-navigation
    app
    fixed
    grow
    color="primary"
  >
    <v-btn value="top">
      <span>Top Stories</span>
      <v-icon>thumb_up</v-icon>
    </v-btn>

    <v-btn value="code">
      <span>Code Examples</span>
      <v-icon>code</v-icon>
    </v-btn>

    <v-btn value="favorites">
      <span>Favorites</span>
      <v-icon>favorite</v-icon>
    </v-btn>
  </v-bottom-navigation>

</template>