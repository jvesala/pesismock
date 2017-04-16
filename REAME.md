cat runkosarja.json | jq -c '.data[0].data[] | select((.home[] | contains("Vimpelin Veto")) or (.visitor[] | contains("Vimpelin Veto"))) | {url,home,visitor,id,time_begin}' | uniq > /opt/git/pesismock/static/ohjelma/runkosarja-vimpeli.json

curl https://pesislive.fi/calendar/msuper/Runkosarja/ > runkosarja.json
cat runkosarja.json | jq -c '.data[0].data[] | select((.home[] | contains("Vimpelin Veto")) or (.visitor[] | contains("Vimpelin Veto"))) | {url,hometeam:.home.full_name,visitorteam:.visitor.full_name,id,time_begin}' | uniq > /opt/git/pesismock/static/ohjelma/runkosarja-vimpeli.json

(todo pilkut)