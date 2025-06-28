import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Profession } from '../../../models/profession.model';
import { ProfessionService } from '../../../services/profession.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-profession-edit',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule ],
  templateUrl: './profession-edit.component.html',
  styleUrl: './profession-edit.component.css'
})
export class ProfessionEditComponent implements OnInit{

  professionId!: number;
  profession: Profession = {
    code: '',
    designation: '',
    service: '',
    adresse: '',
    entreprise: ''
  };

  constructor(
      private route: ActivatedRoute,
      private professionService : ProfessionService,
      private router: Router
    ) {}
  
  ngOnInit(): void {
    this.professionId = +this.route.snapshot.paramMap.get('id')!;
    this.professionService.getById(this.professionId).subscribe({  
      next: (data) => this.profession = data,
      error: (err) => console.error('Erreur lors du chargement de profession', err)
    });
  }  

  onSubmit() {
    this.professionService.update(this.professionId, this.profession).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'profession mis à jour avec succès',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['/profession']);
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
