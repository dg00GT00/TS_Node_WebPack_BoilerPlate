import {Model} from "./Model";
import {Attributes} from "./Attributes";
import {ApiSync} from "./ApiSync";
import {Eventing} from "./Eventing";
import {Collection} from "./Collection";


export interface IUserProps {
    name?: string;
    age?: number;
    id?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<IUserProps> {
    static buildUser(attrs: IUserProps): User {
        return new User(
            new Attributes<IUserProps>(attrs),
            new Eventing(),
            new ApiSync<IUserProps>(rootUrl)
        )
    }

    static buildUserCollection(): Collection<User, IUserProps> {
        return new Collection<User, IUserProps>(
            rootUrl,
            (json: IUserProps) => User.buildUser(json));
    }

    setRandomAge(): void {
        const age = Math.round((Math.random() * 1000));
        this.set({age})
    }

}
