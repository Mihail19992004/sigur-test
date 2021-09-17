import { makeAutoObservable, makeObservable } from "mobx";
interface UserProps {
  firstName: string | null;
  photo: string | null;
}
class User {
  user = {};
  constructor() {
    makeAutoObservable(this);
  }
  firstStepAdd(values: any) {
    this.user = { ...this.user, ...values };
  }
}

export default new User();
