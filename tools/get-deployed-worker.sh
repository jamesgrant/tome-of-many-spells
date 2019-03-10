
source "$1"
http --json "https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}/workers/script" \
     "X-Auth-Email:${CLOUDFLARE_AUTH_EMAIL}" \
     "X-Auth-Key:${CLOUDFLARE_AUTH_KEY}"