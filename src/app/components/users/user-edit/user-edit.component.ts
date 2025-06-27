import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule ],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {
  userId!: number;
  user: User = {
  title: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  role: 'User'  
};

   constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    this.userService.getById(this.userId).subscribe({
      next: (data) => this.user = data,
      error: (err) => console.error('Erreur lors du chargement de l\'utilisateur', err)
    });
  }
 onSubmit() {
  this.userService.update(this.userId, this.user).subscribe({
    next: () => {
      Swal.fire({
        icon: 'success',
        title: 'Succès',
        text: 'Utilisateur mis à jour avec succès',
        confirmButtonText: 'OK'
      }).then(() => {
        this.router.navigate(['/utilisateur']);
      });
    },
    error: (err) => {
      console.error('Erreur lors de la mise à jour', err);
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Une erreur est survenue lors de la mise à jour',
        confirmButtonText: 'OK'
      });
    }
  });
}

  onReset() {
    this.ngOnInit(); 
  }
 

  

}
