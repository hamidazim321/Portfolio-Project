const frm = document.querySelector('#GetInTouch');
function CheckEmail() {
  const input = frm.elements.email;
  if (!(input.value.trim() === input.value.toLowerCase().trim())) {
    return false;
  }
  return true;
}

function ValidateForm() {
  frm.addEventListener('submit', (event) => {
    event.preventDefault();
    const output = frm.querySelector('#email-msg');
    const ValidEmail = CheckEmail();
    if (!ValidEmail) {
      output.textContent = 'Email must be all lower case';
      output.style.color = 'red';
    } else {
      frm.submit();
    }
  });
}

export default ValidateForm;
