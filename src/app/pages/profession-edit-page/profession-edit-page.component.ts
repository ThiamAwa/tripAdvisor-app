import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { FooterComponent } from '../../components/layout/footer/footer.component';
import { SidebarComponent } from '../../components/layout/sidebar/sidebar.component';
import { UserListComponent } from '../../components/users/user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { ProfessionEditComponent } from '../../components/professions/profession-edit/profession-edit.component';

@Component({
  selector: 'app-profession-edit-page',
  standalone: true,
  imports: [RouterOutlet, 
      HeaderComponent, 
      FooterComponent, 
      SidebarComponent,
      UserListComponent,
      CommonModule,
      ProfessionEditComponent ],
  templateUrl: './profession-edit-page.component.html',
  styleUrl: './profession-edit-page.component.css'
})
export class ProfessionEditPageComponent {

}
