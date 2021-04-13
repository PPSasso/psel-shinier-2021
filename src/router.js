import Vue from 'vue'
import VueRouter from 'vue-router'
import GroupList from './views/GroupList'
import CreateGroup from './views/CreateGroup'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: "/",
            name: "groupList",
            component: GroupList
        },
        {
            path: "/create",
            name: "createGroup",
            component: CreateGroup
        }
    ]
});