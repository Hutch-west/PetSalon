//constructor 

function Service(title,price){
    this.title=this.title;
    this.price=this.price;
}

function validService(){

}

function register(){
    console.log("a new service was added");
}

function init(){
    //event handler
    let service = new Service("Grooming",30);
    let service2 = new Service("Vaccines",20);
    console.log(service,service2);
    $("#btnRegister").on("click",register);
    $("#titleRequirementText").hide();
    $("#priceRequirementText").hide();    
}

window.onload=init;