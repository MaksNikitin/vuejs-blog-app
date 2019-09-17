<template>
  <v-card
    flat
    elevation="5"
    class="mb-5 mt-5 post-container"
    color="primary"
    min-width="400"
  >
    <div class="post-header-container">
      <div>{{ post.heading }}</div>
      <div class="post-header-container-subtitle">
        {{ getDateDiff() }}
        <v-icon
          v-if="showEditIcon()"
          class="post-header-container-subtitle-icon"
          color="secondary"
        >
          mdi-border-color
        </v-icon>
      </div>
    </div>

    <span class="post-text-container">
      {{ getTruncatedText() }}
      <span
        :class="{
          'post-text-container-extended-text-visible': isExpanded,
          'post-text-container-extended-text': !isExpanded
        }"
      >
        {{ getRemainedText() }}
      </span>
      <span
        v-if="post.text.length > characterLimit && !isExpanded"
        class="expand-btn"
        @click="expandText"
      >
        More
      </span>
      <span
        v-if="isExpanded"
        class="expand-btn collapse-btn"
        @click="expandText"
      >
        Collapse
      </span>
    </span>

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
</template>

<script lang="ts" src="./BlogPost.ts" />

<style lang="scss" scoped>
  @import 'BlogPost.scss'
</style>
