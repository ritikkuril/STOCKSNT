const reader = require("./../reader")

const OHLC = (data) => {
    const { symbol, open, high, close, low, volume, date } = data;
    return {
        symbol,
        open,
        high,
        low,
        close,
        volume,
        date: date
    }
}

exports.customInterval = (ticker, from, to) => {
    const data = reader();
    const ds = {}
    for (let key in data) {
        if (ds[data[key].symbol]){
            ds[data[key].symbol].push(OHLC(data[key]))
        } else {
            ds[data[key].symbol] = [OHLC(data[key])];
        }
    }
    const t = ds[ticker].sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
    });
    const d = [];
    for (let key in t) {
        if (t[key].date >= from && t[key].date <= to) {
            d.push(t[key]);
        }
    }
    return d;
};

exports.commonInterval = (ticker, timeInterval) => {
    const data = reader();
    const ds = {};
    for (let key in data) {
        if (ds[data[key].symbol]){
            ds[data[key].symbol].push(OHLC(data[key]))
        } else {
            ds[data[key].symbol] = [OHLC(data[key])];
        }
    }
    if (timeInterval === "7days"){
        const t = ds[ticker].sort(function(a,b){
            return new Date(b.date) - new Date(a.date);
        });
        return t.slice(0,7);
    } else if (timeInterval === "28days") {
        const t = ds[ticker].sort(function(a,b){
            return new Date(b.date) - new Date(a.date);
        });
        return t.slice(0,28);
    } else if (timeInterval === "all") {
        const t = ds[ticker].sort(function(a,b){
            return new Date(b.date) - new Date(a.date);
        });
        return t;
    } else {
        return "Invalid Timeinterval"
    }
};

exports.ticker = () => {
    const data = reader();
    const ds = [];
    for (let key in data) {
        if (ds.findIndex(d => data[key].symbol === d) >= 0){
            continue;
        } else {
            ds.push(data[key].symbol);
        }
    }
    return ds;
}