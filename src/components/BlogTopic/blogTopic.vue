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
        <div class="post-header-container">
          <div>{{ item.heading }}</div>
          <div class="post-header-container-subtitle">
            {{ getDateDiff(index) }}
            <v-icon
              v-if="showEditIcon(index)"
              class="post-header-container-subtitle-icon"
              color="secondary"
            >
              mdi-border-color
            </v-icon>
          </div>
        </div>

        <v-card-text>{{ item.text }}</v-card-text>

        <v-divider light />

        <v-card-actions class="justify-space-around">
          <div class="d-flex align-center post-btn pr-1">
            <v-btn
              icon
              color="secondary"
              :ripple="false"
            >
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <div>Like</div>
          </div>
          <div class="d-flex align-center post-btn pr-1">
            <v-btn
              icon
              color="secondary"
            >
              <v-icon>mdi-comment</v-icon>
            </v-btn>
            <div>Comment</div>
          </div>
          <div class="d-flex align-center post-btn pr-1">
            <v-btn
              icon
              color="secondary"
            >
              <v-icon>mdi-share</v-icon>
            </v-btn>
            <div>Share</div>
          </div>
        </v-card-actions>
      </v-card>
    </div>
  </v-content>
</template>

<script lang="ts" src="./BlogTopic.ts" />

<style lang="scss" scoped>
  @import 'BlogTopic.scss'
</style>
