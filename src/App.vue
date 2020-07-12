<template>
  <div id="app">
<Table v-if="tableData" :theData="tableData" :config="config" :style="{height: '600px'}"/>
  </div>
</template>

<script>
import Table from './components/Table'
const url = 'http://localhost:8000/orders';
export default {
  components:{
    Table
  },
  data:()=>({
    tableData:undefined,
    config:[
      {
        key:'order_name',
        title:'Order Name'
      },
      {
        key:'create_time',
        title:'Create Time'
      },
        {
        key:'product',
        title:'Product'
      },
      {
        key:'delivered_amount',
        title:'Delivered Amount'
      },
      {
        key:'total_amount',
        title:'Total Amount'
      },
    ]
  }),
  mounted() {
    this.$axios.get(url)
      .then(response => {
        console.log(response)
        this.tableData = response
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
  }

</script>

<style>

</style>