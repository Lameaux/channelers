<template>
    <div>
        <h1>Channelers</h1>
        <div class="uk-grid uk-grid-medium uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div v-for="item in items">
                <div class="uk-card uk-card-default uk-card-body">
                    <h3 class="uk-card-title">{{ item['fields']['Name'] }}</h3>
                </div>
            </div>
        </div>
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


