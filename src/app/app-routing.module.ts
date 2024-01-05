import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgLevelComponent } from './dashboard/org-level/org-level.component';
import { EnterpriseLevelComponent } from './dashboard/enterprise-level/enterprise-level.component';
import { ImpactAnalysisComponent } from './dashboard/impact-analysis/impact-analysis.component';


const routes: Routes = [
  { path: '', component: OrgLevelComponent },
  { path: 'organization-level', component: OrgLevelComponent },
  { path: 'enterprise-level', component: EnterpriseLevelComponent },
  { path: 'impact', component: ImpactAnalysisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
