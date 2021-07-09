let platform='';
let username='';
// if(document.getElementById('Codeforces').clicked==true){
//     platform='Codeforces';
// }
// if(document.getElementById('Leetcode').clicked==true){
//     platform='Leetcode';
// }
// if(document.getElementById('Codechef').clicked==true){
//     platform='Codechef';
// }

// adding plateform name in modal
function codeforcesPlatform(){
    document.getElementById('usernameformLabel').innerText = `Enter CodeForces Username`;
}
function codechefPlatform(){
    document.getElementById('usernameformLabel').innerText = `Enter CodeChef Username`;
}
function leetcodePlatform(){
    document.getElementById('usernameformLabel').innerText = `Enter Leetcode Username`;
}
function spojPlatform(){
    document.getElementById('usernameformLabel').innerText = `Enter SPOJ Username`;
}

document.getElementById('Codeforces').addEventListener('click',codeforcesPlatform);
document.getElementById('Leetcode').addEventListener('click',leetcodePlatform);
document.getElementById('Codechef').addEventListener('click',codechefPlatform);
document.getElementById('Spoj').addEventListener('click',spojPlatform);




document.getElementById('Codeforces').addEventListener('click',getcf);
document.getElementById('Leetcode').addEventListener('click',getlt);
document.getElementById('Codechef').addEventListener('click',getcc);
document.getElementById('Spoj').addEventListener('click',getsp);
document.getElementById('getprofile').addEventListener('click',GetProfile);

function getcf(){
    platform='Codeforces';
}
function getlt(){
    platform='Leetcode';
}
function getcc(){
    platform='Codechef';
}
function getsp(){
    platform='Spoj';
}
function GetProfile(){
    // const platform = document.getElementById('Platform').id;
    username = document.getElementById('username').value;
    // const platform = '';
    // const username = '';
    
    const url = `https://competitive-coding-api.herokuapp.com/api/${platform.toLowerCase()}/${username}`;
    console.log(url);
    if(platform == "Codeforces"){
        CodeForces(url,username);
    }
    else if(platform =="Codechef"){
        Codechef(url,username);
    }
    else if(platform =="Spoj"){
        SPOJ(url,username);
    }
    else if(platform =="Interviewbit"){
        Interviewbit(url,username);
    }
    else if(platform =="Leetcode"){
        Leetcode(url);
    }
    else if(platform =="Atcoder"){
        Atcoder(url,username);
    }
}

function Leetcode(url){
    let output = '';
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        // console.log(data);
        // output +=`
        // <h3>${username}</h3>
        // <ul class="list-group">
        //     <li class="list-group-item">Acceptance rate: ${data.acceptance_rate}</li>
        //     <li class="list-group-item">Contribution points: ${data.contribution_points}</li>
        //     <li class="list-group-item">Easy Problem: ${data.easy_questions_solved}</li>
        //     <li class="list-group-item">Medium Problem: ${data.medium_questions_solved}</li>
        //     <li class="list-group-item">Hard Problem: ${data.hard_questions_solved}</li>
        //     <li class="list-group-item">ranking: ${data.ranking}</li>
        //     <li class="list-group-item">Easy Problem Acceptance Rate: ${data.easy_acceptance_rate}</li>
        //     <li class="list-group-item">Medium Problem Acceptance Rate: ${data.medium_acceptance_rate}</li>
        //     <li class="list-group-item">Hard Problem Acceptance Rate: ${data.hard_acceptance_rate}</li>
        //     <li class="list-group-item">total problems solved: ${data.total_problems_solved}</li>
        // </ul>`;
        console.log(data.total_problems_solved);
        
        if(typeof data.total_problems_solved == 'undefined'){
            window.alert('Invalid Username');
            return;
        }
        output +=`
        
        <section class="p-5 mt-3">
        <h3 class="text-center mb-3">Welcome ${username} !!!</h3>
        <div class="container">
            <div class="row text-center g-4">
                <div class="col-lg">
                    <div class="card bg-dark text-light">
                        <div class="card-body text-center">
                            <div class="h1 m-3">
                                <i class="bi bi-laptop"></i>
                            </div>
                            <h3 class="card-title mb-3">
                                General
                            </h3>
                            <p class="card-text">
                                <li class="list-group-item bg-dark text-light">Username: ${username}</li>
                                <li class="list-group-item bg-dark text-light">Acceptance rate: ${data.acceptance_rate}</li>
                                <li class="list-group-item bg-dark text-light">ranking: ${data.ranking}</li>
                                <li class="list-group-item bg-dark text-light">total problems solved: ${data.total_problems_solved}</li>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg">
                    <div class="card bg-success text-light">
                        <div class="card-body text-center">
                            <div class="h1 m-3">
                                <i class="bi bi-check2-circle"></i>
                            </div>
                            <h3 class="card-title mb-3">
                                Solved
                            </h3>
                            <p class="card-text">
                                <li class="list-group-item bg-success text-light">Username: ${username}</li>
                                <li class="list-group-item bg-success text-light">Easy Problem: ${data.easy_questions_solved}</li>
                                <li class="list-group-item bg-success text-light">Medium Problem: ${data.medium_questions_solved}</li>
                                <li class="list-group-item bg-success text-light">Hard Problem: ${data.hard_questions_solved}</li>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg">
                    <div class="card bg-dark text-light">
                        <div class="card-body text-center">
                            <div class="h1 m-3">
                                <i class="bi bi-bullseye"></i>
                            </div>
                            <h3 class="card-title mb-3">
                                Acceptance Rates
                            </h3>
                            <p class="card-text">
                                <li class="list-group-item bg-dark text-light">Username: ${username}</li>
                                <li class="list-group-item bg-dark text-light">Easy Problems: ${data.easy_acceptance_rate}</li>
                                <li class="list-group-item bg-dark text-light">Medium Problems: ${data.medium_acceptance_rate}</li>
                                <li class="list-group-item bg-dark text-light">Hard Problems: ${data.hard_acceptance_rate}</li>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

        document.getElementById('output').innerHTML = output;
    })
    // .catch((err)=>{
    //     console.log(err);
    //     window.alert('Invalid Username');
    // })
    .catch((err)=>{
        window.alert('Invalid UserName');
    })
}

function CodeForces(url){
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        let output = '';
        document.getElementById('output').innerHTML = '';
        // output +=`
        // <h3 class="text-center">${username}</h3>
        // <ul class="list-group">
        //     <li class="list-group-item">Max Rank: ${data["max rank"]}</li>
        //     <li class="list-group-item">Rank: ${data.rank}</li>
        //     <li class="list-group-item">Max Rating: ${data["max rating"]}</li>
        //     <li class="list-group-item">Rating: ${data.rating}</li>
        // </ul>`;
        output +=`
        
        <section class="p-5 mt-3">
            <h3 class="text-center mb-3">Welcome ${data.username} !!!</h3>
            <div class="container">
                <div class="row text-center g-4">
                    <div class="col-md">
                        <div class="card bg-dark text-light">
                            <div class="card-body text-center">
                                <div class="h1 m-3">
                                    <i class="bi bi-laptop"></i>
                                </div>
                                <h3 class="card-title mb-3">
                                    General
                                </h3>
                                <p class="card-text">
                                    <li class="list-group-item bg-dark text-light">Username: ${username}</li>
                                    <li class="list-group-item bg-dark text-light">Current Rank: ${data.rank}</li>
                                    <li class="list-group-item bg-dark text-light">Best Rank: ${data["max rank"]}</li>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="card bg-success text-light">
                            <div class="card-body text-center">
                                <div class="h1 m-3">
                                    <i class="bi bi-check2-circle"></i>
                                </div>
                                <h3 class="card-title mb-3">
                                    Solved
                                </h3>
                                <p class="card-text">
                                    <li class="list-group-item bg-success text-light">Username: ${username}</li>
                                    <li class="list-group-item bg-success text-light">Current Rating: ${data.rating}</li>
                                    <li class="list-group-item bg-success text-light">Maximum Rating: ${data["max rating"]}</li>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;    
        let count =data.contests.length+1;
        let tbl='';
        tbl+=`
        <div class="container">
        <div class="row">
        <div class="col-12 d-flex align-items-center justify-content-center">
        <div class="table-responsive-sm">
            <h3 class="text-center mb-3"> Contest Deatils</h3>
            <table class="table-lg text-center table-bordered border-dark table-hover">
                <thead class="thead-dark">
                <tr>
                    <th scope="col">S No.</th>
                    <th scope="col">Contest Name</th>
                    <th scope="col">Questions Solved</th>
                    <th scope="col">Rank</th>
                    <th scope="col">New Rating</th>
                </tr>
                </thead>
                <tbody>
        `;
        data.contests.forEach(element => {
            count--;
            let colr='';
            ran=element.Rank;
            if(ran<5000) colr='info';
            else if(ran>5000 && ran<10000) colr='success';
            else colr='secondary';
            tbl+=`
                    <tr class="bg-${colr}">
                        <th scope="row">${count}</th>
                        <td>${element.Contest}</td>
                        <td>${element.Solved}</td>
                        <td>${element.Rank}</td>
                        <td>${element["New Rating"]}</td>
                    </tr>
                `;
            
        });
        tbl+=`
                </tbody>
            </table>
        </div>
        </div>
        </div>
        </div>
        `;
        output+=tbl;
        document.getElementById('output').innerHTML = output;
        console.log(tbl);
    })
    .catch((err)=>{
        window.alert('Invalid UserName');
    })
}


// CodeChef
function Codechef(url){
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        let output = '',count=data.contest_ratings.length+1;
        document.getElementById('output').innerHTML = '';

        output +=`
        
        <section class="p-5 mt-3">
        <h3 class="text-center mb-3">Welcome ${data.user_details.name} !!!</h3>

        
            <div class="container">
                <div class="row text-center g-4">
                    <div class="col-lg">
                        <div class="card bg-dark text-light" style="max-height:310px;">
                            <div class="card-body text-center">
                                <div class="h1 m-3">
                                    <i class="bi bi-laptop"></i>
                                </div>
                                <h3 class="card-title mb-3">
                                    General
                                </h3>
                                <p class="card-text">
                                    <li class="list-group-item bg-dark text-light">Username: ${username}</li>
                                    <li class="list-group-item bg-dark text-light">Name: ${data.user_details.name}</li>
                                    <li class="list-group-item bg-dark text-light">Link: <a class="text-decoration-none" href="www.codechef.com/users/${data.user_details.username}">${data.user_details.username}</a></li></li>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg">
                        <div class="card bg-success text-light" style="max-height:310px;">
                            <div class="card-body text-center">
                                <div class="h1 m-3">
                                    <i class="bi bi-star-fill"></i>
                                </div>
                                <h3 class="card-title mb-3">
                                    Stars
                                </h3>
                                <p class="card-text">
                                    <li class="list-group-item bg-success text-light">Username: ${username}</li>
                                    <li class="list-group-item bg-success text-light">Current Rating: ${data.rating}</li>
                                    <li class="list-group-item bg-success text-light">Stars: ${data.stars}</li>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg">
                        <div class="card bg-dark text-light" style="max-height:310px;">
                            <div class="card-body text-center">
                                <div class="h1 m-3">
                                    <i class="bi bi-graph-up"></i>
                                </div>
                                <h3 class="card-title mb-3">
                                    Rankings
                                </h3>
                                <p class="card-text">
                                    <li class="list-group-item bg-dark text-light">Username: ${username}</li>
                                    <li class="list-group-item bg-dark text-light">Current Rating: ${data.global_rank}</li>
                                    <li class="list-group-item bg-dark text-light">Maximum Rating: ${data.country_rank}</li>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;

        // data.fully_solved.Practice.forEach(element => {
        //     let row = document.createElement('tr');

        //     let col1 = document.createElement('th');
        //     let col2 = document.createElement('th');


        //     col1.innerText = element.name;
        //     col2.innerHTML = `<a href="${element.link.replace(',manojdhaka','')}">${element.link.replace(',manojdhaka','')}</a>`;

        //     row.append(col1);
        //     row.append(col2);

        //     document.getElementById('Codechef_Problems').append(row);
        // });
        let tbl='';
        tbl+=`
        <div class="container">
        <div class="row">
        <div class="col-12 d-flex align-items-center justify-content-center">
        <div class="table-responsive-lg">
        <h3 class="text-center mb-3"> Contest Deatils</h3>
            <table style="min-width:1000px" class="table text-center table-sm table-bordered border-dark table-hover">
                <thead class="thead-dark">
                <tr>
                    <th scope="col">S No.</th>
                    <th scope="col">Contest Name</th>
                    <th scope="col">Contest Code</th>
                    <th scope="col">Rank</th>
                    <th scope="col">New Rating</th>
                </tr>
                </thead>
                <tbody>
        `;
        data.contest_ratings.forEach(element => {
            count--;
            let colr='';
            ran=element.rank;
            if(ran<5000) colr='info';
            else if(ran>5000 && ran<10000) colr='success';
            else colr='secondary';
            tbl+=`
                    <tr class="bg-${colr}">
                        <th scope="row">${count}</th>
                        <td>${element.name}</td>
                        <td>${element.code}</td>
                        <td>${element.rank}</td>
                        <td>${element.rating}</td>
                    </tr>
                `;
            
        });
        tbl+=`
                </tbody>
            </table>
        </div>
        </div>
        </div>
        </div>
        `;
        output+=tbl;
        document.getElementById('output').innerHTML = output;
    })
    .catch((err)=>{
        window.alert('Invalid UserName');
    })
}




function SPOJ(url,username){
    console.log(username);
    let output = '';
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        // console.log(data);
        let output = '';
        // output +=`
        // <h3>${username}</h3>
        // <ul class="list-group">
        //     <li class="list-group-item">UserName: ${data.username}</li>
        //     <li class="list-group-item">Points: ${data.points}</li>
        //     <li class="list-group-item">Rank: ${data.rank}</li>
        //     <li class="list-group-item">Join Date: ${data["join data"]}</li>
        //     <li class="list-group-item">Institute: ${data.institute}</li>
        // </ul>`;

        output +=`
        
        <section class="p-5 mt-3">
        <h3 class="text-center mb-3">Welcome ${data.username} !!!</h3>
            <div class="container mb-5">
                <div class="row text-center g-4">
                    <div class="col-md">
                        <div class="card bg-secondary text-light">
                            <div class="card-body text-center">
                                <div class="h1 m-3">
                                    <i class="bi bi-laptop"></i>
                                </div>
                                <h3 class="card-title mb-3">
                                    General
                                </h3>
                                <p class="card-text">
                                    <li class="list-group-item bg-secondary text-light">Username: ${data.username}</li>
                                    <li class="list-group-item bg-secondary text-light">Points: ${data.points}</li>
                                    <li class="list-group-item bg-secondary text-light">Best Rank: ${data.rank}</li>
                                    <li class="list-group-item bg-secondary text-light">Joined: ${data["join data"]}</li>
                                    <li class="list-group-item bg-secondary text-light">Institute: ${data.institute}</li>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
        // let tbl='';
        // tbl+=`
        // <div class="container">
        // <div class="row">
        // <div class="col-12 d-flex align-items-center justify-content-center">
        //     <div class="table-responsive-lg">
        //     <h3 class="text-center mb-3"> Problems Solved</h3>
        //         <table class="table-lg bg-light text-center table-bordered border-dark table-hover">
        //             <thead class="thead-dark">
        //             <tr>
        //                 <th scope="row">S No.</th>
        //                 <th scope="col">Problem Name</th>
        //                 <th scope="col">Link</th>
        //             </tr>
        //             </thead>
        //             <tbody>
        //     `;
        
        // document.getElementById('solved_problems').style.display = '';
        // <h3 class="text-center mb-3" id="solved_problems"> Problems Solved</h3>
        let tbl='';
        tbl+=`
        <div class="container" >
        <div class="row">
        <div class="col-12 d-flex align-items-center justify-content-center">
        <div class="table-responsive-lg">

            <table style="min-width:1000px" class="caption-top table text-center table-sm table-bordered border-dark table-hover">
            <caption class="text-center">Problems Solved</caption>
            <thead class="thead-dark">
                    <tr>
                        <th scope="col">S No.</th>
                        <th scope="col">Problem Name</th>
                        <th scope="col">Link</th>
                    </tr>
                    </thead>
                    <tbody>
            `;
        let count=data.solved.length+1;
        
        data.solved.forEach(element => {

            // col1.innerText = element;
            // col2.innerHTML = `<a href="https://www.spoj.com/problems/${element}">https://www.spoj.com/problems/${element}</a>`;

            // row.append(col1);
            // row.append(col2);
            let a=Math.floor(Math.random()*10)+1,colr='';
            a=a%3;
            if(a==0){
                colr='light';
            }
            else if(a==1){
                colr='light';
            }
            else{
                colr='light';
            }
            count--;
            
            tbl+=`
                    <tr class="bg-${colr}">
                        <th scope="row">${count}</th>
                        <td>${element}</td>
                        <td><a class="text-decoration-none text-dark" href="https://www.spoj.com/problems/${element}">https://www.spoj.com/problems/${element}</a></td>
                    </tr>
                `;
            
        });
        tbl+=`
                </tbody>
            </table>
        </div>
        </div>
        </div>
        </div>
        `;
        output+=tbl;
        document.getElementById('output').innerHTML = output;
    })
    .catch((err)=>{
        console.log(err);
        window.alert('Invalid Username');
    })
}
function Interviewbit(){
    console.log("hello");
}
function Atcoder(){
    console.log("hello");
}

// acceptance_rate: "61.05%"
// contribution_points: "1821"
// contribution_problems: "0"
// contribution_testcases: "0"
// easy_acceptance_rate: "66.15%"
// easy_problems_submitted: "263"
// easy_questions_solved: "251"
// hard_acceptance_rate: "54.17%"
// hard_problems_submitted: "30"
// hard_questions_solved: "20"
// medium_acceptance_rate: "55.86%"
// medium_problems_submitted: "247"
// medium_questions_solved: "212"
// ranking: "29833"
// reputation: "0"
// status: "Success"
// total_easy_questions: "503"
// total_hard_questions: "405"
// total_medium_questions: "1015"
// total_problems_solved: "483"
// total_problems_submitted: "540"