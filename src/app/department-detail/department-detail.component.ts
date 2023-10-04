import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You Selected department with department id: {{ this.departmentId }}</h3>

    <router-outlet></router-outlet>

    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>

    <p>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
    </p>

    <div>
      <button (click)="goToDepartments()">Back</button>
    </div>
  `,
  styles: [],
})
export class DepartmentDetailComponent implements OnInit {
  departmentId: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // This will not update the id on the view thats why 2nd approach
    // let id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;

    // 2nd approach
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(<string>params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  goToDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', { id: selectedId }]);
    this.router.navigate(['../', { id: selectedId }], {
      relativeTo: this.route,
    });
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
}
