// Assets
import navbarimg from './../../assets/icon.webp'

// Logic
export default {
    name: 'NavbarComponent',
    data () {
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
        }
    }
}
