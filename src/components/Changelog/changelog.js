import { marked } from 'marked'

export default {
  name: 'ChangelogComponent',

  data() {
    return {
      releases: [],
      loading: true,
      error: null
    }
  },

  async mounted() {
    try {
      const response = await fetch('https://api.github.com/repos/WoD5E-Developers/wod5e/releases')

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`)
      }

      const data = await response.json()

      this.releases = data.slice(0, 5).map((release) => {
        const wodZip = release.assets.find((a) => a.name === 'wod5e.zip')
        const systemJson = release.assets.find((a) => a.name === 'system.json')

        return {
          id: release.id,
          name: release.name || release.tag_name,
          description: marked.parse(release.body || ''),
          publishedAt: release.published_at,
          wodZipDownloads: wodZip?.download_count ?? 0,
          wodZipUrl: wodZip?.browser_download_url ?? null,
          systemJsonUrl: systemJson?.browser_download_url ?? null
        }
      })
    } catch (err) {
      this.error = err.message
    } finally {
      this.loading = false
    }
  },
  methods: {
    formatDate(iso) {
      return new Date(iso).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
