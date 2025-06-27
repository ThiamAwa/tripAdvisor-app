import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl= `${environment.apiUrl}/users`;
  

  constructor(private http: HttpClient) { }


  /**
   * Récupère la liste de tous les utilisateurs.
   * @returns Un tableau d'utilisateurs 
   */
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  /**
   * Récupère les informations d'un utilisateur par son ID.
   * @param id L'identifiant de l'utilisateur
   * @returns L'utilisateur correspondant
   */

   getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
  
  /**
   * Crée un nouvel utilisateur.
   * @param user Les données du nouvel utilisateur
   * @returns L'utilisateur créé avec son ID génér
   */
  create(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  /**
   * Mettre a jour les informations d'un utilisateur existant
   * @param id L'identifiant de l'utilisateur à modifier
   * @param user Les nouvelles données de l'utilisateur
   * @returns L'utilisateur mis à jour
   */
  update(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  /**
   * Supprime un utilisateur par son ID 
   * @param id L'identifiant de l'utilisateur à supprimer
   * @returns Une réponse vide (void) si la suppression est réussie
   */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
