angular.module('myApp', [])
    .constant('bestOfTheYear', [
      {
        "name": "Wood Design Chair",
        "price": "150",
        "type": "chair",
        "material": "wood",
        "image": "../images/wood-design-chair.png"
      }, {
        "name": "Premium Design Chair",
        "price": "150",
        "type": "chair",
        "material": "foam",
        "image": "../images/premium-design-chair.png"
      }, {
        "name": "White and Wood Chair",
        "price": "150",
        "type": "armchair",
        "material": "wood",
        "image": "../images/white-and-wood-chair.png"
      }, {
        "name": "Black and Wood chair",
        "price": "150",
        "type": "armchair",
        "material": "wood",
        "image": "../images/black-and-wood-chair.png"
      }
    ])
    .constant('newArrivals', [
      {
        "name": "Modern Black Armchair",
        "price": "350",
        "type": "armchair",
        "material": "wood",
        "image": "../images/modern-black-armchair.png"
      }, {
        "name": "Modern Gray Armchair",
        "price": "350",
        "type": "armchair",
        "material": "foam",
        "image": "../images/modern-grey-armchair.png"
      }, {
        "name": "Light Blue Armchair",
        "price": "350",
        "type": "armchair",
        "material": "foam",
        "image": "../images/light-blue-armchair.png"
      }, {
        "name": "Black and Wood Armchair",
        "price": "350",
        "type": "armchair",
        "material": "wood",
        "image": "../images/black-and-wood-armchair.png"
      }
    ])

    .controller('AppCtrl', ['$scope', 'bestOfTheYear', 'newArrivals', function($scope, bestOfTheYear, newArrivals) {
        $scope.bestOfTheYear = bestOfTheYear;
        $scope.newArrivals = newArrivals;
    }])
