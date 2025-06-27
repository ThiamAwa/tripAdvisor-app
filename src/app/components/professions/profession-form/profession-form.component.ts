import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfessionService } from '../../../services/profession.service';
import { Router } from '@angular/router';
import { Profession } from '../../../models/profession.model';


@Component({
  selector: 'app-profession-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profession-form.component.html',
  styleUrl: './profession-form.component.css'
})
export class ProfessionFormComponent {
  profession: Profession = {
    id: 0,
    code: '',
    designation: '',
    service: '',
    adresse: '',
    entreprise: ''
  };

  constructor(private professionService: ProfessionService, private router: Router) {}

  onSubmit(): void {
    this.professionService.create(this.profession).subscribe({
      next: () => this.router.navigate(['/profession']),
      error: err => console.error('Erreur lors de la création :', err)
    });
  }
  onReset(): void {
    this.profession = {
      id: 0,
      code: '',
      designation: '',
      service: '',
      adresse: '',
      entreprise: ''
    };
  }

}
