import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,RouterModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  nameFilter: string = '';
  titleFilter: string = '';
  private userService = inject(UserService);

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAll().subscribe({
      next: (data) => this.users = data,
      error: (err) => console.error('Erreur lors du chargement des utilisateurs :', err)
    });
  }

  

  onEdit(userId: number): void {
    console.log('Edit user with ID:', userId);
    
  }

  onDelete(userId: number): void {
  Swal.fire({
    title: 'Êtes-vous sûr ?',
    text: "Cette action supprimera l'utilisateur définitivement.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Oui, supprimer',
    cancelButtonText: 'Annuler'
  }).then((result) => {
    if (result.isConfirmed) {
      this.userService.delete(userId).subscribe({
        next: () => {
          this.loadUsers(); 
          Swal.fire(
            'Supprimé !',
            'L’utilisateur a été supprimé avec succès.',
            'success'
          );
        },
        error: err => {
          Swal.fire(
            'Erreur',
            'Une erreur est survenue lors de la suppression.',
            'error'
          );
          console.error('Erreur suppression utilisateur :', err);
        }
      });
    }
  });
}

filteredUsers(): User[] {
    return this.users.filter(user =>
      (!this.nameFilter || user.lastName.toLowerCase().includes(this.nameFilter.toLowerCase())) &&
      (!this.titleFilter || user.title.toLowerCase().includes(this.titleFilter.toLowerCase()))
    );
  }


}
