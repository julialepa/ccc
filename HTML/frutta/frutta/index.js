$(document).ready(function () {
  $("#my-button").on("click", function(){
    let name = $("input").val();
       switch (name) {
      case "Arance":
      $("#output").html( name + " costano €1,0 al chilo");
        // console.log("Le" + name + "costano €1,0 al chilo");
        break;
      case "Mele":
      $("#output").html( name + " costano €0,64 al chilo");
        // console.log("Le" + name + "costano €0,64 al chilo");
        break;
      case "Banane":
      $("#output").html (name + " costano €0,92 al chilo");
      // console.log("Le" + name + " costano €0,92 al chilo");
      case "Ciliegie":
      $("#output").html (name + " costano €2,59 al chilo") ;
        // console.log("Le" + name + " costano €2,59 al chilo");
        break;
      case "Melone":
      $("#output").html (name + " costa €1,79 al chilo");
        // console.log("Il" + name + " costa €1,79 al chilo");
        break;
      default:
        console.log("Questi frutti non sono disponibili in questa stagione");
    }
})
});