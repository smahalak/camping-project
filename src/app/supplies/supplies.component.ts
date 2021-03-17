import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Supply } from '../interfaces/supply';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css'],
})
export class SuppliesComponent implements OnInit {
  constructor() { }

  supplies: Supply[] = [
    {
      name: 'Tent',
      type: 'Campsite',
      needed: true,
    }, {
      name: 'Tarp',
      type: 'Campsite',
      needed: true,
    },
    {
      name: 'Sleeping bag',
      type: 'Campsite',
      needed: true,
    },
    {
      name: 'Pillow',
      type: 'Campsite',
      needed: true,
    },
    {
      name: 'Axe',
      type: 'Tools',
      needed: true,
    },
    {
      name: 'Knife',
      type: 'Tools',
      needed: true,
    },
    {
      name: 'Tent',
      type: 'Campsite',
      needed: true,
    },

    {
      name: 'Plates/Bowls',
      type: 'Kitchen',
      needed: true,
    },
    {
      name: 'Cutting board',
      type: 'Kitchen',
      needed: true,
    },
    {
      name: 'Coffee maker',
      type: 'Electric',
      needed: true,
    },
    {
      name: 'Air pump',
      type: 'Electric',
      needed: true,
    },
    {
      name: 'Firewood',
      type: 'Firepit',
      needed: true,
    },
    {
      name: 'Roasting Sticks',
      type: 'Firepit',
      needed: true,
    },
    {
      name: 'Charcoal',
      type: 'BBQ',
      needed: true,
    },
    {
      name: 'Charcoal lighter fluid',
      type: 'BBQ',
      needed: true,
    },

  ]

  searchTerm: string = '';

  ngOnInit(): void { }


  setSearchTerm = (form: NgForm): void => {
    this.searchTerm = form.form.value.filter;
  }

  filter = (term: string): Supply[] => {
    return this.supplies.filter((item) => {
      return item.name.toLowerCase().includes(term.toLowerCase());
    })
  }

  find = (term: string): boolean => {
    return this.supplies.some((item) => {
      return item.name.toLowerCase().includes(term.toLowerCase());
    })
  }

  addItem = (form: NgForm): void => {

    let newItem: Supply = {
      name: form.form.value.name,
      type: 'campsite',
      needed: true,
    }

    if (!this.find(form.form.value.name)) {
      this.supplies.push(newItem);
    }
  }

  neededItem = (item: Supply): void => {
    item.needed = !item.needed;
  }

}
