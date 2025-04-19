let walletAddress = "";
document.getElementById("connectWallet").onclick = async () => {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    walletAddress = accounts[0];
    document.getElementById("walletAddress").innerText = `Carteira conectada: ${walletAddress}`;
    document.getElementById("mintToken").disabled = false;
  } else {
    alert("MetaMask não encontrada");
  }
};
document.getElementById("mintToken").onclick = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract("0xENDERECO_DO_CONTRATO", ["function mint() public"], signer);
  await contract.mint();
  alert("Token mintado com sucesso!");
};
let contador = 0;
function atualizarContador() {
  if (contador < 12430) {
    contador += Math.floor(Math.random() * 50);
    document.getElementById("counter").innerText = `${contador} m² regenerados`;
    requestAnimationFrame(atualizarContador);
  }
}
atualizarContador();
document.getElementById("langToggle").onclick = () => {
  alert("Modo multilíngue em breve disponível!");
};
