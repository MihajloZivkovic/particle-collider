//declaration and initial value of particles set
var selectedParticleLeft = "notSet";
var selectedParticleRight = "notSet";
var selectedParticleLeftCharge = "notSet";
var selectedParticleRightCharge = "notSet";

var deflection = false;
var combination = false;
var annihilation = false;
var antimatterLeft = false;
var antimatterRight = false;

//animating particles colliding
function moveLeftParticle(){
    var particleLeftAnimation = document.getElementById("particleLeft");
    particleLeftAnimation.classList.add("moveToRight");
}

function moveRightParticle(){
    var particleRightAnimation = document.getElementById("particleRight");
    particleRightAnimation.classList.add("moveToLeft");
}

//animating a photon as deflection by same charge particles

function photonInteraction(){
    var photonOne = document.getElementById("photonOne");
    photonOne.classList.add("interaction");
}

function wPlusInteraction(){
    var wPlus = document.getElementById("wPlus");
    wPlus.classList.add("interaction");
}

function wMinusInteraction(){
    var Wminus = document.getElementById("wMinus");
    Wminus.classList.add("interaction");
}

//animating particles of same charge deflecting

function deflectLeftParticle(){
    var particleLeftAnimation = document.getElementById("particleLeft");
    particleLeftAnimation.classList.add("deflectLeftParticle");
}

function deflectRightParticle(){
    var particleRightAnimation = document.getElementById("particleRight");
    particleRightAnimation.classList.add("deflectRightParticle");
}

//showing diagram for deflections

function showDiagram(){
    if(selectedParticleLeft == "electron" && selectedParticleRight == "electron"){
        let diagram = document.getElementById("electronElectron");
        diagram.classList.add("appear");
    }
    else if(selectedParticleLeft == "proton" && selectedParticleRight == "proton"){
        let diagram = document.getElementById("protonProton");
        diagram.classList.add("appear");
    }
    else if(selectedParticleLeft == "antiProton" && selectedParticleRight == "antiProton"){
        let diagram = document.getElementById("antiProtonAntiProton");
        diagram.classList.add("appear");
    }
    else if(selectedParticleLeft == "positron" && selectedParticleRight == "positron"){
        let diagram = document.getElementById("positronPositron");
        diagram.classList.add("appear");
    }
    else if((selectedParticleLeft == "proton" && selectedParticleRight == "positron") || (selectedParticleLeft == "positron" && selectedParticleRight == "proton")){
        let diagram = document.getElementById("protonPositron");
        diagram.classList.add("appear");
    }
    else if((selectedParticleLeft == "electron" && selectedParticleRight == "antiProton") || (selectedParticleLeft == "antiProton" && selectedParticleRight == "electron")){
        let diagram = document.getElementById("electronAntiProton");
        diagram.classList.add("appear");
    }
}

//in case of combination

function combinationResultOne(){
    var particleLeftAnimation = document.getElementById("neutron");
    particleLeftAnimation.classList.add("deflectLeftParticle");
    if(antimatterLeft){
        particleLeftAnimation.classList.add("overline");
        let diagram = document.getElementById("positronAntiProton");
        diagram.classList.add("appear");
    }
    else{
        diagram = document.getElementById("electronProton");
        diagram.classList.add("appear");
    }
}

function combinationResultTwo(){
    var particleRightAnimation = document.getElementById("neutrino");
    particleRightAnimation.classList.add("deflectRightParticle");
    if(antimatterRight){
        particleRightAnimation.classList.add("overline");
    }
}

function annihilationResult(){
    var photonOne = document.getElementById("photonOne");
    var photonTwo = document.getElementById("photonTwo");
    photonOne.classList.add("deflectLeftParticle");
    photonTwo.classList.add("deflectRightParticle");
    if(selectedParticleLeft == "proton" || selectedParticleLeft == "antiProton"){
        let diagram = document.getElementById("protonAntiProton");
        diagram.classList.add("appear");
    }
    else{
        diagram = document.getElementById("electronPositron");
        diagram.classList.add("appear");
    }
}

//left side particle picker

function addElectronLeft()
{
    if(deflection || combination || annihilation)
        return;
    var particleLeft = document.getElementById("particleLeft");
    removeParticleLeft();
    particleLeft.classList.add("electron");
    document.getElementById("particleLeftText").innerText = "e-";
    selectedParticleLeft = "electron";
}

function addProtonLeft()
{
    if(deflection || combination || annihilation)
        return;
    var particleLeft = document.getElementById("particleLeft");
    removeParticleLeft();
    particleLeft.classList.add("proton");
    document.getElementById("particleLeftText").innerText = "P+";
    selectedParticleLeft = "proton";
}

function addAntiProtonLeft()
{
    if(deflection || combination || annihilation)
        return;
    var particleLeft = document.getElementById("particleLeft");
    removeParticleLeft();
    particleLeft.classList.add("antiProton");
    document.getElementById("particleLeftText").innerText = "P";
    particleLeft.classList.add("overline");
    selectedParticleLeft = "antiProton";
}

function addPositronLeft()
{
    if(deflection || combination || annihilation)
        return;
    var particleLeft = document.getElementById("particleLeft");
    removeParticleLeft();
    particleLeft.classList.add("positron");
    document.getElementById("particleLeftText").innerText = "e+";
    selectedParticleLeft = "positron";
}

//right side particle picker

function addElectronRight()
{
    if(deflection || combination || annihilation)
        return;
    var particleRight = document.getElementById("particleRight");
    removeParticleRight();
    particleRight.classList.add("electron");
    document.getElementById("particleRightText").innerText = "e-";
    selectedParticleRight = "electron";
}

function addProtonRight()
{
    if(deflection || combination || annihilation)
        return;
    var particleRight = document.getElementById("particleRight");
    removeParticleRight();
    particleRight.classList.add("proton");
    document.getElementById("particleRightText").innerText = "P+";
    selectedParticleRight = "proton";
}

function addAntiProtonRight()
{
    if(deflection || combination || annihilation)
        return;
    var particleRight = document.getElementById("particleRight");
    removeParticleRight();
    particleRight.classList.add("antiProton");
    document.getElementById("particleRightText").innerText = "P";
    particleRight.classList.add("overline");
    selectedParticleRight = "antiProton";
}

function addPositronRight()
{
    if(deflection || combination || annihilation)
        return;
    var particleRight = document.getElementById("particleRight");
    removeParticleRight();
    particleRight.classList.add("positron");
    document.getElementById("particleRightText").innerText = "e+";
    selectedParticleRight = "positron";
}

function removeParticleLeft(){
    document.getElementById("particleLeft").className = "";
}

function removeParticleRight(){
    document.getElementById("particleRight").className = "";
}

function removePicture(){
        var infoDiv = document.querySelector(".info");
    if (infoDiv) {
        var children = infoDiv.children;
        for (var i = 0; i < children.length; i++) {
            children[i].className = "";
        }
    }
}

function removeProducts(){
        var products = document.getElementById("products");
    if (products) {
        var children = products.children;
        for (var i = 0; i < children.length; i++) {
            children[i].className = "";
        }
    }
}

function checkParticles(){
    
    deflection = false;
    combination = false;
    annihilation = false;
    
    //checking left side
    switch(selectedParticleLeft){
        case "electron":
            selectedParticleLeftCharge = "-1";
            antimatterLeft = false;
            break;
        case "antiProton":
            selectedParticleLeftCharge = "-1";
            antimatterLeft = true;
            break;
        case "proton":
            selectedParticleLeftCharge = "+1";
            antimatterLeft = false;
            break;
        case "positron":
            selectedParticleLeftCharge = "+1";
            antimatterLeft = true;
            break;
    }
    //checking right side
    switch(selectedParticleRight){
        case "electron":
            selectedParticleRightCharge = "-1";
            antimatterRight = false;
            break;
        case "antiProton":
            selectedParticleRightCharge = "-1";
            antimatterRight = true;
            break;
        case "proton":
            selectedParticleRightCharge = "+1";
            antimatterRight = false;
            break;
        case "positron":
            selectedParticleRightCharge = "+1";
            antimatterRight = true;
            break;
    }
    //checking type of collision based on selected particles

    if(selectedParticleLeftCharge == selectedParticleRightCharge){
        deflection = true; 
    }
    if(selectedParticleLeftCharge != selectedParticleRightCharge && antimatterLeft != antimatterRight){

        annihilation = true;
    }
    if(selectedParticleLeftCharge != selectedParticleRightCharge && antimatterLeft == antimatterRight){
        combination = true;
    }


}

function explode(){
    var explosion = document.getElementById("explosion");
    explosion.classList.remove("appear");
    explosion.classList.add("appear");
}

function deflect(){
    moveLeftParticle();
    moveRightParticle();
    setTimeout(() => {
        photonInteraction();
      }, 750);
      setTimeout(() => {
        deflectLeftParticle();
        deflectRightParticle();
        showDiagram();
      }, 1000);
}

function combine(){
    moveLeftParticle();
    moveRightParticle();
    if(antimatterLeft){
        setTimeout(() => {
            wPlusInteraction();
          }, 750);
          setTimeout(() => {
            combinationResultOne();
            combinationResultTwo();
            document.getElementById("neutron").title = 'antineutron';
            document.getElementById("neutrino").title = 'antineutrino';
          }, 1000);
    }
    else{
        setTimeout(() => {
            wMinusInteraction();
          }, 750);
          setTimeout(() => {
            combinationResultOne();
            combinationResultTwo();
          }, 1000);
    }
}

function annihilate(){
    moveLeftParticle();
    moveRightParticle();
    explode()
    setTimeout(() => {
        annihilationResult();
      }, 750);
}

function collide(){
    //checking if both particles are selected
    if(selectedParticleLeft == "notSet" || selectedParticleRight == "notSet"){
        document.getElementById("collidingStatus").innerText = "PLEASE SELECT BOTH PARTICLES";
        return;
    }
    else if(deflection || combination || annihilation){
        document.getElementById("collideButton").disabled = true;
        document.getElementById("collidingStatus").innerText = "PLEASE RESET THE PARTICLES";
    }
    else{
        document.getElementById("collidingStatus").innerText = "COLLIDING...";
    }


    //checks which particles are selcted
    checkParticles();
    if(annihilation){
        annihilate();
    }
    else if(deflection){
        deflect();
    }
    else if (combination){
        combine();
    }
    else{
        console.log("ERROR");
    }

    setTimeout(() => {
        document.getElementById("collidingStatus").innerText = "PLEASE RESET THE PARTICLES";
      }, 2000);
}

function resetParticles(){
    removeParticleLeft();
    removeParticleRight();
    document.getElementById("particleLeftText").innerText = "Select Particle";
    document.getElementById("particleRightText").innerText = "Select Particle";
    selectedParticleLeft = "notSet";
    selectedParticleRight = "notSet";
    deflection = false;
    combination = false;
    annihilation = false;
    if(document.getElementById("collideButton") != null)
        document.getElementById("collideButton").disabled = false;
    document.getElementById("collidingStatus").innerText = "Particles Reset. Select New Particles.";
    removePicture();
    removeProducts();
}