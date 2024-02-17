// Call the dataTables jQuery plugin
$(document).ready(function() {
  console.log("Test_ok");
  createUser();
  $('#usersDataTable').DataTable();

});

/*async function createUser(){
  const request = await fetch('user/123', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  });
  const users = await request.json();
  console.log(users);
}*/

async function fetchUser() {
  try {
    const url = 'user/123';
    const fetchOptions = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };

    const response = await fetch(url, fetchOptions);
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    cons pathJson = './users_data.json'
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Re-throw the error for handling at a higher level
  }
}

async function createUser() {
  try {
    const usersData = await fetchUser();
    console.log(usersData);

    let listHtml = '';

    for (let user of usersData){
        let userHtml = '<tr><td>'+ user.name'</td><td>'+ user.surname'</td><td>'+ user.email'</td><td>'+ user.phone'</td></tr>'
        listHtml += userHtml;
    }


    document.querySelector('#usersDataTable tbody').outerHTML = listHtml;

  } catch (error) {
    // Handle the error, if necessary
  }
}