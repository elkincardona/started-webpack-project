function jsClass(name, lastname) {
    this.name = name;
    this.lastname = lastname;
}

jsClass.prototype.getName = function() {
    alert( `${this.name} - ${this.lastname} with js clasic class` )
}


export default jsClass;
