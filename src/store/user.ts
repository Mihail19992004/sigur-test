import {makeAutoObservable, makeObservable} from "mobx";
class User {
    user = {}
    constructor() {
        makeAutoObservable(this)
    }
    firstStepAdd(values: any) {
        this.user = {...this.user, ...values}
    }
}

export default new User()