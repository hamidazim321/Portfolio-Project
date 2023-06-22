let frm = document.querySelector('#GetInTouch')
function CheckEmail(){
  let input = frm.elements['email']
  if (!(input.value.trim() === input.value.toLowerCase().trim())){
    return false
    
  }
  return true
}

function ValidateForm(){
  frm.addEventListener('submit',(event)=>{
    event.preventDefault()
    let output = frm.querySelector('#email-msg')
    let ValidEmail = CheckEmail()
    if (!ValidEmail){
      output.textContent = 'Email must be all lower case'
      output.style.color = 'red'
    }
    else {
      frm.submit()
    }
  })
}

export default ValidateForm;
