import { Component } from "@angular/core";

@Component({
  selector: 'df-root',
  template: `
  <div><h1>{{pageTitle}}</h1> 
    <df-services></df-services>
  </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Dynasty Fire Protection'
}
