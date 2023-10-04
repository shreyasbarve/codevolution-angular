import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  // selector: '.app-test', // now used as a class <div class='app-test'/>
  // selector: '[app-test]', // now used as an attribute <div app-test/>
  templateUrl: './test.component.html',
  // template: '<div>Inline Template</div>',
  // template: `<div>Inline Template</div>`,
  // styles: [
  //   `
  //     div {
  //       color: red;
  //     }
  //   `,
  // ],
  styleUrls: ['./test.component.css'],
})
export class TestComponent {}
