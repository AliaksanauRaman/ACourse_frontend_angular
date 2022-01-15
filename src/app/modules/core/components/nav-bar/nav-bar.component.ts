import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NavBarLink } from '../../types/nav-bar-link.type';

@Component({
  selector: 'ac-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  readonly navBarLinkList: Array<NavBarLink> = [
    {
      text: 'Courses',
      path: '/courses',
    },
    {
      text: 'Settings',
      path: '/settings',
    },
  ];
}
