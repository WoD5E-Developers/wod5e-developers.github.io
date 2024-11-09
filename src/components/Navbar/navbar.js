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
                { text: 'Overview', href: '/' }
            ]
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuVisible = !this.isMenuVisible
        }
    }
}
