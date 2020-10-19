const axios = require('axios');
const qs = require('querystring');

const BASE_URL = 'https://iform-portal-config-bkh87.ondigitalocean.app/portal-config'

class PortalConfig{

    constructor(){

    }

    async getConfig(config_key, config_group){
        const config = {
            params: {
                config_key: config_key,
                config_group: config_group
            }
        }
        try {
            let res = await axios.get(BASE_URL,config)
            console.log(res.data)
            return (res.data)        
        } catch (err){
            if (err.response) {
                return(err.response.data)
              } else if (err.request) {
                return(err.request)
              } else {
                return(err)
              }
        }
    }

    async setConfig(config_key, config_value, config_group, record_id){
        const body ={
            config_key:config_key,
            config_group:config_group,
            config_value:config_value,
            record_id:record_id
        }
        try {
            let res = await axios.post(BASE_URL,body)
            console.log(res.data)
            return (res.data)            
        } catch (err){
            if (err.response) {
                return(err.response.data)
            } else if (err.request) {
                return(err.request)
            } else {
                return(err)
            }
        }
    }

    async removeConfig(record_id){
        const config = {
            params: {
                record_id:record_id
            }
        }
        try {
            let res = await axios.delete(BASE_URL,config)
            console.log(res.data)
            return (res.data)        
        } catch (err){
            if (err.response) {
                return(err.response.data)
              } else if (err.request) {
                return(err.request)
              } else {
                return(err)
              }
        }
    }






}

module.exports = PortalConfig;
