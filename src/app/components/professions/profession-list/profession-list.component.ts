import { Component, OnInit, inject } from '@angular/core';
import Swal from 'sweetalert2';
import { Profession } from '../../../models/profession.model';
import { ProfessionService } from '../../../services/profession.service';
import { CommonModule } from '@angular/common';       
import { FormsModule } from '@angular/forms';         
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-profession-list',
  standalone: true,
  imports: [CommonModule,RouterModule, FormsModule],
  templateUrl: './profession-list.component.html',
  styleUrl: './profession-list.component.css'
})
export class ProfessionListComponent implements OnInit{
      professions: Profession[] = [];
      codeFilter: string = '';
      designationFilter: string = '';

    private professionService = inject(ProfessionService);

      ngOnInit(): void {
        this.loadProfessions();
      }

        loadProfessions(): void {
    this.professionService.getAll().subscribe({
      next: (data) => this.professions = data,
      error: (err) => console.error('Erreur lors du chargement des professions :', err)
    });
  }

  onDelete(id: number): void {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: "Cette action supprimera la profession définitivement.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.professionService.delete(id).subscribe({
          next: () => {
            this.loadProfessions();
            Swal.fire('Supprimé !', 'La profession a été supprimée.', 'success');
          },
          error: err => {
            Swal.fire('Erreur', 'Une erreur est survenue lors de la suppression.', 'error');
            console.error('Erreur suppression profession :', err);
          }
        });
      }
    });
  }

  filteredProfessions(): Profession[] {
    return this.professions.filter(profession =>
      (!this.codeFilter || profession.code.toLowerCase().includes(this.codeFilter.toLowerCase())) &&
      (!this.designationFilter || profession.designation.toLowerCase().includes(this.designationFilter.toLowerCase()))
    );
  }
}
