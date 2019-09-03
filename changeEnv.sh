#!/bin/sh
API_URL='https://production.com.br/api'

sed -i 's/REPLACE_WITH_API_URL/${API_URL}/' ./dist/browser/main*.js

sed -i 's/REPLACE_WITH_API_URL/${API_URL}/' ./dist/server/main*.js