// Academic Qualification
function addNewAQ() {
    let newNode = document.createElement("textarea"); document.getElementById('')
    newNode.classList.add("form-control");
    newNode.classList.add("eqFeild");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");
    let AQ = document.getElementById('AddAQ'); document.getElementById('')
    let addAQbtn = document.getElementById('aqAddbtn'); document.getElementById('')
    AQ.insertBefore(newNode, addAQbtn);
}
// Work Experience
function addNewWE() {
    let newNode = document.createElement("textarea"); document.getElementById('')
    newNode.classList.add("form-control");
    newNode.classList.add("weFeild");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");
    let weOb = document.getElementById('we'); document.getElementById('')
    let webtn = document.getElementById('weAddbtn'); document.getElementById('')
    weOb.insertBefore(newNode, webtn);
}
// Awards/Scholarship/Achievments
function Awardsfun() {
    let newNode = document.createElement("textarea"); document.getElementById('')
    newNode.classList.add("form-control");
    newNode.classList.add("aFeild");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");
    let Awards = document.getElementById('Awards'); document.getElementById('')
    let addAbtn = document.getElementById('Addbtn'); document.getElementById('')
    Awards.insertBefore(newNode, addAbtn);
}
// Projects
function AddProject() {
    let newNode = document.createElement("textarea"); document.getElementById('')
    newNode.classList.add("form-control");
    newNode.classList.add("pFeild");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");
    let p = document.getElementById('pro'); document.getElementById('')
    let pAddbtn = document.getElementById('pAddbtn'); document.getElementById('')
    p.insertBefore(newNode, pAddbtn);
}

// Generate CV
function GenerateCV() {
    //    console.log('generate');
    let nameFeild = document.getElementById('nameFeild').value;
    let eduFeild = document.getElementById('eduFeild').value;
    let contactFeild = document.getElementById('contactFeild').value;
    let emailFeild = document.getElementById('emailFeild').value;
    let dobFeild = document.getElementById('dobFeild').value;
    let addressFeild = document.getElementById('addressFeild').value;
    let interestFeild = document.getElementById('interestFeild').value;
    let gitFeild = document.getElementById('gitFeild').value;
    let linkedinFeild = document.getElementById('linkedinFeild').value;
    let fbFeild = document.getElementById('fbFeild').value;
    let instaFeild = document.getElementById('instaFeild').value;
    let twitterFeild = document.getElementById('twitterFeild').value;

    let eqFeild = document.getElementsByClassName('eqFeild');
    let weFeild = document.getElementsByClassName('weFeild');
    let aFeild = document.getElementsByClassName('aFeild');
    let pFeild = document.getElementsByClassName('pFeild');

    let comFeild = document.getElementById('comFeild').value;
    let softFeild = document.getElementById('softFeild').value;
    let addFeild = document.getElementById('addFeild').value;
    let langFeild = document.getElementById('langFeild').value;


    // Take All id's from CV-Template
    document.getElementById('nameT').innerHTML = nameFeild;
    document.getElementById('BioT').innerHTML = eduFeild;
    document.getElementById('contactT').innerHTML = contactFeild;
    document.getElementById('emailT').innerHTML = emailFeild;
    document.getElementById('dobT').innerHTML = dobFeild;
    document.getElementById('addressT').innerHTML = addressFeild;
    document.getElementById('gitT').innerHTML = `<a href="${gitFeild}" target="_blank"><img src="icons/github.svg" alt=""></a>`;
    document.getElementById('linkT').innerHTML = `<a href="${linkedinFeild}" target="_blank" ><img src="icons/linkedin.svg" alt=""></a>`;
    document.getElementById('instaT').innerHTML = `<a href="${instaFeild}" target="_blank" ><img src="icons/instagram.svg" alt=""></a>`;
    document.getElementById('fbT').innerHTML = `<a href="${fbFeild}" target="_blank"><img src="icons/facebook.svg" alt=""></a>`;
    document.getElementById('twitterT').innerHTML = `<a href="${twitterFeild}" target="_blank" ><img src="icons/twitter.svg" alt=""></a>`;
    document.getElementById('aiT').innerHTML = interestFeild;

    //Class -> Academic
    let str = "";
    for (let e of eqFeild) {
        str = str + ` <li>${e.value}</li>`;
    }
    document.getElementById('aqT').innerHTML = str;

    //Work exper
    let por = "";
    for (let e of weFeild) {
        por = por + `<li>${e.value}</li>`;
    }
    document.getElementById('weT').innerHTML = por;

    //award
    let a = "";
    for (let e of aFeild) {
        a = a + `<li>${e.value}</li>`;
    }
    document.getElementById('awT').innerHTML = a;

    //Projects
    let pro = "";
    for (let e of pFeild) {
        pro = pro + `<li>${e.value}</li>`;
    }
    document.getElementById('projectT').innerHTML = pro;

    //Skills
    document.getElementById('clT').innerHTML = comFeild;
    document.getElementById('spT').innerHTML = softFeild;
    document.getElementById('acT').innerHTML = addFeild;
    document.getElementById('lkT').innerHTML = langFeild;

    // Setting Up Profile photo
    let file = document.getElementById('picFeild').files[0];
    // console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
        // console.log(reader.result);
        document.getElementById('mypic').src = reader.result;
    }


    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('footer').style.display = 'none';
    document.getElementById('nav').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';

}

// Print CV
// function printCV() {
//     window.print();
// }

function printCV() {
    document.getElementById('printT').style.display = 'none';
    const element = document.body;
    const options = {
      margin: 0,
      filename: 'your_filename.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
  }