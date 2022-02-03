<template>

       <div class="container" >
         <div class="heading"> <h5 >Общее количество проголосовавших {{info.count }} </h5></div>
         <div class="home">
           <div class="candidates_image">
              <img alt="Vue Tih" src="@/assets/tihan.jpg">
              <h6 > Тихановская {{info.tihbill }} </h6>
          </div>
          <div class="candidates_image">
              <img alt="Vue Tih" src="@/assets/cepkalo.jpg">
              <h6 > Цепкало {{info.cepbill }} </h6>
          </div>
          <div class="candidates_image">
              <img alt="Vue Tih" src="@/assets/lukahh.jpg">
              <h6 > Лукашенко {{info.lukabill }} </h6>
          </div>
           <div class="candidates_image">
              <img alt="Vue Tih" src="@/assets/putin1.jpg">
              <h6 > Путин {{info.putinbill }} </h6>
          </div>
           <div class="candidates_image">
              <img alt="Vue Tih" src="@/assets/buidon.jpg">
              <h6 > Байден {{info.buidonbill }} </h6>
          </div>
          <div class="candidates_image">
              <img alt="Vue Tih" src="@/assets/pin.jpg">
              <h6 > Си Цзиньпин {{info.pinbill }} </h6>
          </div>

         </div>

  </div>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  metaInfo () {
    return {
      title: 'Home'
    }
  },
  name: 'Home',
  data: () => ({
  }),
  components: {
  },
  computed: {
    ...mapGetters(['info']),
    error () {
      return this.$store.getters.error
    }

  },
  async mounted () {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')
      console.log(this.count)
    }
  }
}
</script>
<style scoped>
.container{

 max-width: 100%;
}
.heading{
  margin-bottom: 5px;
  color: #3f5c97;
  font-weight: normal;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.home{
display: flex;
justify-content: center;

}
.candidates_image{
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;

}
.candidates_image h6{
  margin-top: 5px;
  color: #3f5c97;
  font-weight: bold;
}
.candidates_image img{
/* max-width: 200px; */
border-radius: 20px;
width: 100%;
height: 100%;
object-fit: cover;

}

</style>
