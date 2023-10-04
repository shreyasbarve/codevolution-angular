import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
    <h2>{{ 'shreyas in lowercase using pipes: ' + name | lowercase }}</h2>
    <h2>{{ 'shreyas in uppercase using pipes: ' + name | uppercase }}</h2>
    <h2>{{ 'shreyas in titlecase using pipes: ' + name | titlecase }}</h2>

    <h2>{{ name | slice : 3 : 5 }}</h2>

    <h2>{{ person | json }}</h2>

    <h2>{{ 5.678 | number : '1.2-3' }}</h2>
    <h2>{{ 5.678 | number : '3.4-5' }}</h2>
    <h2>{{ 5.678 | number : '3.1-2' }}</h2>

    <h2>{{ 0.25 | percent }}</h2>

    <!-- default currency is usd -->
    <h2>{{ 0.25 | currency }}</h2>

    <!-- custom currency -->
    <h2>{{ 0.25 | currency : 'INR' }}</h2>

    <h2>{{ date }}</h2>
    <h2>{{ date | date : 'short' }}</h2>
    <h2>{{ date | date : 'shortDate' }}</h2>
    <h2>{{ date | date : 'shortTime' }}</h2>
    <h2>{{ date | date : 'medium' }}</h2>
    <h2>{{ date | date : 'mediumDate' }}</h2>
    <h2>{{ date | date : 'mediumTime' }}</h2>
  `,
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  name = 'shreyas';

  person = {
    firstname: 'John',
    lastname: 'Doe',
  };

  date = new Date();
}
