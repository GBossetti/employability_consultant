$(document).ready(function(){
    //on ready
})

async function fetchLoginUser(userData) {
  try {
    const url = 'api/login';
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

async function loginUser() {
    let data = {};
    data.email = document.getElementById('txtEmail').value;
    data.password = document.getElementById('txtPassword').value;
    try{
        const logInUser = await fetchLoginUser(data);
    }
    catch(error){
        console.log('Error message:', error);
    }
}