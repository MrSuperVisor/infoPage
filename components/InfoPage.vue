<template>
  <div>
    <div v-if="$fetchState.pending" class="tab-root">
      <v-progress-circular
        indeterminate
        color="rgba(156, 66, 245, 1)"
      />
    </div>
    <div v-else-if="$fetchState.error" class='unauthorized'>
      <p> Не удалось получить информацию</p>
      <a href="/">На главную</a>
    </div>

    <div v-else v-show="pageInfo != undefined">
      <div v-show="!isAuthorized" class='unauthorized'>
          <p>Все что требуется для полета вашего дрона собрано на нашей платформе! После регистрации вы сможете использовать наши сервисы.</p>
          <button class='btn' :style="{width: '229px'}">Зарегистрироваться</button>
      </div>

      <h1>{{pageInfo.pText}}</h1>

      <div class="tab-root">
        <div v-for="(data, index) in pageInfo.pData"
          :key="data.step"
          @click="changeTab(index)"
          class="tablinks"
        >
          <div class="tabhead">
            <h1>{{data.step}}</h1>
          </div>

          <button class="tabtext" v-html="data.stepName"/>
          
        </div>
      </div>
      <input type="range" 
          :value="page" 
          :max="pageInfo.pData.length-1"
          @input="changeSlider"
          :class="setSliderStyle"
      >
      <v-tabs-items v-model="page">
        <v-tab-item 
          v-for="(data, index) in pageInfo.pData"
          :key="index"
        >

          <v-card class='tab-content' flat>
            <v-card-text v-show="data.stepContent">{{ data.stepContent }}</v-card-text>
            <video-player v-show="data.videoURL" :src="data.videoURL"/> 
            <v-card-text v-show="data.footer" v-html="data.footer"/>
            <button class='btn' :style="{width: '453px'}"  v-show="isAuthorized && pageInfo.btnText && pageInfo.btnLink">
              {{pageInfo.btnText}}
            </button>
          </v-card>

        </v-tab-item>
      </v-tabs-items>

    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import VideoPlayer from 'nuxt-video-player'
require("nuxt-video-player/src/assets/css/main.css");

export default {
  name: 'InfoPage',
  props: [
      'cRoute'
  ],
  data() {
    return {
      page: 0,
      pageInfo: undefined
    }
  },
  components: {
    VideoPlayer
  },
  computed: {
    ...mapState(['isAuthorized']),
    ...mapGetters(['getPageInfo']),
    setSliderStyle: function () {
        
        var ret = {}
        ret['mrng' + this.pageInfo.pData.length] = true
        return ret
    }
  },
  methods: {
    changeTab(index) {
      try {
        if (index >= 0) {
          this.page = index
        }
      } catch {
        this.page = 0
      }
    },
    changeSlider(evt) {
        this.changeTab(evt.target.valueAsNumber)
    }
  },

  fetch () {
    try {
      const pI = this.getPageInfo(this.cRoute)
      if (pI) {
        this.pageInfo = pI
      } else {
        throw new Error('Data fetch error')
      }
    } catch (error) {
      throw error
    }
  }
}

</script>