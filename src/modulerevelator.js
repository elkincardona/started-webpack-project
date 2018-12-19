export default (function() {

var name = 'Elkin';

function getName() {
    return processName();
}

function processName(){
    return name = name + ' - proccesed in module revelator';
}


return {
    name: getName
}


})();