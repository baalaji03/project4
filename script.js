document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form input values
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var food = Array.from(document.querySelectorAll('input[name="Choice of food"]:checked')).map(function(element) {
        return element.value;
    }).join(', ');
    var state = document.getElementById('State').value;
    var country = document.getElementById('Country').value;

    document.getElementById('firstNameInput').value = firstName;
    document.getElementById('lastNameInput').value = lastName;
    document.getElementById('addressInput').value = address;
    document.getElementById('pincodeInput').value = pincode;
    document.getElementById('genderInput').value = gender;
    document.getElementById('foodInput').value = food;
    document.getElementById('stateInput').value = state;
    document.getElementById('countryInput').value = country;
});