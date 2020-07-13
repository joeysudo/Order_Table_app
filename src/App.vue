<template>
  <div id="app">
    <main>
    <Table 
      v-if="tableData" 
      :theData="tableData" 
      :config="config" :style="{height: '350px'}"
      />
    </main>
  </div>
</template>

<script>
import Table from './components/Table'
const url = 'http://localhost:8000/orders';
export default {
  name: 'DatatablePage',
  components:{
    Table,
  },
  data:()=>({
    tableData:undefined,
    config:[
      {
        key:'order_name',
        title:'Order Name',
        type:'text'
      },
      {
        key:'company_name',
        title:'Company Name',
        type:'text'
      },
      {
        key:'customer_name',
        title:'Customer Name',
        type:'text'
      },
      {
        key:'create_time',
        title:'Create Time',
        type:'date'
      },
      {
        key:'delivered_amount',
        title:'Delivered Amount',
        type:'number'
      },
      {
        key:'total_amount',
        title:'Total Amount',
        type:'number'
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
body {
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  margin: 0;
}
main {
  margin: 30px;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>