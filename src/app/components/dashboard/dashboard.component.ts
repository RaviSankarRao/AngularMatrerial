import { Component, OnInit } from '@angular/core';
import { AppComponent, AppComponentGroup } from '../../shared/models/app-component.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public componentGroups: AppComponentGroup[] = [];

  constructor() { }

  ngOnInit() {

    const formControls: AppComponent[] = [];

    formControls.push({ name: 'Input', routeLink: null });
    formControls.push({ name: 'Radio button', routeLink: null });
    formControls.push({ name: 'Checkbox', routeLink: null });
    formControls.push({ name: 'Select', routeLink: null });
    formControls.push({ name: 'Slider', routeLink: null });
    formControls.push({ name: 'Slide toggle', routeLink: null });
    formControls.push({ name: 'Date picker', routeLink: null });
    formControls.push({ name: 'Autocomplete', routeLink: null });

    this.componentGroups.push({ name: 'Form controls', components : formControls});

    const buttons: AppComponent[] = [];

    buttons.push({ name: 'Button', routeLink: null });
    buttons.push({ name: 'button toggle', routeLink: null });
    buttons.push({ name: 'Icon', routeLink: null });
    buttons.push({ name: 'Chips', routeLink: null });
    buttons.push({ name: 'Progress spinner', routeLink: null });
    buttons.push({ name: 'Progress bar', routeLink: null });

    this.componentGroups.push({ name: 'BUTTONS, INDICATORS & ICONS', components: buttons });

    const navigation: AppComponent[] = [];

    navigation.push({ name: 'Menu', routeLink: null });
    navigation.push({ name: 'Side nav', routeLink: null });
    navigation.push({ name: 'Toolbar', routeLink: null });

    this.componentGroups.push({ name: 'Navigation', components: navigation });

    const layout: AppComponent[] = [];

    layout.push({ name: 'List', routeLink: null });
    layout.push({ name: 'Grid list', routeLink: null });
    layout.push({ name: 'Card', routeLink: null });
    layout.push({ name: 'Tab', routeLink: null });

    this.componentGroups.push({ name: 'layout', components: layout });
  }

}
