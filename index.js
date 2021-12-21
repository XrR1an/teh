const axios = require("axios")
const urls = ["https://Bee4.muhamadwan.repl.co"] //link project kamu
const project = ["Bee4"] //nama project kamu
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Berhasil Login Ke " + project + ", Time: "+ Date.now())).catch(() => {});
        })
    }, 60 * 1000);
