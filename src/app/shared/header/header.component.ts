import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public locationPath: string;
  constructor(private location: Location,
              public auth: AuthService,
              private router: Router
  ) { this.locationPath = location.path(); }

  public logout(): void {
    this.auth.logout();
  }
}
