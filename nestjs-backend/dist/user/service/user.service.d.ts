import { UserEntity } from './../models/user.entity';
import { User } from '../models/user.interface';
import { AuthService } from 'src/auth/services/auth.service';
import { Repository } from 'typeorm';
import { Observable } from 'rxjs';
export declare class UserService {
    private readonly userRepository;
    private authService;
    constructor(userRepository: Repository<UserEntity>, authService: AuthService);
    create(user: User): Observable<User>;
    findOne(id: number): Observable<User>;
    findAll(): Observable<User[]>;
    deleteOne(id: number): Observable<any>;
    updateOne(id: number, user: User): Observable<any>;
    login(user: User): Observable<string>;
    validateUser(email: string, password: string): Observable<User>;
}
