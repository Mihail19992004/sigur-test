import {makeAutoObservable, makeObservable} from "mobx";
class User {
    user = {}
    constructor() {
        makeAutoObservable(this)
    }
    firstStepAdd(values) {
        this.user = {...this.user, ...values}
        console.log(this.user)
    }
}

export default new User()