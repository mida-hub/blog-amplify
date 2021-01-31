import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import awsmobile from './aws-exports'
import Amplify from 'aws-amplify'

const amplifyConfig = {
    'aws_appsync_graphqlEndpoint': awsmobile.aws_appsync_graphqlEndpoint,
    'aws_appsync_region': awsmobile.aws_appsync_region,
    'aws_appsync_authenticationType': awsmobile.aws_appsync_authenticationType,
    'aws_appsync_apiKey': awsmobile.aws_appsync_apiKey
}
Amplify.configure(amplifyConfig)

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
