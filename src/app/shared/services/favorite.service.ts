import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class FavoriteService {
  public removeFavorites$: Subject<void> = new Subject();

  public set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  public get(key: string): string[] {
    try {
      return JSON.parse(localStorage.getItem(key) as string);
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return [];
    }
  }
}
