import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgLevelComponent } from './dashboard/org-level/org-level.component';
import { EnterpriseLevelComponent } from './dashboard/enterprise-level/enterprise-level.component';
import { ImpactAnalysisComponent } from './dashboard/impact-analysis/impact-analysis.component';
import { SampleApiResponseComponent } from './dashboard/sample-api-response/sample-api-response.component';
import { OrgSeatsComponent } from './dashboard/org-seats/org-seats.component';

const routes: Routes = [
  { path: '', component: OrgLevelComponent },
  { path: 'organization-level', component: OrgLevelComponent },
  { path: 'enterprise-level', component: EnterpriseLevelComponent },
  { path: 'impact', component: ImpactAnalysisComponent },
  { path: 'sample-response', component: SampleApiResponseComponent },
  { path: 'org-seats', component: OrgSeatsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
