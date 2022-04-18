import React, { Component } from "react";
import { Bar, Line, Pie } from 'react-chartjs-2'

class GraphBox extends Component {
    render() {
        return (
            <div className="graph-box">
                Graph Box
                <Line
                    data={this.props.graphData}
                    options={{
                    title: {
                        display: "Stocks",
                        text: 'Stock prices',
                        fontSize: 25
                    },
                    legend: {
                        display: false,
                    }
                    }}
                />
            </div>
        )
    }
}

export default GraphBox;