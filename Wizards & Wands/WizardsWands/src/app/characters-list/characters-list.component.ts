import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CharacterService } from '../character.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-character-list',
    standalone: true,
    templateUrl: './characters-list.component.html',
    styleUrls: ['./characters-list.component.css'],
    imports: [CommonModule, HttpClientModule, FormsModule, NavbarComponent, RouterModule]
})
export class CharactersListComponent implements OnInit {
  characters: any[] = [];
  filteredCharacters: any[] = [];
  searchTerm: string = '';
  defaultImage: string = 'assets/default_character.jpg';

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((data: any[]) => {
      this.characters = data.map(character => ({
        id: character.id, // Añade el ID del personaje
        name: character.attributes.name || 'Desconocido',
        house: character.attributes.house || 'Desconocido',
        species: character.attributes.species || 'Desconocido',
        weight: character.attributes.weight || 'Desconocido',
        marital_status: character.attributes.marital_status || 'Desconocido',
        nationality: character.attributes.nationality || 'Desconocido',
        alias_names: character.attributes.alias_names.length > 0 ? character.attributes.alias_names : ['Desconocido'],
        gender: character.attributes.gender || 'Desconocido',
        born: character.attributes.born || 'Desconocido',
        image: character.attributes.image || this.defaultImage
      }));
      this.filteredCharacters = this.characters;
    });
  }

  filterCharacters(): void {
    this.filteredCharacters = this.characters.filter(character =>
      character.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
