<template>
   <div>
    <mdb-datatable-2 v-model="data" :searching="{value: search, field: 'office'}" />
    <mdb-input class="mt-0" v-model="search" label="Search by office" />
  </div>
</template>

<script>

  import { mdbDatatable2, mdbInput } from 'mdbvue';
  export default {
    name: 'DatatablePage',
    components: {
      mdbDatatable2,
      mdbInput
    },
    data() {
      return {
        search: '',
        data: {
          columns: [
            {
              label: 'Name',
              field: 'name',
              sort: true
            },
            {
              label: 'Position',
              field: 'position',
              sort: true
            },
            {
              label: 'Office',
              field: 'office',
              sort: true
            },
            {
              label: 'Age',
              field: 'age',
              sort: true
            },
            {
              label: 'Start date',
              field: 'date',
              sort: true
            },
            {
              label: 'Salary',
              field: 'salary',
              sort: false,
              format: value => "£" + value
            }
          ],
          rows: [
            {
              name: 'Tiger Nixon',
              position: 'System Architect',
              office: 'Edinburgh',
              age: '61',
              date: '2011/04/25',
              salary: '$320'
            },
            {
              name: 'Garrett Winters',
              position: 'Accountant',
              office: 'Tokyo',
              age: '63',
              date: '2011/07/25',
              salary: '$170'
            },
            {
              name: 'Ashton Cox',
              position: 'Junior Technical Author',
              office: 'San Francisco',
              age: '66',
              date: '2009/01/12',
              salary: '$86'
            },
            {
              name: 'Cedric Kelly',
              position: 'Senior Javascript Developer',
              office: 'Edinburgh',
              age: '22',
              date: '2012/03/29',
              salary: '$433'
            },
            {
              name: 'Airi Satou',
              position: 'Accountant',
              office: 'Tokyo',
              age: '33',
              date: '2008/11/28',
              salary: '$162'
            },
            {
              name: 'Brielle Williamson',
              position: 'Integration Specialist',
              office: 'New York',
              age: '61',
              date: '2012/12/02',
              salary: '$372'
            },
            {
              name: 'Herrod Chandler',
              position: 'Sales Assistant',
              office: 'San Francisco',
              age: '59',
              date: '2012/08/06',
              salary: '$137'
            }
            ]
        }
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
