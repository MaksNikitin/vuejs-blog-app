<template>
  <v-content class="mx-auto content-container">
    <div v-if="selectedTopic">
      <v-card
        v-for="(item, index) in selectedTopic.posts"
        :key="index"
        flat
        elevation="5"
        class="mb-5"
      >
        <v-card-title>{{ item.heading }}</v-card-title>
        <v-card-text>{{ item.text }}</v-card-text>
      </v-card>
    </div>
  </v-content>
</template>

<script lang="ts" src="./blogTopic.ts" />

<style lang="scss" scoped>
  @import 'blogTopic.scss'
</style>
