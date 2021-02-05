import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenu } from 'primeng/tabmenu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: MenuItem[] = [];
  activeItem: MenuItem = { label: 'Settings', icon: 'pi pi-fw pi-cog' };

  ngOnInit(): void {

    this.items = [
      { label: 'Settings', icon: 'pi pi-fw pi-cog' },
      { label: 'Employees', icon: 'pi pi-fw pi-users' },
      { label: 'Presence', icon: 'pi pi-fw pi-calendar' }
    ];
    this.activeItem = this.items[0];
  }
  title = 'employeesPresence';

  getActiveItem(tab: TabMenu){
    this.activeItem = tab.activeItem;
  }
}
