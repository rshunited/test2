const words = ['banana', 'elephant', 'computer', 'scramble', 'guitar', 'language', 'chocolate', 'butterfly'];
let currentWord = '';
let scrambled = '';

const scrambledWordEl = document.getElementById('scrambled-word');
const guessInput = document.getElementById('guess-input');
const messageEl = document.getElementById('message');
const checkBtn = document.getElementById('check-btn');
const newWordBtn = document.getElementById('new-word-btn');

function shuffleWord(word) {
  return word.split('').sort(() => Math.random() - 0.5).join('');
}

function setNewWord() {
  guessInput.value = '';
  messageEl.textContent = '';
  currentWord = words[Math.floor(Math.random() * words.length)];
  scrambled = shuffleWord(currentWord);
  // Ensure the scrambled word is not the same as the original
  while (scrambled === currentWord) {
    scrambled = shuffleWord(currentWord);
  }
  scrambledWordEl.textContent = scrambled;
}

checkBtn.addEventListener('click', () => {
  const guess = guessInput.value.trim().toLowerCase();
  if (guess === currentWord) {
    messageEl.textContent = '🎉 Correct!';
    messageEl.style.color = 'green';
  } else {
    messageEl.textContent = '❌ Try again!';
    messageEl.style.color = 'red';
  }
});

newWordBtn.addEventListener('click', setNewWord);

// Start with a word
setNewWord();
