const form = document.getElementById("formulaire_contact");

// REGEX
const regex = /^[a-zA-Z-\s]+$/;
const regexmail = /^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$/;
const regexCP = /^\d{5}$/;

form.addEventListener("submit",

(event)=> {
    // RESET INNERHTML ERROR MESSAGE
    const defform = document.getElementsByClassName("defform");
    let x = 0;
    while (x < defform.length){
        defform[x].innerHTML = "";
        x++;
    }

        // VALIDATION NOM
    if (document.getElementById("nom").value =="" || regex.test(document.getElementById("nom").value)==false)
    {
        document.getElementById("defnom").innerHTML = "<p class='text-white bg-danger text-center'>Veuillez entrez un nom valide</p>";
        var result= false;
        event.preventDefault()
    }

        // VALIDATION PRENOM
    if (document.getElementById("prenom").value =="" || regex.test(document.getElementById("prenom").value)==false) 
    {
        document.getElementById("defprenom").innerHTML = "<p class='text-white bg-danger text-center'>Veuillez entrez un prénom valide</p>";
        var result= false;
        event.preventDefault()
    }

        // VALIDATION SEXE

    if (document.getElementById("feminin").checked !=true && document.getElementById("masculin").checked !=true){
        document.getElementById("defsexe").innerHTML = "<p class='text-white bg-danger text-center'>Veuillez entrez votre genre</p>";
        var result= false;
        event.preventDefault()
    }

        // VALIDATION DOB
    if (document.getElementById("date").value == "")
    {
        document.getElementById("defdate").innerHTML = "<p class='text-white bg-danger text-center'>Veuillez entrez votre date de naissance</p>";
        var result= false;
        event.preventDefault()
    }

        // VALIDATION CODE POSTAL
    if (regexCP.test(document.getElementById("codepostal").value)==false) 
    {
        document.getElementById("defcp").innerHTML = "<p class='text-white bg-danger text-center'>Veuillez entrez un code postal valide (5 chiffres)</p>";
        var result= false;
        event.preventDefault()
    }

        //VALIDATION EMAIL

    if (regexmail.test(document.getElementById("email").value)==false)
    {
        document.getElementById("defemail").innerHTML = "<p class='text-white bg-danger text-center'>Veuillez entrez une adresse e-mail valide</p>";
        var result= false;
        event.preventDefault()
    }

        // VALIDATION VOTRE SUJET
    if (document.getElementById("sujet").value == "")
    {
        document.getElementById("defsujet").innerHTML = "<p class='text-white bg-danger text-center'>Veuillez précisez votre sujet</p>";
        var result= false;
        event.preventDefault()
    }

        // VALIDATION VOTRE QUESTION
        let question = document.getElementById("question").value;
    if (question.length < 50 || question.length == null)
    {
        document.getElementById("defquestion").innerHTML = "<p class='text-white bg-danger text-center'>Veuillez précisez votre question (en 50 caractères minimum)</p>";
        var result= false;
        event.preventDefault()
    }

        // VALIDATION TRAITEMENT INFO
    if (document.getElementById("traitement").checked !=true){
        document.getElementById("deftraitement").innerHTML = "<p class='text-white bg-danger text-center'>Veuillez acceptez le traitement de vos informations</p>";
        var result= false;
        event.preventDefault()
    }

    else {
        var result= true;
    }

    return result;
}

 );

//  Faire en sorte que le bouton reset, reset également les messages d'erreurs

 form.addEventListener("reset",

(event)=> {
    // RESET INNERHTML ERROR MESSAGE
    const defform = document.getElementsByClassName("defform");
    let x = 0;
    while (x < defform.length){
        defform[x].innerHTML = "";
        x++;
    }
});