import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Supply } from '../interfaces/supply';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css'],
})
export class SuppliesComponent implements OnInit {
  onPacking: boolean = false;

  onDefault: boolean = true;
  onCamping: boolean = false;
  onKitchen: boolean = false;
  onBBQ: boolean = false;
  onFirepit: boolean = false;
  onElectric: boolean = false;

  constructor(private _vps: ViewportScroller) { }

  supplies: Supply[] = [
    {
      name: 'Tent',
      type: 'Default',
      needed: true,
    },
    {
      name: 'Tarp',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Sleeping bag',
      type: 'Default',
      needed: true,
    },
    {
      name: 'Pillow',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Axe',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Knife',
      type: 'Default',
      needed: true,
    },
    {
      name: 'Fishing Pole',
      type: 'Default',
      needed: true,
    },
    {
      name: 'Water jugs',
      type: 'Default',
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
      name: 'Portable stove',
      type: 'Electric',
      needed: true,
    },
    {
      name: 'Griddle',
      type: 'Electric',
      needed: true,
    },
    {
      name: 'Air mattress',
      type: 'Electric',
      needed: true,
    },
    {
      name: 'Air pump',
      type: 'Electric',
      needed: true,
    },
    {
      name: 'Phone charger',
      type: 'Electric',
      needed: true,
    },
    {
      name: 'Firewood',
      type: 'Firepit',
      needed: true,
    },
    {
      name: 'Roasting sticks',
      type: 'Firepit',
      needed: true,
    },
    {
      name: 'Fire starters',
      type: 'Firepit',
      needed: true,
    },
    {
      name: 'Pudgy pie iron',
      type: 'Firepit',
      needed: true,
    },
    {
      name: 'Flint striker',
      type: 'Firepit',
      needed: true,
    },
    {
      name: 'Fire Pit Grill',
      type: 'Firepit',
      needed: true,
    },
    {
      name: 'Fire pit pot (& pot lifter)',
      type: 'Firepit',
      needed: true,
    },
    {
      name: 'Dutch oven',
      type: 'Firepit',
      needed: true,
    },
    {
      name: 'Sleeping pads',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Water',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Folding chairs',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Butane lighter',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'First aid kit',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Lantern fuel',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Batteries',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Headlamp',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Bug spray',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Matchbox',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Scissors',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Toothbrush',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Toothpaste',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Hat/cap',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Swimsuit',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Binoculars',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Candles',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Pen and paper',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Whistle',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Sunblock',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Flashlight',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Rope',
      type: 'Camping',
      needed: true,
    },

    {
      name: 'Cups/mugs',
      type: 'Kitchen',
      needed: true,
    },
    {
      name: 'Outdoor tableware',
      type: 'Kitchen',
      needed: true,
    },
    {
      name: 'Utensils',
      type: 'Kitchen',
      needed: true,
    },
    {
      name: 'Dish brush/scraper',
      type: 'Kitchen',
      needed: true,
    },
    {
      name: 'Hand sanitizer',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Towel',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Mosquito incense repellent',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Mosquito net',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Portable propane stove',
      type: 'Kitchen',
      needed: true,
    },
    {
      name: 'Portable charcoal grill',
      type: 'Kitchen',
      needed: true,
    },
    {
      name: 'Folding chairs',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Camp table',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Table cloth',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Hammock',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Multi-tool',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Duct tape',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Mosquito net',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Mallet or hammer',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Tent stakes',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Broom/dustpan',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Trash/recycling bags',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Bottle opener',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Can opener',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Cool and dry food storage containers',
      type: 'Kitchen',
      needed: true,
    },
    {
      name: 'Foil',
      type: 'Kitchen',
      needed: true,
    },
    {
      name: 'Bags',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Navigation tools',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Wildlife and field guides',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Dry bag/stuff sack',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Star Chart/night-sky identifier',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Moisture-wicking clothing',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Boots/shoes/sandals',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Sleepwear',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Jacket',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Rainwear',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Swim suit',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Toilet paper',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Menstrual products',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Prescription medications',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Baby wipes',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Brush/comb',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Mirror',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Sunshade, tarp or screen house',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Deodorant',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Razer/shaving cream',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Shampoo',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Cooking oil/Pam spray',
      type: 'Kitchen',
      needed: true,
    },
    {
      name: 'Mixing bowls',
      type: 'Kitchen',
      needed: true,
    },
    {
      name: 'Measuring cups',
      type: 'Kitchen',
      needed: true,
    },
    {
      name: 'Water filter/purifier',
      type: 'Camping',
      needed: true,
    },
    {
      name: 'Charcoal lighter fluid',
      type: 'BBQ',
      needed: true,
    },
    {
      name: 'Charcoal',
      type: 'BBQ',
      needed: true,
    },
    {
      name: 'BBQ brush',
      type: 'BBQ',
      needed: true,
    },
    {
      name: 'Smoking chips',
      type: 'BBQ',
      needed: true,
    },
    {
      name: 'Heat resistant gloves',
      type: 'BBQ',
      needed: true,
    },
    {
      name: 'Bamboo skewer',
      type: 'BBQ',
      needed: true,
    },
    {
      name: 'Stainless steeel turner/tongs',
      type: 'BBQ',
      needed: true,
    },
    {
      name: 'Meat thermometer',
      type: 'BBQ',
      needed: true,
    },
  ];

  searchTerm: string = '';

  ngOnInit(): void {
    this.showFilteredList('Default');
  }

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
    this.scrollFn('content');
    return this.supplies.filter((item) => {
      return item.needed === true;
    });
  };

  showFilteredCampingCategory = (type: string): void => {
    if (type === 'Camping') {
      this.resetTypes();
      this.onCamping = !this.onCamping;
    } else if (type === 'Kitchen') {
      this.resetTypes();
      this.onKitchen = !this.onKitchen;
    } else if (type === 'BBQ') {
      this.resetTypes();
      this.onBBQ = !this.onBBQ;
    } else if (type === 'Firepit') {
      this.resetTypes();
      this.onFirepit = !this.onFirepit;
    } else if (type === 'Electric') {
      this.resetTypes();
      this.onElectric = !this.onElectric;
    } else if (type === 'Default') {
      this.resetTypes();
      this.onDefault = !this.onDefault;
    } else if (type === 'All') {
      this.onCamping = true;
      this.onKitchen = true;
      this.onBBQ = true;
      this.onFirepit = true;
      this.onElectric = true;
      this.onDefault = true;
    }
  };
  resetTypes = (): void => {
    this.onPacking = false;
    this.onCamping = false;
    this.onDefault = false;
    this.onKitchen = false;
    this.onBBQ = false;
    this.onFirepit = false;
    this.onElectric = false;
  };
  showFilteredList = (type: string): Supply[] => {
    return this.supplies.filter((item) => {
      return item.type === type;
    });
  };
  convertToPdf = () => {
    var container = document.getElementById('content') as HTMLImageElement;
    html2canvas(container).then((canvas) => {
      var imgWidth = 208;
      var pageHeight = 695;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('packinglist.pdf');
    });
  };
  scrollFn(anchor: string): void {
    this._vps.scrollToAnchor(anchor);
  }
}
