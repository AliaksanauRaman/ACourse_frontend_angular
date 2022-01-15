import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'ac-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexPageComponent {

}
