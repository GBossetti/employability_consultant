// Call the dataTables jQuery plugin
$(document).ready(function() {
  console.log("Test_ok");
  listUsers();
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

async function fetchListUsers() {
  try {
    const url = 'api/users';
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
    const usersData = await response.json();
    return usersData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Re-throw the error for handling at a higher level
  }
}

async function fetchDeleteUser(id) {
  try {
    const url = 'api/users/' + id;
    const fetchOptions = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    const response = await fetch(url, fetchOptions);
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Re-throw the error for handling at a higher level
  }
}

async function listUsers() {
  try {
    const usersData = await fetchListUsers();
    console.log(usersData);
    let listHtml = '';
    for (let user of usersData){
        let deleteButton = '<a href="#" onclick="deleteUser('+ user.id +')" class="btn btn-danger btn-circle"><i class="fas fa-trash"></i></a>'
        let userHtml = '<tr><td>'+ user.name +'</td><td>'+ user.surname +'</td><td>'+ user.email +'</td><td>'+ user.phone +'</td><td>' + deleteButton +'</td></tr>'
        listHtml += userHtml;
    }
    document.querySelector('#usersDataTable tbody').outerHTML = listHtml;
  } catch (error) {
    console.log('Error message', error);
  }
}


async function deleteUser(id) {
    if(!confirm('Are you sure you want to delete this user?')){
        return;
    }
    try{
        const deleteUser = await fetchDeleteUser(id);
        console.log(deleteUser);
        location.reload();
    }
    catch(error){
        console.log('Error message:', error);
    }
}

