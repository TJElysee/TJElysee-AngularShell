export interface ApiResult<T> {
    results: T[];
    info: Info;
}

interface Info {
    seed: string;
    results: number;
    page: number;
    version: string;
}

// export interface Result {
//     gender: Gender;
//     name: Name;
//     email: string;
//     id: ID;
//     nat: string;
// }

// export enum Gender {
//     Female = "female",
//     Male = "male",
// }

// export interface ID {
//     name: string;
//     value: null | string;
// }

// export interface Name {
//     title: Title;
//     first: string;
//     last: string;
// }

// export enum Title {
//     MS = "Ms",
//     Miss = "Miss",
//     Mr = "Mr",
// }
