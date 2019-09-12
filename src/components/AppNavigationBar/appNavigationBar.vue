<template>
  <v-app-bar
    app
    color="indigo"
    dark
  >
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <v-toolbar-title>vuejs-blog-app</v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts" src="./AppNavigationBar.ts" />
