import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { FooterComponent } from '../../components/layout/footer/footer.component';
import { SidebarComponent } from '../../components/layout/sidebar/sidebar.component';
import { UserListComponent } from '../../components/users/user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfessionListComponent } from '../../components/professions/profession-list/profession-list.component';


@Component({
  selector: 'app-profession-list-page',
  standalone: true,
  imports:[RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent,UserListComponent,CommonModule,RouterModule,ProfessionListComponent],
  templateUrl: './profession-list-page.component.html',
  styleUrls: ['./profession-list-page.component.css']
})
export class ProfessionListPageComponent {

}
