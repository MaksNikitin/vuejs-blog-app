<template>
  <v-chip-group class="pt-1">
    <v-chip
      v-for="(item, index) in tags"
      :key="index"
      :column="false"
      color="accent"
      active-class="primary--text"
    >
      {{ item.name }}
    </v-chip>
  </v-chip-group>
</template>

<script lang="ts" src="./TagList.ts" />
