<template>
    <div>
        <h1>Channelers</h1>

        <table class="uk-table uk-table-hover uk-table-responsive">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Table Heading</th>
                </tr>
            </thead>
            <tbody class="uk-width-1-1">
                <tr v-for="item in items">
                    <td><img :src="item['fields']['Photo'][0]['thumbnails']['small']['url']" alt="" v-if="item['fields']['Photo']" width="40"></td>
                    <td>{{ item['fields']['Name'] }}</td>
                    <td>Table Data</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data: function() {
         return  {
           items: []
         }
    },
    mounted: function(){
        this.loadItems(); 
    },
    methods: {
        loadItems: function(){
            
            // Init variables
            var self = this
            var app_id = "appBdvNNdTocVQESz";
            var app_key = "keym6ZpQwS2we0oeW";
            this.items = []
        axios.get(
            "https://api.airtable.com/v0/"+app_id+"/Channelers?view=Channelers%20-%20Grid%20View",
                { 
                    headers: { Authorization: "Bearer "+app_key } 
                }
            ).then(function(response){
                self.items = response.data.records
            }).catch(function(error){
                console.log(error)
            })
        }
    }
}
</script>


