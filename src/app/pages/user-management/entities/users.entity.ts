export interface User {
    gender: string;
    name: Name;
    picture: Picture;
    email: string;
    nat: string;
    id: UserId;
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

interface UserId {
    name: string;
    value: string;
}

// -- TODO: add object type for see or exclude seed info

export class Model {
    gender?: string;
    name?: Name;
    picture?: Picture;
    email?: string;
    nat?: string;
    id?: UserId;

    constructor(user: User) {
        this.gender = user?.gender;
        this.name = user?.name;
        this.picture = user?.picture;
        this.email = user?.email;
        this.nat = user?.nat;
        this.id = user.id;
    }

    public get title() {
        return this.name?.title ?? '';
    }

    public set title(value: string) {
        if (this.name) {
            this.name.title = value;
        }
    }

    public get fullname() {
        return `${this.name?.first} ${this.name?.last}`;
    }

    public set firstName(value: string) {
        if (this.name) {
            this.name.first = value;
        }
    }

    public get firstName() {
        return this.name?.first ?? '';
    }

    public set lastName(value: string) {
        if (this.name) {
            this.name.last = value;
        }
    }

    public get lastName() {
        return this.name?.last ?? '';
    }

    public get displayPicture() {
        return this.picture?.thumbnail;
    }

    public get userId() {
        return this.id?.value;
    }
}

