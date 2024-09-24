
// toggle button function 
function handleToggleButton(historyBtn, donationBtn, hisotryId, cardsId) {
    historyBtn.classList.add('bg-primary', 'text-secondary', 'font-semibold', 'border-0');
    historyBtn.classList.remove('text-accent', 'font-medium', 'border', 'border-gray-400');

    donationBtn.classList.add('text-accent', 'font-medium', 'border', 'border-gray-400');
    donationBtn.classList.remove('bg-primary', 'text-secondary', 'font-semibold', 'border-0');

    document.getElementById(hisotryId).classList.remove('hidden');
    document.getElementById(cardsId).classList.add('hidden');
}

// donation history list function

function handleDonationHistory(historyListId, donatationAmount, title) {
    const donationHistoryList = document.getElementById(historyListId);
    const HistoryDiv = document.createElement('div');
    HistoryDiv.classList.add('border', 'border-gray-300', 'p-4', 'md:p-8', 'rounded-2xl', 'mb-6')

    HistoryDiv.innerHTML = `
            <h2 class="text-xl font-bold  mb-4 text-secondary">${donatationAmount} Taka ${title}
            </h2>
            <p>Date: ${new Date()}</p>
    
    `
    donationHistoryList.appendChild(HistoryDiv);
}