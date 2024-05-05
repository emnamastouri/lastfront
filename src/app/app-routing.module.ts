import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './main/admin/adminlogin/adminlogin.component';
import { AgentloginComponent } from './main/agent/agentlogin/agentlogin.component';
import { DefaultComponent } from './main/default/default.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddagentComponent } from './main/admin/addagent/addagent.component';
import { ChatComponent } from './main/chat/chat.component';
import { VoirallhostComponent } from './main/partie_reseaux/voirallhost/voirallhost.component';
import { GraphComponent } from './main/partie_reseaux/graph/graph.component';
import { AgentaccountComponent } from './main/agent/agentaccount/agentaccount.component';
import { SeeoneComponent } from './main/admin/seeone/seeone.component';
import { MyaccountComponent } from './main/admin/myaccount/myaccount.component';
import { DashboardagentComponent } from './main/agent/dashboardagent/dashboardagent.component';
import { UpdateagentComponent } from './main/admin/updateagent/updateagent.component';
import { SeeallComponent } from './main/admin/seeall/seeall.component';
import { DeleteComponent } from './main/admin/delete/delete.component';
import { DashboardadminComponent } from './main/admin/dashboardadmin/dashboardadmin.component';

const routes: Routes = [
{path:'adminlogin',component:AdminloginComponent},
{path:'agentlogin',component:AgentloginComponent},
{path:'home',component:DefaultComponent},
{path:'footer',component:FooterComponent},
{path:'***',component:NotfoundComponent},
{path:'',component:DefaultComponent},
{path:'addagent',component:AddagentComponent},
{path:'dasboardadmin',component:DashboardadminComponent},
{path:'delete',component:DeleteComponent},
{path:'seeall',component:SeeallComponent},
{path:'updateagent',component:UpdateagentComponent},
{path:'dashboardagent',component:DashboardagentComponent},
{path:'myaccount',component:MyaccountComponent},
{path:'sseone',component:SeeoneComponent},
{path:'agentaccount',component:AgentaccountComponent},
{path:'graph',component:GraphComponent},
{path:'voirhosts',component:VoirallhostComponent},
{path:'chat',component:ChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
