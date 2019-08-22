import {CollectionView} from "./CollectionView";
import {IUserProps, User} from "../models/User";
import {UserShow} from "./UserShow";

export class UserList extends CollectionView<User, IUserProps> {
    renderItem(model: User, itemParent: HTMLElement): void {
        new UserShow(itemParent, model).render();
    }
}
