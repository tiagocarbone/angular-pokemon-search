import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { PokemonData } from '../models/pokemonData';
 

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl: string = ''
  private pokeData: PokemonData | any

  constructor(
    private http: HttpClient
  ) { 
    this.baseUrl = environment.pokeApi
  }

  getPokemon(pokemonName: string): Observable<PokemonData> {
    console.log(this.baseUrl)
    this.pokeData = this.http
    .get<PokemonData>(`${this.baseUrl}${pokemonName}`)
    
    console.log(this.pokeData)
    return this.pokeData
    
  }

}

