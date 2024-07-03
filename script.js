document.getElementById('check-btn').addEventListener('click', function() {
  const userInput = document.getElementById('user-input').value.trim();
  const resultsDiv = document.getElementById('results-div');

  if (isValid) {
    resultsDiv.textContent = `Valid US number: ${userInput}`;
  } else {
    resultsDiv.textContent = `Invalid US number: ${userInput}`;
  }
});
