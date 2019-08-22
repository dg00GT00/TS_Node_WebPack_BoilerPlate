import {View} from "./View";
import {IUserProps, User} from "../models/User";

export class UserShow extends View<User, IUserProps> {
    template(): string {
        return `
            <div>
                <h1>User Detail
                    <div>User Name: ${this.model.get('name')}</div>
                    <div>User Age: ${this.model.get('age')}</div>
                </h1>
            </div>
        `
    }
}
