import { Observable } from 'rxjs';
import { User } from './../models/user.interface';
import { UserService } from './../service/user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(user: User): Observable<User | Object>;
    login(user: User): Observable<Object>;
    findOne(params: any): Observable<User>;
    findAll(): Observable<User[]>;
    deleteOne(id: string): Observable<any>;
    updateOne(id: string, user: User): Observable<any>;
}
