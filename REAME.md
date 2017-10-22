
curl https://pesislive.fi/calendar/msuper/Runkosarja/ > /tmp/runkosarja.json
cat /tmp/runkosarja.json | jq -c '.data[0].data[] | select((.home[] | contains("Vimpelin Veto")) or (.visitor[] | contains("Vimpelin Veto"))) | {url,hometeam:.home.full_name,visitorteam:.visitor.full_name,id,time_begin,phase,result}' | uniq > /opt/git/pesismock/static/ohjelma/runkosarja-vimpeli.json

curl https://pesislive.fi/calendar/msuper/Pudotuspelit/ > /tmp/pudotuspelit.json
cat /tmp/pudotuspelit.json | jq -c '.data[0].data[] | select((.home[] | contains("Vimpelin Veto")) or (.visitor[] | contains("Vimpelin Veto"))) | {url,hometeam:.home.full_name,visitorteam:.visitor.full_name,id,time_begin,phase,result}' | uniq > /opt/git/pesismock/static/ohjelma/pudotuspelit-vimpeli.json

lisää rivit listaksi kausi-2017.json -tiedostoon.