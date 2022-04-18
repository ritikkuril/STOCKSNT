import './App.css';
import SearchBox from './components/SearchBox';
import GraphBox from './components/GraphBox';
import { useState } from 'react';
import axios from "axios";
import HistoryBox from './components/HistoryBox';

function App() {

  const history = localStorage.getItem("history");
  var data;
  if (history) {
    data = JSON.parse(history);
  } else {
    data = {}
  }
  const [tickerArray, setTickerArray] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [graphData, setGraphData] = useState([]);
  const [historyData, setHistoryData] = useState(data || []);

  if (!fetched) {
    axios.get("/tickers")
    .then(res => {
      setTickerArray(res.data.data);
      setFetched(true)
    })
    .catch(err => {
        alert(err.message);
        console.log(err);
    }) 
  }
  return (
    <center>
    <div className="container main-body">
      <div className="row">
        <div className="col-lg-4 block block-1">
          <div className="content-block">
            <SearchBox tickerArray={tickerArray} setGraphData={setGraphData} setHistoryData={setHistoryData} historyData={historyData} />
          </div>
        </div>
        <div className="col-lg-8 block block-2">
          <div className="content-block">
            <GraphBox graphData={graphData} />
          </div>
        </div>
        <div className="col-lg-12 block block-3">
          <div className="content-block">
            <HistoryBox historyData={historyData} />
          </div>
        </div>
      </div>
    </div>
    </center>
  );
}

export default App;
