import axios from "axios";
import React, { Component } from "react";

class SearchBox extends Component {
	constructor() {
		super();
		this.state = {
			ticker: "",
			fromDate: "",
			toDate: "",
			found: false,
			data: {
				open: 0,
				close: 0,
				high: 0,
				low: 0,
			},
		};
	}

	tickerOnChangeHandler = (e) => {
		this.setState({ ticker: e.target.value.toUpperCase() });
	};
	fromDateChangeHandler = (e) => {
        this.setState({ fromDate: e.target.value });
	};
	toDateChangeHandler = (e) => {
        this.setState({ toDate: e.target.value });
	};
    oneMonth = (e) => {
        e.preventDefault();
		if (this.props.tickerArray.includes(this.state.ticker)) {
			axios
				.get("/general/" + this.state.ticker + "/28days")
				.then((res) => {
					this.setState({
						found: true,
						data: res.data.data[0],
					});
					const graphData = {
						labels: [],
						datasets: [],
					};
					const close = [];
					const open = [];
					const high = [];
					const low = [];
					for (var key in res.data.data) {
						graphData.labels.push(res.data.data[key].date);
						close.push(res.data.data[key].close);
						open.push(res.data.data[key].open);
						high.push(res.data.data[key].high);
						low.push(res.data.data[key].low);
					}
					graphData.datasets.push({ data: close, label: "Close" });
					// graphData.datasets.push({data: open, label: "Open"});
					// graphData.datasets.push({data: high, label: "High"});
					// graphData.datasets.push({data: low, label: "Low"});
					const history = localStorage.getItem("history");
					if (history) {
						const tempHistory = JSON.parse(history);
						tempHistory.push({
							...this.state.data,
							ticker: this.state.ticker,
							date: new Date().toISOString(),
						});
						localStorage.setItem(
							"history",
							JSON.stringify(tempHistory)
						);
						this.props.setHistoryData(tempHistory);
					} else {
						const tempHistory = [];
						tempHistory.push({
							...this.state.data,
							ticker: this.state.ticker,
							date: new Date().toISOString(),
						});
						localStorage.setItem(
							"history",
							JSON.stringify(tempHistory)
						);
						this.props.setHistoryData(tempHistory);
					}
					this.props.setGraphData(graphData);
				})
				.catch((err) => {
					alert(err.message);
				});
		} else {
			alert("Ticker not found");
		}
    }
    oneWeek = (e) => {
        e.preventDefault();
		if (this.props.tickerArray.includes(this.state.ticker)) {
			axios
				.get("/general/" + this.state.ticker + "/7days")
				.then((res) => {
					this.setState({
						found: true,
						data: res.data.data[0],
					});
					const graphData = {
						labels: [],
						datasets: [],
					};
					const close = [];
					const open = [];
					const high = [];
					const low = [];
					for (var key in res.data.data) {
						graphData.labels.push(res.data.data[key].date);
						close.push(res.data.data[key].close);
						open.push(res.data.data[key].open);
						high.push(res.data.data[key].high);
						low.push(res.data.data[key].low);
					}
					graphData.datasets.push({ data: close, label: "Close" });
					// graphData.datasets.push({data: open, label: "Open"});
					// graphData.datasets.push({data: high, label: "High"});
					// graphData.datasets.push({data: low, label: "Low"});
					const history = localStorage.getItem("history");
					if (history) {
						const tempHistory = JSON.parse(history);
						tempHistory.push({
							...this.state.data,
							ticker: this.state.ticker,
							date: new Date().toISOString(),
						});
						localStorage.setItem(
							"history",
							JSON.stringify(tempHistory)
						);
						this.props.setHistoryData(tempHistory);
					} else {
						const tempHistory = [];
						tempHistory.push({
							...this.state.data,
							ticker: this.state.ticker,
							date: new Date().toISOString(),
						});
						localStorage.setItem(
							"history",
							JSON.stringify(tempHistory)
						);
						this.props.setHistoryData(tempHistory);
					}
					this.props.setGraphData(graphData);
				})
				.catch((err) => {
					alert(err.message);
				});
		} else {
			alert("Ticker not found");
		}
    }
	onSubmitHandler = (e) => {
		e.preventDefault();
		if (this.props.tickerArray.includes(this.state.ticker)) {
			axios
				.get("/general/" + this.state.ticker + "/7days")
				.then((res) => {
					this.setState({
						found: true,
						data: res.data.data[0],
					});
					const graphData = {
						labels: [],
						datasets: [],
					};
					const close = [];
					const open = [];
					const high = [];
					const low = [];
					for (var key in res.data.data) {
						graphData.labels.push(res.data.data[key].date);
						close.push(res.data.data[key].close);
						open.push(res.data.data[key].open);
						high.push(res.data.data[key].high);
						low.push(res.data.data[key].low);
					}
					graphData.datasets.push({ data: close, label: "Close" });
					// graphData.datasets.push({data: open, label: "Open"});
					// graphData.datasets.push({data: high, label: "High"});
					// graphData.datasets.push({data: low, label: "Low"});
					const history = localStorage.getItem("history");
					if (history) {
						const tempHistory = JSON.parse(history);
						tempHistory.push({
							...this.state.data,
							ticker: this.state.ticker,
							date: new Date().toISOString(),
						});
						localStorage.setItem(
							"history",
							JSON.stringify(tempHistory)
						);
						this.props.setHistoryData(tempHistory);
					} else {
						const tempHistory = [];
						tempHistory.push({
							...this.state.data,
							ticker: this.state.ticker,
							date: new Date().toISOString(),
						});
						localStorage.setItem(
							"history",
							JSON.stringify(tempHistory)
						);
						this.props.setHistoryData(tempHistory);
					}
					this.props.setGraphData(graphData);
				})
				.catch((err) => {
					alert(err.message);
				});
		} else {
			alert("Ticker not found");
		}
	};
	render() {
		return (
			<div className="search-box">
				Search Here <br />
				<div className="cmp-spacebtw">
					<label>Ticker</label>
					<input
						type="text"
						id="tickerText"
						value={this.state.ticker}
						placeholder="Ticker (example: AAPL)"
						onChange={(e) => this.tickerOnChangeHandler(e)}
					></input>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "flex-end",
					}}
				>
					<div
						className="btn btn-primary"
						style={{ marginLeft: "20px" }}
                        onClick={(e) => {this.oneWeek(e)}}
					>
						1 Week
					</div>
					<div
						className="btn btn-primary"
						style={{ marginLeft: "20px" }}
                        onClick={(e) => {this.oneMonth(e)}}
					>
						1 Month
					</div>
				</div>
				<div className="cmp-spacebtw">
					<label>From</label>
					<input
						type="date"
						id="fromDate"
						value={this.state.ticker}
						placeholder="From"
						// min="2021-01-01"
						// max="2021-08-31"
						onChange={(e) => this.fromDateChangeHandler(e)}
					></input>
				</div>
				<div className="cmp-spacebtw">
					<label>To</label>
					<input
						type="date"
						id="toDate"
						// min="2021-01-01"
						// max="2021-08-31"
						value={this.state.ticker}
						placeholder="To"
						onChange={(e) => this.toDateChangeHandler(e)}
					></input>
				</div>
				<div
					className="btn btn-warning"
					style={{ marginTop: "10px" }}
					onClick={(e) => {
						this.onSubmitHandler(e);
					}}
				>
					Search
				</div>
				{this.state.found ? (
					<div className="price">
						<h3>Last trading day info</h3>
						<div
							style={{
								flexDirection: "row",
								display: "flex",
								justifyContent: "space-around",
							}}
						>
							<p style={{ fontSize: "20px" }}>Price</p>
							<div>{this.state.data.close}</div>
						</div>
						<div
							style={{
								flexDirection: "row",
								display: "flex",
								justifyContent: "space-around",
							}}
						>
							<p style={{ fontSize: "20px" }}>High</p>
							<div>{this.state.data.high}</div>
						</div>
						<div
							style={{
								flexDirection: "row",
								display: "flex",
								justifyContent: "space-around",
							}}
						>
							<p style={{ fontSize: "20px" }}>Low</p>
							<div>{this.state.data.low}</div>
						</div>
						<div
							style={{
								flexDirection: "row",
								display: "flex",
								justifyContent: "space-around",
							}}
						>
							<p style={{ fontSize: "20px" }}>Volume</p>
							<div>{this.state.data.volume}</div>
						</div>
					</div>
				) : (
					<></>
				)}
			</div>
		);
	}
}

export default SearchBox;
