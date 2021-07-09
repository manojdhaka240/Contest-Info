let platform='';
let username='';
const API_Platform = {
    "All":"all",
    "LeetCode":"leet_code",
    "HackerRank":"hacker_rank",
    "HackerEarth":"hacker_earth",
    "CodeChef":"code_chef",
    "CodeForces":"codeforces",
    "AtCoder":"at_coder",
    "TopCoder":"top_coder"
}
const logo = {
    "HackerRank": `<img class="img-fluid" style="width:50px; height:50px" src="img/hackerrank.svg" alt="HackerRank" title="HackerRank"></img>`,
    "CodeChef": `<img class="img-fluid" style="width:50px; height:50px" src="img/codechef.jpg" alt="CodeChef" title="CodeChef"></img>`,
    "HackerEarth": `<img class="img-fluid" style="width:50px; height:50px" src="img/hackerearth.svg" alt="HackerEarth" title="HackerEarth"></img>`,
    "CodeForces": `<img class="img-fluid" style="width:40px; height:50px" src="img/codeforces.png" alt="CodeForces" title="CodeForces"></img>`,
    "AtCoder": `<img class="img-fluid" style="width:50px; height:50px" src="img/atcoder.png" alt="Atcoder" title="Atcoder"></img>`,
    "LeetCode": `<img class="img-fluid" style="width:50px; height:50px" src="img/LeetCode.png" alt="Leetcode" title="Leetcode"></img>`,
    "TopCoder": `<img class="img-fluid" style="width:50px; height:50px" src="img/topcoder.png" alt="Topcoder" title="Topcoder"></img>`
}
document.getElementById('All').addEventListener('click',getal);
document.getElementById('Codeforces').addEventListener('click',getcf);
document.getElementById('Leetcode').addEventListener('click',getlt);
document.getElementById('Codechef').addEventListener('click',getcc);
document.getElementById('Hackerrank').addEventListener('click',gethkr);
document.getElementById('Hackerearth').addEventListener('click',gethke);
document.getElementById('TopCoder').addEventListener('click',gettp);
document.getElementById('AtCoder').addEventListener('click',getat);

function getal(){
    platform='All';
    Solve(platform);
}
function getcf(){
    platform='CodeForces';
    Solve(platform);
}
function getlt(){
    platform='LeetCode';
    Solve(platform);
}
function getcc(){
    platform='CodeChef';
    Solve(platform);
}
function gethkr(){
    platform='HackerRank';
    Solve(platform);
}
function gethke(){
    platform='HackerEarth';
    Solve(platform);
}
function gettp(){
    platform='TopCoder';
    Solve(platform);
}
function getat(){
    platform='AtCoder';
    Solve(platform);
}

function Solve(Platform_Name){

    document.getElementById('Running_Contest_Table_div').style.display='';
    document.getElementById('Upcoming_Contest_Table_div').style.display='';
    document.getElementById('Running_Contest_Table').style.display='';
    document.getElementById('Running_Contest_para').style.display='';
    document.getElementById('Upcoming_Contest_Table').style.display='';
    document.getElementById('Upcoming_Contest_para').style.display='';
    document.getElementById('search').style.display='';

    
    const SiteName = API_Platform[Platform_Name];
    console.log(SiteName);
    const url = `https://kontests.net/api/v1/${SiteName}`;
    console.log(url);

    fetch(url)
    .then((response)=>{
       return response.json();
    })
    .then((data)=>{
        document.getElementById('Upcoming_Contest').innerHTML = '';
        document.getElementById('Running_Contest').innerHTML = '';
        let output = '';
        data.forEach(contest => {
            let row = document.createElement('tr');

            let col1 = document.createElement('td');
            col1.classList.add('text-center');
            let col2 = document.createElement('td');
            col2.classList.add('text-center');
            let col3 = document.createElement('td');
            col3.classList.add('text-center');
            let col4 = document.createElement('td');
            col4.classList.add('text-center');
            let col5 = document.createElement('td');
            col5.classList.add('text-center');
            
            col1.style.width = "100px";
            col2.style.width = "100px";
            col3.style.width = "100px";
            col4.style.width = "100px";
            col5.style.width = "100px";

            col1.innerText = contest.name;
            if(Platform_Name=="All"){
                if(contest.site == "Kick Start" || contest.site =="Toph"){
                    col2.innerText = "-";
                }else{
                    col2.innerHTML = logo[`${contest.site}`];
                }
            }else{
                col2.innerHTML = logo[Platform_Name];
            }
            let currentDate = new Date(Date.parse(contest.start_time));
            let str = currentDate.toLocaleString();
            let newDate =  moment(currentDate, "MM/DD/YYYY").format("DD/MM/YYYY");
            let x = str.indexOf(',');
            newDate += str.slice(x+1,str.length);
            // console.log(x,str,newDate,hour);

            col3.innerText = newDate;
            if(contest.status=="CODING"){
                col4.innerText = "-";
            }
            else{
                let hour = Math.floor(contest.duration/3600);
                let minute =  Math.floor((contest.duration%3600)/60);
                if(hour==0){
                    col4.innerText = "-";
                }
                else{
                    if(minute ==0){
                        col4.innerText = `${hour}h`;
                    }else{
                        col4.innerText = `${hour}h : ${minute}m`;
                    }
                }
            }
            col5.innerHTML = `<a class="text-decoration-none " href="${contest.url}"><i class="bi bi-arrow-up-right"></i></a>`;

            row.append(col1);
            row.append(col2);
            row.append(col3);
            row.append(col4);
            row.append(col5);

            if(contest.status=="CODING"){
                document.getElementById('Running_Contest').append(row);
            }
            else{
                document.getElementById('Upcoming_Contest').append(row);
            }
        });
            let Running_Table = document.getElementById('Running_Contest_Table');
            let Upcoming_Table = document.getElementById('Upcoming_Contest_Table');

            // console.log(Running_Table.rows.length);
            // console.log(Upcoming_Table.rows.length);

            if(Running_Table.rows.length <= 1){

                let row = document.createElement('tr');

                row.innerHTML = `<td class="text-center" colspan="5">No Running Contest</td>`;
                
                document.getElementById('Running_Contest').append(row);
                // document.getElementById('Running_Contest').innerHTML = `<p class="col-12 mt-2" style="width:inherit; float:center">No running contests</p>`;
            }
            if(Upcoming_Table.rows.length <= 1){
                let row = document.createElement('tr');

                row.innerHTML = `<td class="text-center" colspan="5">No Upcoming Contest</td>`;
                
                document.getElementById('Upcoming_Contest').append(row);
                // document.getElementById('Upcoming_Contest').innerHTML = `<p class="col-12 mt-2" style="float:center">No upcoming contests</p>`;
            }
    })
    .catch((err)=>{
        console.log(err);
        window.alert(err);
    })
}