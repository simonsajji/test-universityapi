const button=document.getElementById("submit");
let table=document.getElementById("tab");
let table_ctn=document.getElementById("table_ctn")

const inp=document.getElementById("inp");
let country_name;
let lname;
let fname;


button.addEventListener("click", ()=>{
    table.innerHTML="";
    table_ctn.classList.remove("hidden");
    country_name=inp.value;
    let head=document.createElement("tr");
    let co=document.createElement("th");
    let un=document.createElement("th");
    let web=document.createElement("th");
    co.innerText="Country";
    un.innerText="University Name";
    web.innerText="Website";
    head.appendChild(co);
    head.appendChild(un);
    head.appendChild(web);
    table.appendChild(head);    
    [fname,lname]=country_name.split(" ");
    console.log(fname,lname);

     //THis country name is got from the text field in search bar

    let f=fetch(`http://universities.hipolabs.com/search?country=${fname}+${lname}`);


    f.then((response)=>{
        return response.json();
    }).then((data)=>{
       
        data.forEach((item)=>{
            console.log(item);
            // item.country
            // item.name
            // item.web_pages[0]

            let tr=document.createElement("tr");
            let c=document.createElement("td");
            let uname=document.createElement("td");
            let website=document.createElement("td");

            c.innerText=item.country;
            uname.innerText=item.name;
            website.innerText=item.web_pages[0];

            tr.appendChild(c);
            tr.appendChild(uname);
            tr.appendChild(website);
            table.appendChild(tr);




        })



    }).catch((err) => alert("Some error to fetch the API"));





})


