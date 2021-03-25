[![Made withNodeJs](https://img.shields.io/badge/Made%20with-Node%20JS-green?style=for-the-badge&logo=Node.js)]

# ESPN Cricinfo Live Cricket Score API
Live Cricket Score API all teams and tournaments.

Live version :

## API Endpoints :

Base URL: ```http://127.0.0.1:8000```
* GET ```/live```
List all the possible all teams and tournaments.

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
    },
    {
        "status": "stumps",
        "match": "Final, Durban, Mar 25 - 29 2021, 4-Day Franchise Series",
        "teamone": "DOLPH",
        "teamonescore": "(10 ov)31/1",
        "teamtwo": "TITNS",
        "teamtwoscore": "",
        "update": "Day 1 - Dolphins chose to bat. CRR: 3.10"
    },
    {
        "status": "",
        "match": "3rd ODI, Wellington, Mar 25 2021, Bangladesh tour of New Zealand",
        "teamone": "New Zealand",
        "teamonescore": "",
        "teamtwo": "Bangladesh",
        "teamtwoscore": "",
        "update": "Match yet to begin"
    },
    {
        "status": "",
        "match": "19th Match, Wellington, Mar 25 - 29 2021, Plunket Shield",
        "teamone": "Wellington",
        "teamonescore": "",
        "teamtwo": "Northern Districts",
        "teamtwoscore": "",
        "update": "Match yet to begin"
    },
    {
        "status": "",
        "match": "20th Match, Dunedin, Mar 25 - 29 2021, Plunket Shield",
        "teamone": "Otago",
        "teamonescore": "",
        "teamtwo": "Central Districts",
        "teamtwoscore": "",
        "update": "Match yet to begin"
    },
    {
        "status": "live",
        "match": "Harare, Mar 24 - 27 2021, Logan Cup",
        "teamone": "EAGLE",
        "teamonescore": "193",
        "teamtwo": "SRock",
        "teamtwoscore": "(108.3 ov)405/9",
        "update": "Day 2 - Rocks lead by 212 runs. CRR: 3.73"
    },
    {
        "status": "live",
        "match": "Harare, Mar 24 - 27 2021, Logan Cup",
        "teamone": "MOUNT",
        "teamonescore": "290",
        "teamtwo": "RHINO",
        "teamtwoscore": "(77.5 ov)261/7",
        "update": "Day 2 - Rhinos trail by 29 runs. CRR: 3.35"
    }
```

Source: https://www.espncricinfo.com/live-cricket-score