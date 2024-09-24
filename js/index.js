// history and donation button toggle

const donationHistoryButton = document.getElementById('donate-history-btn');
const donationButton = document.getElementById('donation-btn');

donationHistoryButton.addEventListener('click', function () {
    handleToggleButton(donationHistoryButton, donationButton, 'donation-history-list', 'donation-cards-container')
})

donationButton.addEventListener('click', function () {
    handleToggleButton(donationButton, donationHistoryButton, 'donation-cards-container', 'donation-history-list')
})

// donation amount 

const AllDonateAmountButton = document.querySelectorAll('.donate-amount-btn');
// console.log(donateAmountButton);

for (const donateAmountButton of AllDonateAmountButton) {
    donateAmountButton.addEventListener('click', function (e) {
        const donateAmount = e.target.parentNode.children[0];
        const donateAmountNumber = parseFloat(donateAmount.value);

        if (donateAmountNumber <= 0 || isNaN(donateAmountNumber) || donateAmountNumber === "") {
            alert('Invalid donation amount or insufficient donation amount');
            clearInputField(donateAmount)
            return;
        }

        const availableBalance = document.getElementById('available-balance');

        const availableBalanceAmount = convertValueIntoNumber(availableBalance);

        if (availableBalanceAmount < donateAmountNumber) {
            alert('Insufficient amount in your account');
            clearInputField(donateAmount)
            return;
        }

        const currentBalance = availableBalanceAmount - donateAmountNumber;
        availableBalance.innerText = currentBalance;

        const totalDonateAmount = e.target.parentNode.parentNode.children[0].children[1].children[0];
        const totalDonateAmountNumber = convertValueIntoNumber(totalDonateAmount);

        // modal function 
        my_modal_1.showModal();


        totalDonateAmount.innerText = totalDonateAmountNumber + donateAmountNumber;
        clearInputField(donateAmount)

        // donation history
        const locationTitle = e.target.parentNode.parentNode.children[1].innerText;
        handleDonationHistory('donation-history-list', donateAmountNumber, locationTitle)



    })
}





