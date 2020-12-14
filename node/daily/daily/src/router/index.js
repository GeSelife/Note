//负责路由的一系列操作
/*
    路由是vue的插件 --- 挂在到vue上    import Vue from "vue";
 */
//变量引进来不使用会报错
//引入路由
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
//创建组件 --- 引入组件
import Login from "../view/Login";
import Index from "../view/Index";
//路径和组件创建映射 --- 配置路由
const routes=[
    {path:"/login",component: Login},
    {path:"/index",component: Index}
]
//创建vue实例
let router = new VueRouter({
    routes
})
//暴露router
export default {
    router
}