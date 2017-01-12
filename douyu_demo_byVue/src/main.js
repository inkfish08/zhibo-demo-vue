import Vue from 'vue'
import App from './App'
import index from './components/index/index'
import live from './components/live/live'
import focus from './components/focus/focus'
import find from './components/find/find'
import mine from './components/mine/mine'
import liveroom from './components/liveroom/liveroom'
import video from './components/global/video'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import './common/stylus/icon.styl'
import './common/stylus/index.styl'

Vue.use(VueRouter);
Vue.use(VueResource);

let app = Vue.extend(App);
let router = new VueRouter({
  linkActiveClass:'active'
});

router.map({
  '/index':{
    component:index
  },
  '/live':{
    component:live
  },
  '/focus':{
    component:focus
  },
  '/find':{
    component:find
  },
  '/mine':{
    component:mine
  },
  '/liveroom/:shortName':{
    name:'liveroom',
    component:liveroom
  },
  '/room/:id':{
    name:'room',
    component:video
  }
})

router.start(app,'#app');

router.go('/index');
