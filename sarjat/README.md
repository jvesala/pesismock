Hae datat pesislivestä. 

Kopioi jq -c '.data[0].data[] -elementit runkosarjasta ja pudotuspeleistä käsin kausi2017-tiedostoon. 

cat kausi2017.json | jq -c '.[] | select((.home[] | contains("Vimpelin Veto")) or (.visitor[] | contains("Vimpelin Veto"))) | {id, startTime:.time_begin, homeTeam:.home.full_name, visitorTeam:.visitor.full_name, phase, result}' | uniq > schedule-vive.json
cat kausi2017.json | jq -c '.[] | {id, startTime:.time_begin, homeTeam:.home.full_name, visitorTeam:.visitor.full_name, phase, result}' | uniq > schedule-all.json


cat hallism2018.json | jq -c '.[] | select((.home[] | contains("Vimpelin Veto")) or (.visitor[] | contains("Vimpelin Veto"))) | {id, startTime:.time_begin, homeTeam:.home.full_name, visitorTeam:.visitor.full_name, phase, result}' | uniq > schedule-vive-2018.json
cat hallism2018.json | jq -c '.[] | {id, startTime:.time_begin, homeTeam:.home.full_name, visitorTeam:.visitor.full_name, phase, result}' | uniq > schedule-all-2018.json


lisää [] ja pilkut