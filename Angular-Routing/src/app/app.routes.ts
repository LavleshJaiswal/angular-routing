import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

export const routes: Routes = [
    {
        path:'studentLink', component:StudentComponent
      },
      {
        path:'studentdetailsLink', component: StudentDetailsComponent
      }
];
