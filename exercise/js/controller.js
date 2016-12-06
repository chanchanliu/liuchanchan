function main($scope){
    $scope.name="chan"
    $scope.sex="女"
    $scope.age=22
    $scope.Mytext=function(name){
        alert(name)
    }
    console.log($scope.name+"性别："+$scope.sex+"年龄："+$scope.age+"=====for  main")
}
function child($scope){
    $scope.msg="hello child"
    console.log($scope.msg+"=====for  child")
}
function index($scope){
    $scope.msg="hello index"
    console.log($scope.msg+"=====for  index")
}
// $emit //子级向父级  广播事件
// $broadcast  //父级向子级  广播事件
// $on   //来监听
//controller   directive   filter   service
function kind($scope){
    $scope.id=""
    $scope.name="main"
    $scope.getId=function(name){
        $scope.name="123"
    }
    $scope.add=function(name){
        console.log(name)
    }
    $scope.select=function(id,index){
        alert(id,index)
    }
    $scope.arr=[
        {name:'chan11111',age:28},
        {name:'chan22222',age:25},
        {name:'chan33333',age:18}
    ]
}
function content($scope,$rootScope){
    //$scope是作用域  是当前控制器的作用域
    //$rootScope是根作用域,他作用于整个项目中而不是当前控制器
    $rootScope.arr=[
        {name:'chan1',age:18},
        {name:'chan2',age:18},
        {name:'chan3',age:18}
    ]
    $scope.name="content"
    $scope.getId=function(index){
        console.log($rootScope.arr[index].name="changed")
    }
}
function list($scope,$rootScope){
    $rootScope.list='hello list'
    $scope.name="list"
}
angular.module('Myapp')
       .controller('main',main)
       .controller('child',child)
       .controller('index',index)
       .controller('kind',kind)
       .controller('content',content)
       .controller('list',list);