const Form = document.querySelector('#GetInTouch');
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      // everything except Firefox
      && (e.code === 22
        // Firefox
        || e.code === 1014
        // test name field too, because code might not be present
        // everything except Firefox
        || e.name === 'QuotaExceededError'
        // Firefox
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      // acknowledge QuotaExceededError only if there's something already stored
      && storage
      && storage.length !== 0
    );
  }
}

function setData() {
  const StoredForm = JSON.parse(localStorage.getItem('formData'));
  Form.Full_name.value = StoredForm.name;
  Form.email.value = StoredForm.email;
  Form.msg.value = StoredForm.message;
}

function populateStorage() {
  localStorage.setItem('formData', JSON.stringify(
    {
      name: Form.Full_name.value,
      email: Form.email.value,
      message: Form.msg.value,
    },
  ));
  setData();
}

function updateStorage() {
  if (storageAvailable('localStorage')) {
    if (!localStorage.getItem('formData')) {
      populateStorage();
    } else {
      setData();
    }
  }
}

function UpdateForm() {
  Form.Full_name.onchange = populateStorage;
  Form.email.onchange = populateStorage;
  Form.msg.onchange = populateStorage;
}

export { UpdateForm, updateStorage };