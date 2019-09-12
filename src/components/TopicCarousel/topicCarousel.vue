<template>
  <v-content>
    <v-container
      class="fill-height content-container"
      fluid
    >
      <v-carousel
        hide-delimiters
        :value="selectedTopic"
        :continuous="false"
        @change="changeSelectedTopic"
      >
        <v-carousel-item
          v-for="(item, index) in topics"
          :key="index"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <blog-topic />
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </v-content>
</template>

<script lang="ts" src="./TopicCarousel.ts" />

<style lang="scss" scoped>
  @import 'TopicCarousel.scss'
</style>
