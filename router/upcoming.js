const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const router = express.Router();

router.get('/upcoming/', function(req, res) {

   const url = 'https://www.espncricinfo.com/live-cricket-match-schedule-fixtures';
      axios({url,
        timeout: 10000 ,
        headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET",
        "Open-Source": "https://github.com/Gourab28/espncricinfo-live-api",
        "Author": "Gourab Das, https://github.com/gourab28"
        }
      })
     .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);
      const LiveList = $('a[class="match-info-link-FIXTURES"] > div > div[class="match-info match-info-FIXTURES"]');
      //console.log(statsTable.length);
      const livelists = [];

        function removeLinebreak(str){
          return str.replace(/[\r\n]+/gm," ");
        }
      LiveList.each(function(){
        //Team Name
          const	status = $(this).find('div[class="status"] > span').text();
          //Total matches win
          const match = $(this).find('div[class="description"]').text();
          const	teamone = $(this).find('div[class="teams"] > div[class="team"] > div[class="name-detail"] > p[class="name"]').eq( 0 ).text();
           const	teamoneimg = $(this).find('div[class="teams"] > div[class="team"] > div[class="name-detail"]').children('img').eq(0).attr('src');
           const	teamonescore = $(this).find('div[class="teams"] > div[class="team"] > div[class="score-detail"]').eq( 0 ).text();
           const	teamtwo = $(this).find('div[class="teams"] > div[class="team"] > div[class="name-detail"] > p[class="name"]').eq( 1 ).text();
           const	teamtwoimg = $(this).find('div[class="teams"] > div[class="team"] > div[class="name-detail"]').children('img').eq(1).attr('src');
           const	teamtwoscore = $(this).find('div[class="teams"] > div[class="team"] > div[class="score-detail"]').eq( 1 ).text();
           const	update = $(this).find('div[class="status-text"]').text();
          //Push
      livelists.push({
         status: status,
         match: match,
         teamone: teamone,
         teamoneimg: teamoneimg,
         teamtwo: teamtwo,
         teamtwoimg: teamtwoimg,
         update: update
         
       });
     });
       res.status(200).json(livelists);
       
   });
})


module.exports = router;