<template>
  <v-chip-group
    class="pt-1 post-tags"
    multiple
    :value="activeTagIndexes"
  >
    <v-chip
      v-for="(item, index) in tags"
      :key="index"
      :column="false"
      color="accent"
      @click="toggleTag"
    >
      {{ item.name }}
    </v-chip>
  </v-chip-group>
</template>

<script lang="ts" src="./TagList.ts" />
