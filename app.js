const themeToggleBtn = document.querySelector('.js-theme-toggle');

themeToggleBtn.addEventListener('click', function() 
{
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }
});

const tabButtons = document.querySelectorAll('.js-tab-btn');
const formContents = document.querySelectorAll('.form-content');

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        
        tabButtons.forEach(btn => btn.classList.remove('is-active'));
        formContents.forEach(form => form.classList.remove('is-active'));
        
        this.classList.add('is-active');
        
        const targetFormId = this.getAttribute('data-target');
        document.getElementById(targetFormId).classList.add('is-active');
    });
});


const calcRoiBtn = document.querySelector('.js-calc-roi');
const resultDisplay = document.querySelector('.js-result-display');

calcRoiBtn.addEventListener('click', function() {
    const investAmount = parseFloat(document.querySelector('.js-roi-invest').value);
    const returnAmount = parseFloat(document.querySelector('.js-roi-return').value);

   
    if (isNaN(investAmount) || isNaN(returnAmount)) {
        resultDisplay.textContent = "Please enter valid numbers in both fields.";
        resultDisplay.className = 'result-text js-result-display'; 
    }

    const profitOrLoss = returnAmount - investAmount;
    const roiPercentage = ((profitOrLoss / investAmount) * 100).toFixed(2);

    if (profitOrLoss >= 0) {
        resultDisplay.textContent = `Excellent! You made a profit of Rs. ${profitOrLoss}. Your ROI is ${roiPercentage}%.`;
        resultDisplay.className = 'result-text js-result-display is-profitable';
    } else {
        resultDisplay.textContent = `You incurred a loss of Rs. ${Math.abs(profitOrLoss)}. Your ROI is ${roiPercentage}%.`;
        resultDisplay.className = 'result-text js-result-display is-loss';
    }
});


const calcCryptoBtn = document.querySelector('.js-calc-crypto');

calcCryptoBtn.addEventListener('click', function() {
    const buyPrice = parseFloat(document.querySelector('.js-crypto-buy').value);
    const currentPrice = parseFloat(document.querySelector('.js-crypto-current').value);

    if (isNaN(buyPrice) || isNaN(currentPrice)) {
        resultDisplay.textContent = "Please enter valid prices for your Crypto assets.";
        resultDisplay.className = 'result-text js-result-display';
        return;
    }

    const priceDifference = currentPrice - buyPrice;
    const returnPercentage = ((priceDifference / buyPrice) * 100).toFixed(2);

    if (priceDifference >= 0) {
        resultDisplay.textContent = `Your Crypto asset is UP by ${returnPercentage}%. Profit per coin: $${priceDifference}.`;
        resultDisplay.className = 'result-text js-result-display is-profitable';
    } else {
        resultDisplay.textContent = `Your Crypto asset is DOWN by ${returnPercentage}%. Loss per coin: $${Math.abs(priceDifference)}.`;
        resultDisplay.className = 'result-text js-result-display is-loss';
    }
});

const calcTaxBtn = document.querySelector('.js-calc-tax');

calcTaxBtn.addEventListener('click', function() {
    const revenue = parseFloat(document.querySelector('.js-tax-revenue').value);
    const taxRate = parseFloat(document.querySelector('.js-tax-rate').value);

    if (isNaN(revenue) || isNaN(taxRate)) {
        resultDisplay.textContent = "Please enter valid numbers for Revenue and Tax Rate.";
        resultDisplay.className = 'result-text js-result-display';
        return;
    }

    const taxAmount = (revenue * taxRate) / 100;
    const netIncome = revenue - taxAmount;

    resultDisplay.textContent = `Total Tax Deducted: Rs. ${taxAmount.toFixed(2)}. Your Net Income after tax will be Rs. ${netIncome.toFixed(2)}.`;
    resultDisplay.className = 'result-text js-result-display is-profitable';
});