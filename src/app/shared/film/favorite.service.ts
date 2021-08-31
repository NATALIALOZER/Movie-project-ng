import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class FavoriteService {
  constructor() {}

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get(key: any) {
    try {
      // @ts-ignore
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }

  getAll(): any{
    let favolist:any = []
    for(let i =0; i < localStorage.length; i++){
      // @ts-ignore
      favolist.push(this.get(localStorage.key(i)))
    }
    console.log(favolist)
    return favolist
  }

  remove(key:string){
    try {
      return localStorage.removeItem(key)
    } catch (e) {
      console.error('Error removing data from localStorage', e);
      return null;
    }
  }
}
