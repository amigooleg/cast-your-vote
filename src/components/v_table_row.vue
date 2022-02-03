<template>

<div class="v-table-row" >
     <!-- <div class="row row_count">{{ '#' }}</div> -->
  <div class="row row_count">{{row_data.count }}</div>
  <div class="row row_id">{{ row_data.id}}</div>
  <div class="row row_name">{{ row_data.name}}</div>
  <div class="row row_dates">{{ row_data.dates | date('datetime') }}</div>
</div>

</template>
<script>
export default {
  name: 'v-table-row',
  data: () => ({
    index: 0
  }),
  props: {
    row_data: {
      type: Object,
      default: () => {
        return {}
      }
      // required: true

    }
  },
  mounted () {
    // console.log('this.row_data.length:', (this.row_data.length))
  }
  // computed: {
  //   personHistory () {
  //     return Math.cell(this.row_data.length / 10)
  //   }
  // }
}
</script>
<style scoped>
.v-table-row {
display: flex;
justify-content: space-around;
}
.row {
flex-basis: 25%;
padding: 8px 16px;
/* text-align: left; */
/* border-bottom: solid 1px #e2e2e2; */
}

</style>
