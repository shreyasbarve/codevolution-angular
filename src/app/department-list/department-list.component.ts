import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li
        (click)="onSelect(department)"
        [class.selected]="isSelected(department)"
        *ngFor="let department of departments"
      >
        <span class="badge">
          {{ department.id }}
        </span>
        {{ department.name }}
      </li>
    </ul>
  `,
  styles: [],
})
export class DepartmentListComponent implements OnInit {
  departments = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Node' },
    { id: 3, name: 'MongoDB' },
    { id: 4, name: 'Ruby' },
    { id: 5, name: 'Bootstrap' },
  ];

  selectedId: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(<string>params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department: any) {
    // this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], { relativeTo: this.route });
  }

  isSelected(department: any) {
    return department.id === this.selectedId;
  }
}
