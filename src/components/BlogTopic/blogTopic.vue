<template>
  <v-content class="mx-auto content-container">
    <div v-if="selectedTopic">
      <v-card
        v-for="(item, index) in selectedTopic.posts"
        :key="index"
        flat
        elevation="5"
        class="mb-5"
        color="primary"
      >
        <v-card-title>{{ item.heading }}</v-card-title>
        <v-card-text>{{ item.text }}</v-card-text>
        <v-card-actions class="justify-space-around">
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-comment</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-share</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-content>
</template>

<script lang="ts" src="./BlogTopic.ts" />

<style lang="scss" scoped>
  @import 'BlogTopic.scss'
</style>
