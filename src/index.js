// Vue logic
import { createApp } from 'vue'
// Import stylings and components
import '@/global.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Components
import TemplateComponent from '@/components/Template/template.vue'
// Mixins
import CollapsibleMixin from '@/mixins/collapsible.js'
import router from './router.js'
// eslint-disable-next-line no-unused-vars
import icon from '@/assets/icon.ico'

library.add(fas, far, fab)

// Create, configure and mount the app
const app = createApp(TemplateComponent)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mixin(CollapsibleMixin)
app.use(router)
app.mount('#app')
