import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  template: `
    <!-- ATTRIBUTE AND PROPERTY BINDING -->
    <h2>Welcome {{ name }}</h2>
    <h2>{{ 2 + 2 }}</h2>
    <h2>{{ 'Welcome ' + name + ' Barve' }}</h2>
    <h2>{{ name.length }}</h2>
    <h2>{{ name.toUpperCase() }}</h2>
    <h2>{{ greetUser() }}</h2>
    <!-- <h2>{{a = 2+2}}</h2> // will fail as binding cannot contain assignments -->
    <!-- <h2>{{window.location.href}}</h2> // will also throw error -->
    <h2>{{ siteURL }}</h2>

    <!-- attribute and properties and property binding -->
    <input [id]="myId" type="text" value="Shreyas" />

    <!-- will still consider disabled as true -->
    <input
      disabled="false"
      id="{{ myId }}"
      type="text"
      value="disabled does not work"
    />

    <!-- will consider disabled as false -->
    <input
      [disabled]="isDisabled"
      id="{{ myId }}"
      type="text"
      value="disabled work here"
    />
    <!-- Same as above -->
    <input
      bind-disabled="isDisabled"
      id="{{ myId }}"
      type="text"
      value="disabled work here using bind-"
    />

    <!-- CLASS BINDING -->
    <h2 class="text-success">Success font</h2>
    <h2 [class]="successClass">Success font using class binding</h2>
    <h2 class="text-special" [class]="successClass">Test Text</h2>

    <!-- conditional apply single class -->
    <h2 [class.text-danger]="hasError">Danger if hasError is true</h2>

    <!-- using ngclass directive -->
    <h2 [ngClass]="messageClasses">Using ngClass Directive</h2>

    <!-- STYLE BINDINGS -->
    <h2 [style.color]="hasError ? 'red' : 'green'">Style binding</h2>
    <h2 [style.color]="highlightColor">Style binding 2</h2>
    <h2 [ngStyle]="titleStyles">titleStyles</h2>

    <!-- EVENT BINDING -->
    <button (click)="onClick($event)">Greet</button>
    {{ greeting }}
    <button (click)="greeting = 'Welcome Shreyas'">Greet 2</button>

    <!-- TEMPLATE REFERENCE VARIABLE -->
    <input type="text" #myInput />
    <button (click)="logMessage(myInput.value)">Log</button>
    <!-- logs the value -->
    <button (click)="logMessage(myInput)">Log</button>
    <!-- logs the HTML element -->

    <!-- TWO WAY BINDING -->
    <input type="text" [(ngModel)]="name2Way" />
    {{ name2Way }}

    <!-- STRUCTURAL DIRECTIVES -->
    <!-- ngIf Directive -->
    <h2 *ngIf="true">This is true ngIf</h2>
    <h2 *ngIf="false">
      This is false ngIf so it will not be visible in the webpage
    </h2>

    <h2 *ngIf="displayName; else elseBlock">displayName is true</h2>

    <ng-template #elseBlock>
      <h2>displayName is false</h2>
    </ng-template>

    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
      <h2>thenBlock</h2>
    </ng-template>
    <ng-template #elseBlock>
      <h2>elseBlock</h2>
    </ng-template>

    <!-- ngSwitch Directive -->
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked red color</div>
      <div *ngSwitchCase="'blue'">You picked blue color</div>
      <div *ngSwitchCase="'green'">You picked green color</div>
      <div *ngSwitchDefault>Pick again</div>
    </div>

    <!-- ngFore Directive -->
    <div *ngFor="let color of colors; index as i">
      <!-- return true if it is the first element else false -->
      <!-- <div *ngFor="let color of colors; first as f"> -->
      <!-- return true if it is the last element else false -->
      <!-- <div *ngFor="let color of colors; last as f"> -->
      <!-- return true if it is the odd element else false -->
      <!-- return true if it is the odd element else false -->
      <!-- <div *ngFor="let color of colors; even as f"> -->
      <!-- <div *ngFor="let color of colors; even as f"> -->
      <h2>{{ i }}. {{ color }}</h2>
    </div>
  `,
  styles: [
    `
      .text-success {
        color: green;
      }

      .text-danger {
        color: red;
      }

      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class BindingComponent {
  // attribute and property binding
  public name = 'Shreyas';
  public siteURL = window.location.href;
  public myId = 'testId';
  public isDisabled = false;

  // class binding
  public successClass = 'text-success';
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };

  // style binding
  public highlightColor = 'orange';
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic',
  };

  // event binding
  public greeting = '';

  // two way binding
  public name2Way = '';

  // structural directives
  // ngIf directive
  displayName = true;

  // ngSwitch directive
  public color = 'red';

  // ngFor directive
  public colors = ['red', 'blue', 'green', 'yellow'];

  greetUser(): string {
    return 'Hello ' + this.name;
  }

  onClick(event: any): void {
    console.log(event);
    this.greeting = 'Welcome to Angular by Google';
    console.log(event.type);
  }

  logMessage(value: any): void {
    console.log(value);
  }
}
