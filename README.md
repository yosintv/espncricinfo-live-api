[![Made withNodeJs](https://img.shields.io/badge/Made%20with-Node%20JS-green?style=for-the-badge&logo=Node.js)]

# ESPN Cricinfo Live Cricket Score API
Live Cricket Score API all teams and tournaments.

Live version :
https://espncricinfo-live-api.herokuapp.com/

## API Endpoints :

Base URL: ```http://127.0.0.1:8000```
* GET ```/live```
List all the possible live teams and tournaments.

Example:

```json
    {
        "status": "live",
        "match": "1st Test, North Sound, Mar 21 - 25 2021, Sri Lanka tour of West Indies",
        "teamone": "SL",
        "teamonescore": "169 & 476",
        "teamtwo": "WI",
        "teamtwoscore": "(26 ov, target 375)271 & 52/1",
        "update": "Day 5 - Session 1: West Indies need 323 runs. CRR: 2.00"
    },
    {
        "status": "stumps",
        "match": "20th Match, Brisbane, Mar 23 - 26 2021, Sheffield Shield",
        "teamone": "QLD",
        "teamonescore": "",
        "teamtwo": "SOA",
        "teamtwoscore": "",
        "update": ""
    },
    {
        "status": "stumps",
        "match": "21st Match, Perth, Mar 25 - 28 2021, Sheffield Shield",
        "teamone": "WA",
        "teamonescore": "(96 ov)291/6",
        "teamtwo": "VIC",
        "teamtwoscore": "",
        "update": "Day 1 - Victoria chose to field. CRR: 3.03"
    }
```
Base URL: ```http://127.0.0.1:8000```
* GET ```/upcoming```
List all the possible upcoming cricket match schedules.

Example:

```json
{"status":"29-mar-2021, 02:00 pm",
  "match":"2nd Test, North Sound, Mar 29 - Apr 2 2021, Sri Lanka tour of West Indies",
  "teamone":"West Indies","teamoneimg":"https://wassets.hscicdn.com/static/images/lazyimage.png",
  "teamtwo":"Sri Lanka",
  "teamtwoimg":"https://wassets.hscicdn.com/static/images/lazyimage.png",
  "update":"Match yet to begin"}
 ```
Source: https://www.espncricinfo.com/live-cricket-score

Feel free to open an issue for any bugs/features.