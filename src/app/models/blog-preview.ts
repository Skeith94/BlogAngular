export class BlogPreview {
    id_post: string;
    
    user:User;
    titolo:string;
    anteprima:string;
    testo: string;
    modifiedat:string;
    createdAt:string;
    numeroCommenti:string;
    //assign vals from json to properties
    constructor(values: Object = {}) { 
     Object.assign(this, values);
    }
}

export class User {
    id:string;
    username:string;
    roles:BlogRoles[];
}

export class BlogRoles {
    name:string;
    id:string;
}


