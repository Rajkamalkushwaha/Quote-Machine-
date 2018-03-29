
$(document).ready(function () {
 
 $('#new-quote').click(function () {
 var displayResources1 = $('#text');
 var displayResources2 =$('#author');
 displayResources1.text('Loading data from JSON source...');
 displayResources2.text('Loading data from JSON source...');
 
 $.ajax({
 type: "GET",
 url: "result.json",
 success: function(result)
 {
 console.log(result);

 for (var i in result)
 {
 var output1=result[i].quota;
  var output2=result[i].author ;
 }

 displayResources1.html(output1);
  displayResource21.html(output2);

 }
 });
 
 });
});























