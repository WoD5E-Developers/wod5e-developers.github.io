export default {
  data () {
    return {}
  },
  methods: {
    // Toggle the collapsed state
    toggleCollapse (event) {
      const target = event.target
      const container = target.closest('.collapsible-container')
      const content = container.querySelector('.collapsible-content')

      if (content) {
        // Toggle the `display` style to show/hide the element
        content.style.display = content.style.display === 'none' ? 'block' : 'none'
      }
    }
  }
}
