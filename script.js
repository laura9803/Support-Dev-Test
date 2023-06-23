const industrySelect = document.getElementById('industry');
const dealSizeInput = document.getElementById('deal-size');
const dealSizeValue = document.getElementById('deal-size-value');
const prospectsInput = document.getElementById('prospects');
const prospectsValue = document.getElementById('prospects-value');
const closeRatioInput = document.getElementById('close-ratio');
const closeRatioValue = document.getElementById('close-ratio-value');
const totalPerYearLabel = document.getElementById('total-per-year');

function updateDealSize() {
  const value = dealSizeInput.value;
  dealSizeValue.textContent = formatCurrency(value);
  dealSizeInput.style.setProperty('--deal-size-value', value);

  const totalPerYear = calculateTotalPerYear();
  totalPerYearLabel.textContent = totalPerYear ? formatCurrency(totalPerYear) + '/YEAR' : 'N/A';
}

function updateProspects() {
  const value = prospectsInput.value;
  prospectsValue.textContent = value;
  prospectsInput.style.setProperty('--prospects-value', value);

  const totalPerYear = calculateTotalPerYear();
  totalPerYearLabel.textContent = totalPerYear ? formatCurrency(totalPerYear) + '/YEAR' : 'N/A';
}

function updateCloseRatio() {
  const value = closeRatioInput.value;
  closeRatioValue.textContent = value + '%';
  closeRatioInput.style.setProperty('--close-ratio-value', value);

  const totalPerYear = calculateTotalPerYear();
  totalPerYearLabel.textContent = totalPerYear ? formatCurrency(totalPerYear) + '/YEAR' : 'N/A';
}

function formatCurrency(value) {
  return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function calculateTotalPerYear() {
    const dealSize = parseFloat(dealSizeValue.textContent.replace(/\$/g, '').replace(/,/g, ''));
    const prospects = parseInt(prospectsValue.textContent);
    const closeRatio = parseFloat(closeRatioValue.textContent.replace(/%/g, '')) / 100;
  
    if (isNaN(dealSize) || isNaN(prospects) || isNaN(closeRatio)) {
      return NaN;
    }
  
    const totalPerMonth = dealSize * prospects * closeRatio;
    const totalPerYear = totalPerMonth * 12;
  
    const maxTotalPerYear = 10000000;
    const limitedTotalPerYear = Math.min(totalPerYear, maxTotalPerYear);
  
    return limitedTotalPerYear;
  }

industrySelect.addEventListener('change', () => {
  const selectedIndustry = industrySelect.value;
  console.log('Selected industry:', selectedIndustry);
});

dealSizeInput.addEventListener('input', updateDealSize);
prospectsInput.addEventListener('input', updateProspects);
closeRatioInput.addEventListener('input', updateCloseRatio);

updateDealSize();
updateProspects();
updateCloseRatio();


const divSelector1 = document.querySelector('.divSelectorJS1');
const divSelector2 = document.querySelector('.divSelectorJS2');

divSelector1.onclick = function() {  
    const div_main = document.querySelector('.divSelectorJS1');
    const div_second = document.querySelector('.divSelectorJS2');
    div_main.classList.add('divYellow')
    div_second.classList.remove('divYellow')
}

divSelector2.onclick = function() {  
    const div_main = document.querySelector('.divSelectorJS2');
    const div_second = document.querySelector('.divSelectorJS1');
    div_main.classList.add('divYellow')
    div_second.classList.remove('divYellow')
}

