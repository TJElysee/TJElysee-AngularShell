export class LoggedInUser {
    constructor(
        public username?: string,
        public password?: string,
        public connectedServer?: string
    ) { }
}