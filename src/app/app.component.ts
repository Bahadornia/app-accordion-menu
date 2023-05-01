import { Component } from '@angular/core';
import { IMenu, MenuType } from 'ngx-accordion-menu';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  minimize = new Subject<boolean>();
  imageUrl: string;
  menus: IMenu[] = [
    {
      title: 'تست 1',
      type: MenuType.LINK,
      icon: 'alarm-fill',
      index: 1,
      path: '/user',
    },
    {
      index: 2,
      title: 'تست 2',
      type: MenuType.ITEM,
      children: [
        {
          title: 'تست 4',
          type: MenuType.LINK,
          icon: 'balloon-heart-fill',
          route: '/test',
          index: 1,
        },
        {
          title: 'تست 5',
          type: MenuType.LINK,
          icon: 'balloon-heart-fill',
          route: '/test',
          index: 2,
        },
      ],
      icon: 'alarm-fill',
    },
    {
      index: 3,
      title: 'تست 10',
      type: MenuType.ITEM,
      children: [
        {
          title: 'تست 40',
          type: MenuType.LINK,
          icon: 'balloon-heart-fill',
          route: '/test',
          index: 100,
        },
        {
          title: 'تست 50',
          type: MenuType.LINK,
          icon: 'balloon-heart-fill',
          route: '/test',
          index: 2,
        },
      ],
      icon: 'alarm-fill',
    },
    {
      title: 'تست 3',
      type: MenuType.LINK,
      icon: 'alarm-fill',
      index: 4,
      path: 'customer',
    },
  ];
  title = 'app-accordion-menu';
  isMinimized: boolean;
  onMinimize() {
    this.isMinimized = !this.isMinimized;
    this.setMinimize(this.isMinimized);
  }

  setMinimize(value: boolean) {
    this.minimize.next(value);
    console.log(value);
  }
  getMinimize(): Observable<boolean> {
    return this.minimize.asObservable();
  }
}
