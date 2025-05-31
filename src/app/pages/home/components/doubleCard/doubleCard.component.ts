import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Config } from '../../../../db/ConfigOPtions';

@Component({
  selector: 'double-card',
  imports: [],
  templateUrl: './doubleCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoubleCardComponent { 
  imgs: String[] = Config.EcommerceConfig.doubleCardImgs
 }
