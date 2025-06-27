import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { FooterComponent } from '../../components/layout/footer/footer.component';
import { SidebarComponent } from '../../components/layout/sidebar/sidebar.component';
import { UserListComponent } from '../../components/users/user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserEditComponent } from '../../components/users/user-edit/user-edit.component';
@Component({
  selector: 'app-user-edit-page',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent,UserListComponent,CommonModule,RouterModule,UserEditComponent],
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.css']
})
export class UserEditPageComponent {

}
