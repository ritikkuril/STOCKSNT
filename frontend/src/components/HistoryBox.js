import React, { Component } from "react";

class HistoryBox extends Component {
	constructor() {
		super();
		this.state = {};
	}
    
    render() {
		return (
			<div className="history-box">
				<h3>Your previous searches</h3>
                <table>
                    <tr>
                        <th className="data-cell">Ticker</th>
                        <th className="data-cell">Open</th>
                        <th className="data-cell">Close</th>
                        <th className="data-cell">High</th>
                        <th className="data-cell">Low</th>
                        <th className="data-cell">Date</th>
                    </tr>
                    {   this.props.historyData.length && this.props.historyData.reverse().map(row => {
                        return (
                            <tr>
                                <td width={"15%"}>{row.ticker}</td>
                                <td width={"15%"}>{row.open}</td>
                                <td width={"15%"}>{row.close}</td>
                                <td width={"15%"}>{row.high}</td>
                                <td width={"15%"}>{row.low}</td>
                                <td width={"15%"}>{row.date}</td>
                            </tr>
                        )
                    })}
                </table>
			</div>
		);
	}
}

export default HistoryBox;
