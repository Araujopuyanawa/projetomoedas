let form = document.getElementById("formulario"),
    URL = "https://webhook.site/ec239a96-8535-457c-8e36-023596612c29";

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value,
        age = document.getElementById("age").value,
        phone = document.getElementById("phone").value,
        data = {
            name,
            age,
            phone
        };

    fetch(URL, {
            method: 'POST',
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data => alert(data.message))
})