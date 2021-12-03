<template>
  <div>
    <div class="container">
        <p class="title">TOP 20 games</p>
        <b-table :data="data" :columns="columns"></b-table>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from './Footer.vue'

    export default {
    name: "Home",
  components: {
    Footer,
  },
        data() {
            return {
                data: [
                    { 'id': 1, 'Name': 'Warzone', 'Dev': 'Activision', 'date': '2019-10-15 13:43:27', 'Rate': '9.5' },
                    { 'id': 2, 'Name': 'John', 'Dev': 'Jacobs', 'date': '2016-12-15 06:00:53', 'Rate': '2' },
                    { 'id': 3, 'Name': 'Tina', 'Dev': 'Gilbert', 'date': '2016-04-26 06:26:28', 'Rate': '4' },
                    { 'id': 4, 'Name': 'Clarence', 'Dev': 'Flores', 'date': '2016-04-10 10:28:46', 'Rate': '5' },
                    { 'id': 5, 'Name': 'Anne', 'Dev': 'Lee', 'date': '2016-12-06 14:38:38', 'Rate': '10' },
                    { 'id': 6, 'Name': 'Jesse', 'Dev': 'Simmons', 'date': '2016-10-15 13:43:27', 'Rate': '2' },
                    { 'id': 7, 'Name': 'Jesse', 'Dev': 'Simmons', 'date': '2016-10-15 13:43:27', 'Rate': '8' },
                    { 'id': 8, 'Name': 'Jesse', 'Dev': 'Simmons', 'date': '2016-10-15 13:43:27', 'Rate': '5' },
                    { 'id': 9, 'Name': 'Jesse', 'Dev': 'Simmons', 'date': '2016-10-15 13:43:27', 'Rate': '4' },
                    { 'id': 10, 'Name': 'Jesse', 'Dev': 'Simmons', 'date': '2016-10-15 13:43:27', 'Rate': '7' },{ 'id': 1, 'Name': 'Warzone', 'Dev': 'Activision', 'date': '2019-10-15 13:43:27', 'Rate': '9.5' },
                    { 'id': 2, 'Name': 'John', 'Dev': 'Jacobs', 'date': '2016-12-15 06:00:53', 'Rate': '2' },
                    { 'id': 3, 'Name': 'Tina', 'Dev': 'Gilbert', 'date': '2016-04-26 06:26:28', 'Rate': '4' },
                    { 'id': 4, 'Name': 'Clarence', 'Dev': 'Flores', 'date': '2016-04-10 10:28:46', 'Rate': '5' },
                    { 'id': 5, 'Name': 'Anne', 'Dev': 'Lee', 'date': '2016-12-06 14:38:38', 'Rate': '10' },
                    { 'id': 6, 'Name': 'Jesse', 'Dev': 'Simmons', 'date': '2016-10-15 13:43:27', 'Rate': '2' },
                    { 'id': 7, 'Name': 'Jesse', 'Dev': 'Simmons', 'date': '2016-10-15 13:43:27', 'Rate': '8' },
                    { 'id': 8, 'Name': 'Jesse', 'Dev': 'Simmons', 'date': '2016-10-15 13:43:27', 'Rate': '5' },
                    { 'id': 9, 'Name': 'Jesse', 'Dev': 'Simmons', 'date': '2016-10-15 13:43:27', 'Rate': '4' },
                    { 'id': 10, 'Name': 'Jesse', 'Dev': 'Simmons', 'date': '2016-10-15 13:43:27', 'Rate': '7' }
                ],
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'Name',
                        label: 'Name',
                    },
                    {
                        field: 'Dev',
                        label: 'Dev',
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true
                    },
                    {
                        field: 'Rate',
                        label: 'Rate',
                    }
                ]
            }
        }
    }
</script>