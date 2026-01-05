// Logic
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript.js'
import 'prismjs/themes/prism-tomorrow.css'

export default {
  name: 'ApiComponent',
  data() {
    return {}
  },
  mounted() {
    // Highlight code after component has mounted
    Prism.highlightAll()
  }
}
