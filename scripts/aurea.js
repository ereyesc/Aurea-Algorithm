var app = angular.module('aureaAlgorithm', ['ngMaterial']);

app.controller("aureaCtrl", function($scope) {
    $scope.form = {
        function:'',
        xmin:'',
        xmax:''
    };
    $scope.iteracion = function(xmin,xmax,string){
      var d;
      var x1;
      var x2;
      var fnx1;
      var fnx2;
      var parser;
      var err;
      $('tbody').unbind();
      $( "table" ).fadeOut( 0, function() {
        $( "tr" ).fadeOut(0);
      });
      do{
      parser = math.parser();
      d = 0.618*(xmax-xmin);
      x1 = xmin+d;
      x2 = xmax-d;
      fnx1 = string.replace(/x/g, x1);
      console.log(parser.eval(fnx1));
      fnx2 = string.replace(/x/g, x2);
      console.log(parser.eval(fnx2));
      if(fnx1>fnx2){
        xmin=x2;
      }else if(fnx2>fnx1){
        xmax=x1;
      }
      err=Math.abs(xmax-xmin);
      console.log("Err"+err);
      console.log("Xmin: "+xmin);
      console.log("Xmax: "+xmax);
      console.log("X1: "+x1);
      console.log("X2: "+x2);
      $('tbody').append("<tr>");
      $('tbody').append("<td>"+Number(x1).toFixed(4)+"</td>");
      $('tbody').append("<td>"+Number(x2).toFixed(4)+"</td></tr>");
      $('tbody').append("<td>"+Number(xmin).toFixed(4)+"</td>");
      $('tbody').append("<td>"+Number(xmax).toFixed(4)+"</td>");
      $('tbody').append("<td>"+parser.eval(fnx1).toFixed(4)+"</td>");
      $('tbody').append("<td>"+parser.eval(fnx2).toFixed(4)+"</td>");
      $('tbody').append("<td>"+err.toFixed(7)+"</td>");
      }while(err>=0.000001);

      $( "table" ).fadeIn( 5000, function() {
        $( "tr" ).fadeIn( 5000 );
      });

    };
});

/*function iteracion(xmin,xmax,string){
  var d;
  var x1;
  var x2;
  var fnx1;
  var fnx2;
  var parser;
  var err;
  do{
  parser = math.parser();
  d = 0.618*(xmax-xmin);
  x1 = xmin+d;
  x2 = xmax-d;
  fnx1 = string.replace(/x/g, x1);
  console.log(parser.eval(fnx1));
  fnx2 = string.replace(/x/g, x2);
  console.log(parser.eval(fnx2));
  if(fnx1>fnx2){
    xmin=x2;
  }else if(fnx2>fnx1){
    xmax=x1;
  }
  err=Math.abs(xmax-xmin);
  console.log("Err"+err);
  console.log("Xmin: "+xmin);
  console.log("Xmax: "+xmax);
  console.log("X1: "+x1);
  console.log("X2: "+x2);
  $('tbody').append("<tr>");
  $('tbody').append("<td>"+Number(x1).toFixed(4)+"</td>");
  $('tbody').append("<td>"+Number(x2).toFixed(4)+"</td></tr>");
  $('tbody').append("<td>"+Number(xmin).toFixed(4)+"</td>");
  $('tbody').append("<td>"+Number(xmax).toFixed(4)+"</td>");
  $('tbody').append("<td>"+parser.eval(fnx1).toFixed(4)+"</td>");
  $('tbody').append("<td>"+parser.eval(fnx2).toFixed(4)+"</td>");
  $('tbody').append("<td>"+err.toFixed(7)+"</td>");
  }while(err>=0.000001);

  $(document).ready(function(){
    $( "table" ).fadeIn( 5000, function() {
      $( "tr" ).fadeIn( 5000 );
    });
  });
}*/
