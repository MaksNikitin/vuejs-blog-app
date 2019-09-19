<template>
  <v-content>
    <v-container
      class="fill-height content-container"
      fluid
    >
      <v-carousel
        hide-delimiters
        :value="selectedTopicIndex"
        :continuous="false"
        height="100%"
        class="topic-carousel"
        @change="changeSelectedTopic"
      >
        <v-carousel-item
          v-for="(item, index) in topics"
          :key="index"
        >
          <blog-topic />
        </v-carousel-item>
      </v-carousel>

      <scroll-navigation
        v-if="topics && topics.length"
        :posts="filteredPosts"
      />

      <social-media-bar />
    </v-container>
  </v-content>
</template>

<script lang="ts" src="./TopicCarousel.ts" />

<style lang="scss" scoped>
  @import 'TopicCarousel.scss'
</style>
