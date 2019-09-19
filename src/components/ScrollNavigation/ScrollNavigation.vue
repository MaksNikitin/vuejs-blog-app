<template>
  <scrollactive
    active-class="active-post-title"
    class="scroll-navigation-container"
    :offset="100"
  >
    <div class="scroll-navigation-container-header pb-2">
      Contents
    </div>
    <ul>
      <li
        v-for="(item, index) in posts"
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
</template>

<script lang="ts" src="./ScrollNavigation.ts" />

<style lang="scss" scoped>
  @import 'ScrollNavigation.scss'
</style>
