<template>

  <div class="vot" >
  <h5 id="date_time">{{date | date('datetime')}}</h5>
  <div><span class="name_candidate"> <h5 id="count"> {{user.name}} - {{user.score}}</h5></span></div>
  <!-- <Loader v-if="loading " /> -->
  <form  action="#" @submit.prevent ="setVot">
    <div class="vot_candidatas">
<!-- <div class = "candidates_column"> -->
      <div class = "candidates_item">
            <!-- <span class="candidates_image"> -->
            <img alt="Vue Tih" src="@/assets/tihan.jpg">
            <!-- </span> -->
            <div>
              <label>
                <input name="group1" type="radio"
                 v-bind:value="{name:'Тихановская', score:1}"
                 v-model="user"
              />
            <span class="name_candidate">Тихановская {{info.tihbill }}</span>
              </label>
            </div>
      </div>
    <!-- </div> -->

    <!-- <div class = "candidates_column"> -->
      <div class = "candidates_item">

        <!-- <span class="candidates_image" > -->
            <img alt="Vue Tih" src="@/assets/cepkalo.jpg">
        <!-- </span> -->
            <div class="label">
              <label>
                <input name="group1" type="radio"
                v-bind:value="{name:'Цепкало', score:1}" v-model="user"
                />
        <span class="name_candidate">Цепкало {{info.cepbill}}</span>
              </label>
        </div>
      </div>
    <!-- </div> -->

     <!-- <div class = "candidates_column"> -->
        <div class = "candidates_item">
         <!-- <span class="candidates_image"> -->
         <img alt="Vue Tih" src="@/assets/lukahh.jpg">
         <!-- </span> -->
         <div>
           <label>
              <input  name="group1" type="radio"
                v-bind:value="{name:'Лукашенко', score:1}"
                v-model="user"
              />
         <span class="name_candidate">Лукашенко {{info.lukabill}} </span>
           </label>
         </div>
      </div>
    <!-- </div> -->

    <!-- <div class = "candidates_column"> -->
      <div class = "candidates_item">

        <!-- <span class="candidates_image" > -->
            <img alt="Vue Tih" src="@/assets/putin1.jpg">
        <!-- </span> -->
            <div>
              <label>
                <input name="group1" type="radio"
                v-bind:value="{name:'Путин', score:1}" v-model="user"
                />
        <span class="name_candidate">Путин {{info.putinbill}}</span>
              </label>
        </div>
      </div>
    <!-- </div> -->

    <!-- <div class = "candidates_column"> -->
      <div class = "candidates_item">

        <!-- <span class="candidates_image" > -->
            <img alt="Vue Tih" src="@/assets/buidon.jpg">
        <!-- </span> -->
            <div>
              <label>
                <input name="group1" type="radio"
                v-bind:value="{name:'Байден', score:1}" v-model="user"
                />
        <span class="name_candidate">Байден {{info.buidonbill}}</span>
              </label>
        </div>
      </div>
    <!-- </div> -->

     <!-- <div class = "candidates_column"> -->
      <div class = "candidates_item">

        <!-- <span class="candidates_image" > -->
            <img alt="Vue Tih" src="@/assets/pin.jpg">
        <!-- </span> -->
            <div>
              <label>
                <input name="group1" type="radio"
                v-bind:value="{name:'Си', score:1}" v-model="user"
                />
        <span class="name_candidate">Си Цзиньпин {{info.pinbill}}</span>
              </label>
        </div>
      </div>
    <!-- </div> -->

    <!-- <div class = "candidates_column"> -->
      <div class = "candidates_item">
         <label>
            <input class="with-gap" name="group1" type="radio"
               v-bind:value="{name:'против_всех', score:1}" v-model="user"
               checked
           />
        <span class="name_candidate">Против всех {{info.contrarybill}} </span>
         </label>
      </div>
    <!-- </div> -->

    </div>
    <!-- <div><span>Выбрано: {{user.name}} - {{user.score}}</span></div> -->
       <div class = "button-candidatas">
          <button class="btn waves-effect waves-light"
          type="submit" name="action">Submit
          <i class="material-icons right">send</i>
      </button>
      </div>
  </form>

  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'vot',
  props: {
    // rezaltvot: {
    //   type: {},
    //   default: () => {
    //     return {}
    //   }
    //   // required: true

    // }
  },
  data: () => ({
    date: new Date(),
    interval: 0,
    tih: null,
    cep: null,
    luk: null,
    put: null,
    buiden: null,
    pin: null,
    contrary: null,
    user: {},
    rezaltbill: {},
    cepbill: null,
    // rezaltvot: {},

    updateCount: 0
  }),
  computed: {
    ...mapGetters(['info', 'bilvot']),

    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }

  },
  watch: {
    error (fbError) {
      console.log(fbError)
    }
  },
  methods: {
    async  setVot () {
      if (this.user.name === 'Тихановская') {
        this.tih = this.user.score
      } else {
        this.tih = 0
      }
      if (this.user.name === 'Цепкало') {
        this.cep = this.user.score
      } else {
        this.cep = 0
      }
      if (this.user.name === 'Лукашенко') {
        this.luk = this.user.score
      } else {
        this.luk = 0
      }
      if (this.user.name === 'Путин') {
        this.put = this.user.score
      } else {
        this.put = 0
      }
      if (this.user.name === 'Байден') {
        this.buiden = this.user.score
      } else {
        this.buiden = 0
      }
      if (this.user.name === 'Си') {
        this.pin = this.user.score
      } else {
        this.pin = 0
      }
      if (this.user.name === 'против_всех') {
        this.contrary = this.user.score
      } else {
        this.contrary = 0
      }

      try {
        const bill = {
          cepbill: this.info.cepbill + this.cep,
          lukabill: this.info.lukabill + this.luk,
          tihbill: this.info.tihbill + this.tih,
          putinbill: this.info.putinbill + this.put,
          buidonbill: this.info.buidonbill + this.buiden,
          pinbill: this.info.pinbill + this.pin,
          contrarybill: this.info.contrarybill + this.contrary,
          count: this.info.count + this.user.score
        }

        // this.$set(this.user, this.rezaltbill, bill)

        await this.$store.dispatch('apdateInfo', bill)
        this.$emit('apdatevot', bill)
        // this.$v.$reset()

        const infopersons = await this.$store.dispatch('creatInfoHistory', {
          count: this.info.count + this.user.score,
          dates: new Date().toJSON(),
          name: this.user.name
        })

        // console.log('uid:', infopersons)
        // this.$v.$reset()
        this.$message('голос добавлен')
        this.$emit('created', infopersons)
        this.personHistory = await this.$store.dispatch('fetchInfoHistory')
        const count = this.personHistory.length
        console.log(count)
        this.candidatcount = this.USERS
        // console.log(this.personHistory[count - 1].id)
        const number = this.personHistory[count - 1].id
        setTimeout(() => alert('запомните или запишите этот ключ' + number + 'он является вашим индефикационным ключом по которому вы можете проверить результат вашего выбора на страничке history'), 1000)
        // this.$v.$reset()
        this.$router.push('/history')
      } catch (error) {
        this.$message('голос не добавлен')
      }
    }
  },
  async mounted () {
    // this.interval = setInterval(() => {
    //   this.date = new Date()
    // }, 1000)
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')
      console.log('rezaltvot:', this.rezaltvot)
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
    console.log('beforeDestroy')
  }
}
</script>
<style scoped>
#alerts{
  color: #3f5c97;
  font-size: 14;
  font-weight: normal;
}
.vot{
  max-width: 100%;
}
#count{
  color: crimson;
  font-weight: bold;
}
#date_time{
  color: darkslateblue;
}
.candidates_item{
   margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
/* min-width: 200px; */
/* position: relative; */
/* height: 100%;
width: 100%; */
}
.name_candidate{
  color:#3f5c97 ;
}

.candidates_item img{

border-radius: 20px;
width: 100%;
height: 100%;
object-fit: cover
}

.vot_candidatas  {
display: flex;
justify-content: center;
padding-bottom: 30px;
/* flex-basis: 50%; */
/* justify-content: center;
flex-basis: 20%;
 justify-content: space-around; */
 /* padding:5%; */
}
.button-candidatas{
  margin-bottom: 10px;
float: center;
    /* position:static; */
    /* margin-top: 40px; */
   /* padding-top:30px; */
    /* padding: 30px; */
    padding-top: 15px;
}

</style>
