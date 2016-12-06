function createUl(){
    return {
        restrict : 'EAC',
        link:function(scope,element){
            var str = ''
            for(i in scope.arr){
            	str += "<li>"+scope.arr[i].name+"</li>"
            }
            element.append('<ul>'+str+'</ul>')

            element.css({width:'200px',height:'200px',background:'red'})
        }
    }
}
angular.module('Myapp')
       .directive('createUl',createUl);