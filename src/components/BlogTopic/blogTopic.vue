<template>
  <v-content class="mx-auto content-container">
    <div v-if="topics && topics.length">
      <v-card
        v-for="(item, index) in topics"
        :key="index"
        flat
        elevation="5"
        class="mb-5"
      >
        <v-card-title>{{ item.name }}</v-card-title>
        <v-card-text>I'm card text</v-card-text>
      </v-card>
    </div>
  </v-content>
</template>

<script lang="ts" src="./BlogTopic.ts" />

<style lang="scss" scoped>
  @import 'blogTopic.scss'
</style>
