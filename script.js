document.addEventListener('DOMContentLoaded', () => {
  const checkBtn = document.getElementById('check-btn');
  const clearBtn = document.getElementById('clear-btn');
  const userInput = document.getElementById('user-input');
  const resultsDiv = document.getElementById('results-div');

  checkBtn.addEventListener('click', () => {
    const userInputValue = userInput.value.trim();

    if (userInputValue === '') {
      resultsDiv.textContent = 'Please provide a phone number';
      return;
    }

    const validPatterns = [
      /^1?\s?\d{3}[-\s]?\d{3}[-\s]?\d{4}$/,
      /^1?\s?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/,
      /^1?\s?\(\d{3}\)\d{3}[-\s]?\d{4}$/,
      /^1?\(\d{3}\)\d{3}[-\s]?\d{4}$/,
      /^\d{10}$/,
    ];

    const isValid = validPatterns.some((pattern) => pattern.test(userInputValue));

    if (isValid) {
      resultsDiv.textContent = `Valid US number: ${userInputValue}`;
    } else {
      resultsDiv.textContent = `Invalid US number: ${userInputValue}`;
    }
  });

  clearBtn.addEventListener('click', () => {
    userInput.value = '';
    resultsDiv.textContent = '';
  });
});
