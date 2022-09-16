export class Tokens {
    access_token:String;
    refresh_token:String;
    roles:String;
    constructor( access_token:String, refresh_token:String,roles:String) { 
     this.access_token=access_token;
     this.refresh_token=refresh_token;
     this.roles=roles;
    }

}