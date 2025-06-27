import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { FooterComponent } from '../../components/layout/footer/footer.component';
import { SidebarComponent } from '../../components/layout/sidebar/sidebar.component';
import { UserListComponent } from '../../components/users/user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from '../../components/users/user-form/user-form.component';

@Component({
  selector: 'app-user-form-page',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent,UserListComponent,CommonModule,UserFormComponent ],
  templateUrl: './user-form-page.component.html',
  styleUrl: './user-form-page.component.css'
})
export class UserFormPageComponent {

}
