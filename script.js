document.getElementById('check-btn').addEventListener('click', function() {
  const userInput = document.getElementById('user-input').value.trim();
  const resultsDiv = document.getElementById('results-div');

  if (userInput === '') {
    alert('Please provide a phone number');
    return;
}

const validPatterns = [
    /^1?\s?\d{3}[-\s]?\d{3}[-\s]?\d{4}$/,
    /^1?\s?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/,
    /^1?\s?\(\d{3}\)\d{3}[-\s]?\d{4}$/,
    /^1?\(\d{3}\)\d{3}[-\s]?\d{4}$/,
    /^\d{10}$/
];

let isValid = false;
  for (const pattern of validPatterns) {
      if (pattern.test(userInput)) {
          isValid = true;
          break;
      }
  }

  if (isValid) {
      resultsDiv.textContent = `Valid US number: ${userInput}`;
  } else {
      resultsDiv.textContent = `Invalid US number: ${userInput}`;
  }
});

