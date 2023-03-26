//your JS code here. If required.
function submitForm() {
  const ageInput = document.getElementById('age');
  const nameInput = document.getElementById('name');

  if (!ageInput.value || !nameInput.value) {
    alert('Please fill out all fields.');
    return;
  }

  const age = Number(ageInput.value);
  const name = nameInput.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve({ age, name });
      } else {
        reject({ age, name });
      }
    }, 4000);
  });

  promise
    .then(({ age, name }) => {
      alert(`Welcome, ${name}. You can vote.`);
      return age;
    })
    .then((age) => {
      return { age };
    })
    .then((data) => {
      alert(`Final object: ${JSON.stringify(data)}`);
    })
    .catch(({ age, name }) => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
}

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  submitForm();
});
