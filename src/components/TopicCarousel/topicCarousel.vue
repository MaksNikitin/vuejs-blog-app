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

      <scrollactive
        v-if="topics && topics.length"
        active-class="active-post-title"
        class="scroll-navigation-container"
        :offset="100"
      >
        <div class="scroll-navigation-container-header pb-2">
          Contents
        </div>
        <ul>
          <li
            v-for="(item, index) in filteredPosts"
            class="pb-1"
            :key="index"
          >
            <a
              class="scrollactive-item"
              :href="'#' + item.heading.toLowerCase() + '-' + index"
            >
              {{ item.heading }}
            </a> 
          </li>
        </ul>
      </scrollactive>
    </v-container>
  </v-content>
</template>

<script lang="ts" src="./TopicCarousel.ts" />

<style lang="scss" scoped>
  @import 'TopicCarousel.scss'
</style>
