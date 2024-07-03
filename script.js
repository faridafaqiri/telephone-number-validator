document.getElementById('check-btn').addEventListener('click', () => {
  const userInput = document.getElementById('user-input').value.trim();
  const resultsDiv = document.getElementById('results-div');

  if (userInput === '') {
    resultsDiv.textContent = 'Please provide a phone number';
    return;
  }

  const validPatterns = [
    /^1?\s?\d{3}[-\s]?\d{3}[-\s]?\d{4}$/,
    /^1?\s?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/,
    /^1?\s?\(\d{3}\)\d{3}[-\s]?\d{4}$/,
    /^1?\(\d{3}\)\d{3}[-\s]?\d{4}$/,
    /^\d{10}$/
  ];

  const isValid = validPatterns.some(pattern => pattern.test(userInput));

  if (isValid) {
    resultsDiv.textContent = `Valid US number: ${userInput}`;
  } else {
    resultsDiv.textContent = `Invalid US number: ${userInput}`;
  }
});

document.getElementById('clear-btn').addEventListener('click', () => {
  document.getElementById('user-input').value = '';
  document.getElementById('results-div').textContent = '';
});
