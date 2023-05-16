const { BinanceBase } = require("./binance-base");

class BinanceClientBusd extends BinanceBase {
  constructor({
    useAggTrades = true,
    requestSnapshot = true,
    socketBatchSize = 200,
    socketThrottleMs = 1000,
    restThrottleMs = 1000,
    watcherMs,
    l2updateSpeed,
    l2snapshotSpeed,
  } = {}) {
    super({
      name: "Binancebusd",
      wssPath: "wss://stream.binance.com:9443/stream",
      restL2SnapshotPath: "https://api.binance.com/api/v1/depth",
      useAggTrades,
      requestSnapshot,
      socketBatchSize,
      socketThrottleMs,
      restThrottleMs,
      watcherMs,
      l2updateSpeed,
      l2snapshotSpeed,
    });
  }
}

module.exports = BinanceClientBusd;
