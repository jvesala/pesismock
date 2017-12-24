Hae datat pesislivestä. 

Kopioi jq -c '.data[0].data[] -elementit runkosarjasta ja pudotuspeleistä käsin kausi2017-tiedostoon. 

cat kausi2017.json | jq -c '.[] | select((.home[] | contains("Vimpelin Veto")) or (.visitor[] | contains("Vimpelin Veto"))) | {url,hometeam:.home.full_name,visitorteam:.visitor.full_name,id,time_begin,phase,result}' | uniq > schedule-vive.json
cat kausi2017.json | jq -c '.[] | {url,hometeam:.home.full_name,visitorteam:.visitor.full_name,id,time_begin,phase,result}' | uniq > schedule-all.json



cat kausi2017.json | jq -c '.[] | select((.home[] | contains("Vimpelin Veto")) or (.visitor[] | contains("Vimpelin Veto"))) 

#| {url,hometeam:.home.full_name,visitorteam:.visitor.full_name,id,time_begin,phase,result}'

cat kausi2017.json | jq -c '.[] | select((.home[] | contains("Vimpelin Veto")) or (.visitor[] | contains("Vimpelin Veto"))) | {url,hometeam:.home.full_name,visitorteam:.visitor.full_name,id,time_begin,phase,result}'

cat kausi2017.json | jq -c '.[] | select((.home[] | contains("Vimpelin Veto")) or (.visitor[] | contains("Vimpelin Veto"))) | {url,hometeam:.home.full_name,visitorteam:.visitor.full_name,id,time_begin,phase,result}'