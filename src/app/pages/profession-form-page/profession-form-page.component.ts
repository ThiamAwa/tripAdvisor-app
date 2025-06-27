import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { FooterComponent } from '../../components/layout/footer/footer.component';
import { SidebarComponent } from '../../components/layout/sidebar/sidebar.component';
import { UserListComponent } from '../../components/users/user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { ProfessionFormComponent } from '../../components/professions/profession-form/profession-form.component';

@Component({
  selector: 'app-profession-form-page',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent,UserListComponent,CommonModule,ProfessionFormComponent ],
  templateUrl: './profession-form-page.component.html',
  styleUrl: './profession-form-page.component.css'
})
export class ProfessionFormPageComponent {

}
