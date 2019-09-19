<template>
  <v-content class="mx-auto fill-height align-center content-container">
    <div v-if="selectedTopic">
      <blog-post
        v-for="(item, index) in filteredPosts"
        :id="item.heading.toLowerCase() + '-' + index"
        :key="index"
        :post="item"
        :selected-tags="selectedTags"
      />
    </div>
  </v-content>
</template>

<script lang="ts" src="./BlogTopic.ts" />

<style lang="scss" scoped>
  @import 'BlogTopic.scss'
</style>
