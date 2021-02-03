import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructorComponent } from './components/instructor/instructor.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SubjectComponent } from './components/subject/subject.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, 
    children: [
    {
      path: 'Instructors',
      component: InstructorComponent
    },
    {
      path: 'Subjects',
      component: SubjectComponent
    }
  ] 
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
