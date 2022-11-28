import Vue from 'vue'
import VueForm from 'vue-form'


let options = {
    validators: {
        'entre-3-15-caracteres' : function(value) {
            return (value.length > 3 && value.length < 15)
        },
        'entre-18-120-anios' : function(value) {
            return (value > 18 && value < 120)
        }      
    }
}

Vue.use(VueForm, options)