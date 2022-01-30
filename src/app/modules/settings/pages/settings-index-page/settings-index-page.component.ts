import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-settings-index-page',
  templateUrl: 'settings-index-page.component.html',
  styleUrls: ['./settings-index-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsIndexPageComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
