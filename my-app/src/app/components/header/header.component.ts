import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Component( {
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
} )
    
export class HeaderComponent {
    constructor ( private authService: AuthService ) { }
    
    logout(){
        return this.authService.logout();
    }

    get authServiceAccess() {
        return this.authService.isAuthenticated();
    }
}
