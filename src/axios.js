import axios from "axios";
//axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';

const instance=axios.create({
    headers: {"Access-Control-Allow-Origin" : '*',
                    "Content-Type":"application/json",
                    "charset":"utf-8"},


    baseURL: "http://starlord.hackerearth.com/recipe"

}); 

//instance.get("")
export default instance;
