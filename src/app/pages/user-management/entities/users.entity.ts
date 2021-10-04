export class User {
    gender?: string;
    name?: Name;
    picture?: Picture;
    email?: string;
    nat?: string;
}

interface Name {
    title: string;
    first: string;
    last: string;
}

interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

// -- TODO: add object type for see or exclude seed info

class User2 {
    gender?: string;
    name?: Name;
    picture?: Picture;
    email?: string;
    nat?: string;

    constructor(user: User) {
        this.gender = user?.gender;
        this.name = user?.name;
        this.picture = user?.picture;
        this.email = user?.email;
        this.nat = user?.nat;
    }

    public get fullname() {
        return `${this.name?.first} ${this.name?.last}`;
    }

    public get firstName() {
        return `${this.name?.first}`;
    }

    public get lastName() {
        return `${this.name?.last}`;
    }

    public get displayPicture() {
        return `${this.picture?.thumbnail}`;
    }
}

