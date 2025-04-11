<!-- UBQT_B Frontend UI (Tailwind + HTML + JS) -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UBQT_B Enterprise Agent</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-900 text-white min-h-screen p-6">
  <div class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-4 text-center">UBQT_B Enterprise Dashboard</h1>

    <!-- Stake Form -->
    <div class="bg-gray-800 p-4 rounded-xl shadow mb-6">
      <h2 class="text-xl font-semibold mb-2">Stake UBQT_B</h2>
      <input id="stakeWallet" type="text" placeholder="Wallet Address" class="w-full p-2 mb-2 rounded bg-gray-700">
      <input id="stakeAmount" type="number" placeholder="Amount" class="w-full p-2 mb-2 rounded bg-gray-700">
      <button onclick="stake()" class="w-full bg-green-600 hover:bg-green-700 p-2 rounded font-bold">Stake</button>
      <p id="stakeResult" class="mt-2 text-sm"></p>
    </div>

    <!-- Unstake Form -->
    <div class="bg-gray-800 p-4 rounded-xl shadow mb-6">
      <h2 class="text-xl font-semibold mb-2">Unstake UBQT_B</h2>
      <input id="unstakeWallet" type="text" placeholder="Wallet Address" class="w-full p-2 mb-2 rounded bg-gray-700">
      <button onclick="unstake()" class="w-full bg-yellow-500 hover:bg-yellow-600 p-2 rounded font-bold">Unstake</button>
      <p id="unstakeResult" class="mt-2 text-sm"></p>
    </div>

    <!-- Ask AI -->
    <div class="bg-gray-800 p-4 rounded-xl shadow mb-6">
      <h2 class="text-xl font-semibold mb-2">Ask AI (Gemini)</h2>
      <textarea id="aiQuestion" rows="3" placeholder="Type your question here..." class="w-full p-2 mb-2 rounded bg-gray-700"></textarea>
      <button onclick="askAI()" class="w-full bg-blue-500 hover:bg-blue-600 p-2 rounded font-bold">Ask</button>
      <p id="aiAnswer" class="mt-2 text-sm"></p>
    </div>
  </div>

  <script>
    async function stake() {
      const wallet = document.getElementById('stakeWallet').value;
      const amount = document.getElementById('stakeAmount').value;
      const res = await fetch('/stake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wallet, amount })
      });
      const data = await res.json();
      document.getElementById('stakeResult').textContent = JSON.stringify(data);
    }

    async function unstake() {
      const wallet = document.getElementById('unstakeWallet').value;
      const res = await fetch('/unstake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wallet })
      });
      const data = await res.json();
      document.getElementById('unstakeResult').textContent = JSON.stringify(data);
    }

    async function askAI() {
      const question = document.getElementById('aiQuestion').value;
      const res = await fetch('/ask-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      });
      const data = await res.json();
      document.getElementById('aiAnswer').textContent = data.answer;
    }
  </script>
</body>
</html>
