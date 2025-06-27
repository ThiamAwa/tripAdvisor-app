import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.component.html',
   styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  user = {
  title: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  role:  'User' as 'Admin' | 'User'
};


  constructor(private userService: UserService, private router: Router) {}

  onSubmit(): void {
    console.log('Utilisateur à créer :', this.user);
    this.userService.create(this.user).subscribe({
      next: (data) => {
        console.log('Utilisateur créé :', data);
        this.router.navigate(['/utilisateur']); 
      },
      error: (err) => console.error('Erreur lors de la création :', err),
    });
  }

  onReset(): void {
    this.user = {
      title: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: 'User' as 'Admin' | 'User'
    };
  }

}
