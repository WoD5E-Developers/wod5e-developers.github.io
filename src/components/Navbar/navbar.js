// Assets
import navbarimg from './../../assets/icon.webp'

// Logic
export default {
  name: 'NavbarComponent',
  data() {
    return {
      isMenuVisible: false,
      navbarimg,
      links: [
        { text: 'Overview', href: '/' },
        { text: 'API', href: '/api' }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible
    },
    closeMenu() {
      this.isMenuVisible = false
    },
    handleOutsideClick(event) {
      // If the user isn't clicking the nav element, close the menu
      if (!this.$el.contains(event.target)) {
        this.closeMenu()
      }
    }
  },
  mounted() {
    // Add an event listener to listen for user clicks
    document.addEventListener('click', this.handleOutsideClick)
  }
}
