var cq1 = document.getElementById("cq1");
var cq2 = document.getElementById("cq2");
var cq3 = document.getElementById("cq3");

var btc = cq1.innerHTML;
var eth = cq2.innerHTML;
var usd = cq3.innerHTML;

var btcu = 26.8;
var ethu = 1.7;
var usdt = 1;


var total = document.getElementById("balance");

function addFunction(coin) {
    if (coin == "btc") {
        cq1.innerHTML++;
        btc++;
    }
    if (coin == "eth") {
        cq2.innerHTML++;
        eth++;
    }
    if(coin == "usd") {
        cq3.innerHTML++;
        usd++;
    }
    var totalbtc = btc * btcu;
    var totaleth = eth * ethu;
    var totalusd = usd * usdt;

    total.innerHTML = totalbtc + totaleth + totalusd + "  USDT";
}

function removeFunction(coin) {
    if (coin == "btc") {
        cq1.innerHTML--;
        btc--;
    }
    if (coin == "eth") {
        cq2.innerHTML--;
        eth--;
    }
    if(coin == "usd") {
        cq3.innerHTML--;
        usd--;
    }
    var totalbtc = btc * btcu;
    var totaleth = eth * ethu;
    var totalusd = usd * usdt;

    total.innerHTML = totalbtc + totaleth + totalusd + "  USDT";
}

