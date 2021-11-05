import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public locationPath: string;
  constructor(private location: Location ) { this.locationPath = location.path(); }

}
