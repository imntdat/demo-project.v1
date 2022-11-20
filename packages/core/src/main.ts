import Antd from "ant-design-vue"
import Vue from "vue"

// import { Antd } from "@demo/common"

import "@demo/common/dist/style.css"

import App from "./App.vue"

Vue.use(Antd)

new Vue({ render: (h) => h(App) }).$mount("#app")
