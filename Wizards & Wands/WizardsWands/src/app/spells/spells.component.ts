import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterModule } from '@angular/router';
import { SpellService } from '../spell.service';

interface Spell {
  id: string;
  attributes: {
    name: string;
    effect: string;
    image: string | null;
  };
}

@Component({
  selector: 'app-spell-list',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule, NavbarComponent]
})
export class SpellsComponent implements OnInit {
  spells: Spell[] = [];

  constructor(private spellService: SpellService) { }

  ngOnInit(): void {
    this.spellService.getSpells().subscribe(data => {
      this.spells = data.data.map((spell: any) => {
        if (!spell.attributes.image) {
          spell.attributes.image = 'assets/spell.jpg';
        }
        return spell;
      });
    });
  }
}
