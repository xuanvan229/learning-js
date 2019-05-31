// import axios from 'axios'
const axios = require('axios')
const URL = 'https://www.trackitforlife.com/obj/fhir-practitioner/?max_results=24&page=1&where={"membership":"P","flag":"pcp"}';
const getData = async () => {
  let result = {}
  return axios({
    method: 'GET',
    url: URL,
    headers: {'Authorization': 'tifl.auth:v1:ZoPd1kLmtXk9PYfuDSQ1tC83lHutmoJndBy8Srol:573861834ce36eb8b36841d3'},
    withCredentials: true,
  })
  .then((response) =>{
    console.log(response)
  })
  .catch((err) => {
    throw err
  })
};


getData()