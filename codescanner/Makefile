TSC = ./node_modules/typescript/bin/tsc -p ./tsconfig.json
CONCURR = node ./node_modules/concurrently/src/main

ios.sim:
	$(CONCURR) -r 0 "$(TSC) --watch -p ." "npm run ios"