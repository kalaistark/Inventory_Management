var app = angular.module("IMS", []); 

/*****************************
    Start of mocked data
******************************/
var loremTxt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non ullamcorper mauris. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus.";

var sysCategories = [
  {name:"Drugs"}, 
  {name:"Equipment"},
  {name:"Feed"},
  {name:"Tags"}
];
sysProducts = [
  {name:"Product A", description:loremTxt, category:sysCategories[0]},
  {name:"Product B", description:loremTxt, category:sysCategories[0]},
  {name:"Product C", description:loremTxt, category:sysCategories[1]},
  {name:"Product D", description:loremTxt, category:sysCategories[1]},
  {name:"Product E", description:loremTxt, category:sysCategories[1]},
  {name:"Product F", description:loremTxt, category:sysCategories[1]},
  {name:"Product G", description:loremTxt, category:sysCategories[2]},
  {name:"Product H", description:loremTxt, category:sysCategories[2]},
  {name:"Product I", description:loremTxt, category:sysCategories[1]},
  {name:"Product J", description:loremTxt, category:sysCategories[1]},
  {name:"Product K", description:loremTxt, category:sysCategories[3]}
];
/*****************************
    End of mocked data
******************************/
app.controller("MainController", function($scope) {
  //List of products the customer is tracking, prefilled with mock data
  $scope.products=[
    {product:sysProducts[0],transactions:[]},
    {product:sysProducts[3],transactions:[]},
    {product:sysProducts[5],transactions:[]}
  ];
  /*app.controller("InventoryController", function($scope) {
    
  });*/  
});


