import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Supply } from '../interfaces/supply';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css'],
})
export class SuppliesComponent implements OnInit {
  onPacking: boolean = false;

  onCampsite: boolean = false;
  onKitchen: boolean = false;
  onBBQ: boolean = false;
  onFirepit: boolean = false;
  onElectric: boolean = false;

  constructor() { }

  supplies: Supply[] = [
    {
      name: 'Tent',
      type: 'Camping ',
      needed: true,
    },
    {
      name: 'Tarp',
      type: 'Camping ',
      needed: true,
    },
    {
      name: 'Sleeping bag',
      type: 'Camping ',
      needed: true,
    },
    {
      name: 'Pillow',
      type: 'Camping ',
      needed: true,
    },
    {
      name: 'Axe',
      type: 'Camping ',
      needed: true,
    },
    {
      name: 'Knife',
      type: 'Camping',
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
  ];

  searchTerm: string = '';

  ngOnInit(): void { }

  setSearchTerm = (form: NgForm): void => {
    this.searchTerm = form.form.value.filter;
  };

  filter = (term: string): Supply[] => {
    return this.supplies.filter((item) => {
      return item.name.toLowerCase().includes(term.toLowerCase());
    });
  };

  find = (term: string): boolean => {
    return this.supplies.some((item) => {
      return item.name.toLowerCase().includes(term.toLowerCase());
    });
  };
  deleteItem = (index: number): void => {
    this.supplies.splice(index, 1);
  };


  addItem = (form: NgForm): void => {
    let newItem: Supply = {
      name: form.form.value.name,
      type: form.form.value.type,
      needed: true,
    };

    if (!this.find(form.form.value.name)) {
      this.supplies.push(newItem);
      console.log('test');
    }
  };

  neededItem = (item: Supply): void => {
    item.needed = !item.needed;
  };


  showDiv = (onPacking: boolean): void => {
    this.onPacking = !this.onPacking;
  };
  showPackingList = (): Supply[] => {
    return this.supplies.filter((item) => {
      return item.needed === true;
    });
  };





  showFilteredCampingCategory = (type: string): Supply[] => {
    return this.supplies.filter((item) => {
      return item.type === type;
      if (type === 'Camping') {
        this.onCampsite = !this.onCampsite;
      } else if (type === 'Kitchen') {
        this.onKitchen = !this.onKitchen;
      } else if (type === 'BBQ') {
        this.onBBQ = !this.onBBQ;
      } else if (type === 'Firepit') {
        this.onFirepit = !this.onFirepit;
      } else if (type === 'Electric') {
        this.onElectric = !this.onElectric;
      }

    });
  };


}
