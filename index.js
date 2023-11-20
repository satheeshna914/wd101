let registerform=document.getElementById("register-form");
const getentries = () => {
   let entries = localStorage.getItem("register-entries");
   if (entries) 
   {
    entries=JSON.parse(entries);
   } else 
   {
    entries=[];
   }
   return entries;
}
let registerentries=getentries();

const displayentries = () => {
    const entries= getentries();
const entriestable=entries.map((entry) => {
    const namecell = `<td class='border px-4 py-2'>${entry.name}</td>`;
    const emailcell = `<td class='border pX-4 py-2'>${entry.email}</td>`;
    const passwordcell =`<td class='border px-4 py-2'>${entry.password} </td>`;
    const dobcell = `<td class='border px-4 py-2'>${entry.dob}</td>` ;
    const accepttermscell = `<td class='border px-4 py-2'>${entry.acceptedterms}</td>`;

    const row = `<tr style="color:black; background-color:rgb(240, 240, 240);">${namecell} ${emailcell} ${passwordcell} ${dobcell} ${accepttermscell}</tr>`; 
    return row;
    }).join("\n");

    const table = `<table class="table-auto w-full"><tr style="color:blur; background-color:lightblue;">
    <th class="px-4 py-5">NAME</th> 
    <th class="px-4 py-5">EMAIL</th> 
    <th class="px-4 py-5">PASSWORD</th> 
    <th class="px-4 py-5">DOB</th> 
    <th class="px-4 py-5">ACCEPTED TERMS</th> 
</tr>${entriestable} </table>`;
let details = document.getElementById("register-entries");
details.innerHTML = table;
}
const saveregisterform = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    
    const acceptedterms= document.getElementById("acceptTerms").checked;
    const entry = {
        name,
        email,
        password,
        dob,
        acceptedterms,
    };

    registerentries.push(entry);

    localStorage.setItem("register-entries",JSON.stringify(registerentries));
    displayentries();
   
}
registerform.addEventListener("submit",saveregisterform);
displayentries();