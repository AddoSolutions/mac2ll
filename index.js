/**
 * Convert mac address to IPv6 link-local address
 * @param mac {string} Example: `ee:d0:00:17:91:85`
 * @returns {string} Return an IPv6 Link Local address (ex: `fe80::ecd0:00ff:fe17:9185`)
 */
module.exports = function (mac) {
    mac = mac.split(":");
    var first = ("00000000" + (parseInt(mac[0], 16)).toString(2)).substr(-8)
    first = first.substr(0, 6) + (first.substr(6, 7) == "0" ? 1 : "0") + first.substr(7);
    mac[0] = parseInt(first, 2).toString(16);

    return "fe80::" + mac[0] + mac[1] + ":" + mac[2] + "ff:fe" + mac[3] + ":" + mac[4] + mac[5];
}

function test(mac,ll){
    console.log("mac: "+mac+(module.exports(mac)==ll?"==":"DOES NOT ==")+ll);
}

//test("ee:d0:00:17:91:85","fe80::ecd0:00ff:fe17:9185");
//test("52:74:f2:b1:a8:7f","fe80::5074:f2ff:feb1:a87f");
