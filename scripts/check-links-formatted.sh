#!/bin/bash
# decoration for printing
decorativeLines="----------------------------------------------------"
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # no color

# broken-link-checker
checkInternalLinks="blc http://localhost:9000 -ro --exclude-external --exclude /apis/json-rpc --exclude /apis/javascript --exclude /apis/rest --exclude /apis/event --exclude http://localhost:1234 --exclude http://localhost:8080"
checkExternalLinks="blc http://localhost:9000 -ro --exclude-internal --exclude http://localhost:1234 --exclude http://localhost:8080 --exclude https://github.com/qlik-trial --exclude https://confluence.qliktech.com --exclude https://qliktech.jfrog.io --exclude https://docs.nats.io --exclude https://community.qlik.com --exclude http://usejsdoc.org"

# we check internal links by default
if [[ $1 == "external" ]]; then
    checkLinks=$checkExternalLinks
elif [[ $1 == "internal" ]]; then
    checkLinks=$checkInternalLinks
else
    printf "\n${RED}ERROR: the second argument must be 'internal' or 'external'${NC}\n"
    exit 1
fi

echo "Checking links..."
if $checkLinks > checkLinks.txt ; then
    # command succeeded
    cat checkLinks.txt
    printf "\n%s\n%s\n" "$decorativeLines" "$decorativeLines"
    printf ${GREEN}
    printf "The test ran successfully.\n"
    grep "^Finished!.*\." checkLinks.txt | tail -1 #get only last match
    printf ${NC}
    printf "%s\n%s\n" "$decorativeLines" "$decorativeLines"
else
    # command failed
    cat checkLinks.txt
    printf "\n%s\n%s\n" "$decorativeLines" "$decorativeLines"
    printf ${RED}
    grep "^Finished!.*\." checkLinks.txt | tail -1 #get only last match

    # get the broken lines
    regexUrl='Getting links from.*'
    regexBrokenLink='.*BROKEN.*'
    brokenLinksArr=( )
    currentUrl="" # current URL being tested
    previousUrl=""
    printf "\n${RED}BROKEN LINKS:${NC}\n"

    # read the output line by line
    while IFS= read -r line; do
        if [[ $line =~ $regexUrl ]]; then
            currentUrl=$line
            if [[ $currentUrl != $previousUrl ]]; then
                previousUrl=$currentUrl
                if [[ ${#brokenLinksArr[@]} > 0 ]]; then # check the length of the array
                    printf "\n%s\n" "$currentUrl"
                    printf '%s\n' "${brokenLinksArr[@]}"
                fi
                brokenLinksArr=( ) # restart the array
            fi
        elif [[ $line =~ $regexBrokenLink ]]; then
            brokenLinksArr+=( "$line" )
        fi
    done < "checkLinks.txt"
    printf "%s\n%s\n\n" "$decorativeLines" "$decorativeLines"
    exit 1
fi