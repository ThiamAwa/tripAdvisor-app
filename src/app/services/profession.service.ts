import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profession } from '../models/profession.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {
    private apiUrl = `${environment.apiUrl}/professions`;

   constructor(private http: HttpClient) { }
    /**
   * Récupère la liste de toutes les professions.
   * @returns Un tableau de professions
   */
  getAll(): Observable<Profession[]> {
    return this.http.get<Profession[]>(this.apiUrl);
  }

    /**
   * Récupère les informations d'une profession par son ID.
   * @param id L'identifiant de la profession
   * @returns La profession correspondante
   */
  getById(id: number): Observable<Profession> {
    return this.http.get<Profession>(`${this.apiUrl}/${id}`);
  }

    /**
   * Crée une nouvelle profession.
   * @param profession Les données de la nouvelle profession
   * @returns La profession créée avec son ID généré
   */
  create(profession: Profession): Observable<Profession> {
    return this.http.post<Profession>(this.apiUrl, profession);
  }

    /**
   * Met à jour les informations d'une profession existante.
   * @param id L'identifiant de la profession à modifier
   * @param profession Les nouvelles données de la profession
   * @returns La profession mise à jour
   */
  update(id: number, profession: Profession): Observable<Profession> {
    return this.http.put<Profession>(`${this.apiUrl}/${id}`, profession);
  }

    /**
   * Supprime une profession par son ID.
   * @param id L'identifiant de la profession à supprimer
   * @returns Une réponse vide (void) si la suppression est réussie
   */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
