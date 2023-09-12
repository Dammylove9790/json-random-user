

let user_info = document.getElementById('user_info');
let result = "";

fetch('https://randomuser.me/api/?results=5')
.then(response => response.json())
.then(data => {
    console.log(data.results[0].picture.large);
    console.log(data.results[1].picture.large);
    for (let i = 0; i < data.results.length; i++) {
        result += 
        `<div class="col-lg-3 col-md-6 col-sm-12 px-2 mb-3">
            <div class="row">
                <div id="picture" class="col-lg-12 col-md-5 col-sm-5 text-center">
                    <img src="${data.results[i].picture.large}" width="200px" height="200px" class=" rounded-circle shadow"></img>
                </div>
                
                <div class="col-lg-12 col-md-7 col-sm-7 my-auto">
                    <div class=""><span class="details_head">Name:</span>      <span class="details">${data.results[i].name.title} ${data.results[i].name.first} ${data.results[i].name.last}</span></div>
                    <div class=""><span class="details_head">Address:</span>   <span class="details">${data.results[i].location.state} ${data.results[i].location.country}</span></div>
                    <div class=""><span class="details_head">Phone No:</span>  <span class="details">${data.results[i].phone}</span></div>
                    <div class=""><span class="details_head">DOB:</span> <span class="details">${data.results[i].dob.age}</span></div>
                    <div class=""><span class="details_head">Email:</span> <span class="details">${data.results[i].email}</span></div>
                    <div class=""><span class="details_head">Password: </span> <span class="details">${data.results[i].login.password}</span></div>

                </div>
            </div>
        </div>`
    console.log(data.results[i].gender);
        
    }
    user_info.innerHTML = result;
})

