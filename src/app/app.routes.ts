import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';
import { UserFormPageComponent } from './pages/user-form-page/user-form-page.component';
import { UserEditPageComponent } from './pages/user-edit-page/user-edit-page.component';
import { ProfessionEditPageComponent } from './pages/profession-edit-page/profession-edit-page.component';
import { ProfessionFormPageComponent } from './pages/profession-form-page/profession-form-page.component';
import { ProfessionListPageComponent } from './pages/profession-list-page/profession-list-page.component';




export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
  //User
  { path: 'utilisateur', component: UserListPageComponent },
  { path: 'addutilisateur', component: UserFormPageComponent },
  {path: 'editutilisateur/:id',component :UserEditPageComponent},
  //Profession
  { path: 'profession', component: ProfessionListPageComponent },            
  { path: 'addprofession', component: ProfessionFormPageComponent },          
  { path: 'editprofession/:id', component: ProfessionEditPageComponent },   


];

