"use client";

import React, { useEffect, useRef, memo } from "react";

const TradingViewWidget: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          [
            "Apple",
            "AAPL|1D"
          ],
          [
            "Google",
            "GOOGL|1D"
          ],
          [
            "Microsoft",
            "MSFT|1D"
          ],
          [
            "COINBASE:SOLUSD|1D"
          ]
        ],
        "chartOnly": false,
        "width": 550,
        "height": 400,
        "locale": "en",
        "colorTheme": "light",
        "autosize": false,
        "showVolume": false,
        "showMA": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "fontSize": "10",
        "noTimeScale": false,
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "chartType": "area",
        "maLineColor": "#2962FF",
        "maLineWidth": 1,
        "maLength": 9,
        "lineWidth": 2,
        "lineType": 0,
        "dateRanges": [
          "1d|1",
          "1m|30",
          "3m|60",
          "12m|1D",
          "60m|1W",
          "all|1M"
        ]
      }`;

    // Check if container.current is defined before appending script
    if (container.current) {
      container.current.appendChild(script);
    }
  }); // Empty dependency array to ensure the effect runs only once after mount

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className={"text-red-500"}>
            Track all markets on TradingView
          </span>
        </a>
      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
