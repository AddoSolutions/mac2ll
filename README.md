# Mac Address to IPv6 Link Local Converter

This is a simple script that follows the standard conventions for converting a mac address to a IPv6 Link Local address:

Example:

```javascript
var mac2ll = require("mac2ll");
var ll = mac2ll("ee:d0:00:17:91:85")
console.log(ll); // Logs: fe80::ecd0:00ff:fe17:9185
```

## API:

Nope, one method, one param, no options :) Pretty much dead simple!
