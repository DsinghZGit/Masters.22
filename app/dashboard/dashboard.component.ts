import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
 stockData: any;
  stockSymbol = 'RELIANCE.BSE';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchStockData();
  }

 
  fetchStockData() {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.stockSymbol}&outputsize=full&apikey=${environment.alphaVantageApiKey}`;

    this.http.get(url).subscribe(
      (data) => {
        // Parse and store stock data from the response
        const timeSeries = data['Time Series (Daily)'];
        const latestDate = Object.keys(timeSeries)[0]; // Get the latest date
        const latestData = timeSeries[latestDate];
        this.stockData = {
          symbol: this.stockSymbol,
          latestPrice: latestData['4. close'], // Latest close price
          change: (latestData['4. close'] - latestData['1. open']).toFixed(2), // Change from open to close
          changePercent: ((latestData['4. close'] - latestData['1. open']) / latestData['1. open'] * 100).toFixed(2), // Percentage change
          latestTime: latestDate,
        };
        console.log('Stock Data:', this.stockData); // Log stock data for debugging
      },
      (error) => {
        console.error('Error fetching stock data', error);
      }
    );
  }


  changeStockSymbol(symbol: string) {
    this.stockSymbol = symbol;
    this.fetchStockData();
  }

}
