import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'analog-query-home',
  
  imports: [AnalogWelcomeComponent],
  template: `
     <analog-query-analog-welcome/>
  `,
})
export default class HomeComponent {
}
