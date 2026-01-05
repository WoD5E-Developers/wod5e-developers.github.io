<template>
  <div :class="$style.content">
    <section>
      <h2>Release Changelog</h2>
      <h3>Latest 5 releases</h3>

      <p v-if="loading">Loading releases…</p>
      <p v-else-if="error">{{ error }}</p>

      <ul v-else :class="$style.releaseList">
        <li
          v-for="release in releases"
          :key="release.id"
          :class="$style.release"
        >
          <h3>{{ release.name }}</h3>
          <div>
            <span><u>Information</u></span>
            <span>
              Published: <strong>{{ formatDate(release.publishedAt) }}</strong>
            </span>
            <span>
              Total Downloads: <strong>{{ release.wodZipDownloads }}</strong>
            </span>
          </div>
          <br>
          <div class="collapsible-container">
            <div class="collapsible-header" @click="toggleCollapse" ref="release-{{ release.id }}">
                <span><b><u>Click for Release Notes</u></b></span>
            </div>
            <div class="collapsible-content" style="display: none;" ref="release-{{ release.id }}">
              <div v-html="release.description"></div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script src="./changelog.js"></script>
<style src="./changelog.css" module></style>
