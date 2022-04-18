const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
const fsm = require("./../fsm");

// URL: /:ticker/:from/:to
router.get("/custom/:ticker/:fromDate/:toDate", (req, res) => {
    const { ticker, fromDate, toDate } = req.params;
    if (fromDate.length === 10 && toDate.length === 10) {
        return res.json({
            status: true,
            message: "Successfull",
            data: fsm.customInterval(ticker,fromDate,toDate)
        });
    } else {
        return res.json({
            status: false,
            message: "Date invalid"
        })
    }
})

// URL: /:ticker/:interval
router.get("/general/:ticker/:interval", (req, res) => {
    const { ticker, interval } = req.params;
    return res.json({
        status: true,
        message: "Successfull",
        data: fsm.commonInterval(ticker,interval)
    });
})

// URL: /:ticker/:interval
router.get("/general/:ticker", (req, res) => {
    const { ticker } = req.params;
    return res.json({
        status: true,
        message: "Successfull",
        data: fsm.commonInterval(ticker,"all")
    });
})

// URL: /:ticker/:interval
router.get("/tickers", (req, res) => {
    return res.json({
        status: true,
        message: "Successfull",
        data: fsm.ticker()
    });
})

// URL: /:ticker/details
router.get("/:ticker/details", (req, res) => {
    axios.get("https://cloud.iexapis.com/stable/stock/"+req.params.ticker+"/compant")
    .then(res => {
        return res.json({
            status: true,
            message: "Comapny details",
            data: res.data
        })
    })
    .catch(err => {
        console.log(err);
        return res.json({
            status: false,
            message: err.message || "Internal server error"
        })
    })
})

module.exports = router;