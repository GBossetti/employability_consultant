$(document).ready(function(){
    //on ready
});

async function fetchRegisterUser(userData) {
  try {
    const url = 'api/users';
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    };
    const request = await fetch(url, fetchOptions);
    if (!request.ok) {
      throw new Error('Failed to fetch user data');
    }

  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Re-throw the error for handling at a higher level
  }
}

async function registerUser() {
    let data = {};
    data.name = document.getElementById('txtFirstName').value;
    data.surname = document.getElementById('txtLastName').value;
    data.email = document.getElementById('txtEmail').value;
    data.password = document.getElementById('txtPassword').value;

    let repeatPassword = document.getElementById('txtRepeatPassword').value;

    if (repeatPassword != data.password){
        alert('Wrong password');
        return;
    }
    try{
        await fetchRegisterUser(data);
        alert("Account created succesfully");
        window.location.href = 'login.html';
    }
    catch(error){
        console.log('Error message:', error);
    }
}