export class ElkinComponent {
    constructor(name) {
        this.name = name;
    }
    get showName() {
        alert(this.name + ' - property');
    }

    static staticMethod() {
        alert('call static method');
    }
    

    realMethod() {
        alert('real method');
    }
}