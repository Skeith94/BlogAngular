export class Tokens {
    access_token:String;
    refresh_token:String;
    
    //assign vals from json to properties
    constructor(values: Object = {}) { 
     Object.assign(this, values);
    }
}