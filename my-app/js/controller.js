function nav($scope,$rootScope){
    //$scope是作用域  是当前控制器的作用域
    //$rootScope是根作用域,他作用于整个项目中而不是当前控制器
    $rootScope.arr1=[
        {title:"氧气精选"},
        {title:"内衣专题"},
        {title:"Lookbook"},
        {title:"小编随笔"}
    ]
}
function main_img($scope,$rootScope){
    $rootScope.arr=[
        {img:'./images/img_06.jpg',title:"遍地丝绒热 哪赢得过我深藏功与名",author:"Juan",heart:899,look:2543},
        {img:'./images/img_09.jpg',title:"兵荒马乱数个时差 不忘把旅途照料成日常",author:"Skye",heart:622,look:12121},
        {img:'./images/img_03.jpg',title:"这个周末有埋伏 出入卧室请注意",author:"Stella McCartney",heart:9226,look:33733},
        {img:'./images/img_12.jpg',title:"等着哪个莽撞的生人  过来打草惊蛇",author:"Ran",heart:158266,look:8745}
    ]
}
angular.module('Myapp')
       .controller('nav',nav)
       .controller('main_img',main_img);