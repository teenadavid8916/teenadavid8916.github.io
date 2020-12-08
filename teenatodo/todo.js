//function to create table

function n(){
    $(document).ready(function(){

     var a= "https://jsonplaceholder.typicode.com/todos";
    $.getJSON(a,function(data){
    console.log(data);
    console.log("it worked");
    // var data = JSON.parse(data);
    var stringified = JSON.stringify(data);
    var parsedObj = JSON.parse(stringified);

    console.log(parsedObj);
    console.log(parsedObj.length);
    
var output=""

// parsedObj.forEach(function(dt) 
    for(var i=0;i<parsedObj.length;i++)  {
        output += "<tr><td>"+parsedObj[i].userId+"</td>"+
         "<td>"+parsedObj[i].id+"</td>"+
        "<td>"+parsedObj[i].title+"</td>"+
        `<td><input type="checkbox" id="checkbox " value="completed"  unchecked></td>`;

};
document.getElementById("tdata").innerHTML=output; });


});};

n();  

//alert msg





var total=0;
document.querySelector('#tdata').onclick = function(ev) {
  
  if(ev.target.checked==true) {
   total++;
   
  }
  else {

    total--;
  }
  
  var five = function five(){
    if(total==5 ){
      
        alert('Congrats. 5 Tasks have been Successfully Completed');
    }
  }

  five();


}











































//         function n(){
//     $(document).ready(function(){

//      var a= "https://jsonplaceholder.typicode.com/todos";
//     $.getJSON(a,function(data){
//     console.log(data);
//     console.log("it worked");
//     // var data = JSON.parse(data);
//     var stringified = JSON.stringify(data);
//     var parsedObj = JSON.parse(stringified);

//     console.log(parsedObj);
//     console.log(parsedObj.length); 


// // parsedObj.forEach(function(dt) 
//     for(var i=0;i<parsedObj.length;i++)  {
//         console.log(parsedObj[i].title);
//         $("tdata").append("<tr>"+
//         "<td>"+parsedObj[i].userId+"</td>"+
//         "<td>"+parsedObj[i].id+"</td>"+
//         "<td>"+parsedObj[i].title+"</td>"+
//         "<td>"+parsedObj[i].completed+"</td>"+
//         +"</tr>");

// }; });


// });};

// n();  



// $(document).ready(function(){

//     function n(){

//     $.getJSON("https://jsonplaceholder.typicode.com/todos",function(data){
//          console.log(data);
//         console.log("it worked");
//          var data = JSON.parse(data);
      
      
//      data.forEach(function(dt) {
//          $("tdata").append("<tr>"+
//             "<td>"+dt.userId+"</td>"+
//             "<td>"+dt.id+"</td>"+
//             "<td>"+dt.title+"</td>"+
//             "<td>"+dt.completed+"</td>"+
//          +"</tr>");

         
//      }); });};
        
    
//  });

