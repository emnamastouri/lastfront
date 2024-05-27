import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './main/admin/adminlogin/adminlogin.component';
import { AgentloginComponent } from './main/agent/agentlogin/agentlogin.component';
import { DefaultComponent } from './main/default/default.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ChatComponent } from './main/chat/chat.component';
import { VoirallhostComponent } from './main/partie_reseaux/voirallhost/voirallhost.component';
import { GraphComponent } from './main/partie_reseaux/graph/graph.component';
import { AgentaccountComponent } from './main/agent/agentaccount/agentaccount.component';
import { MyaccountComponent } from './main/admin/myaccount/myaccount.component';
import { DashboardagentComponent } from './main/agent/dashboardagent/dashboardagent.component';
import { DashboardadminComponent } from './main/admin/dashboardadmin/dashboardadmin.component';
import { ChatadminComponent } from './main/admin/chatadmin/chatadmin.component';

const routes: Routes = [
{path:'adminlogin',component:AdminloginComponent},
{path:'agentlogin',component:AgentloginComponent},
{path:'home',component:DefaultComponent},
{path:'footer',component:FooterComponent},
{path:'***',component:NotfoundComponent},
{path:'',component:DefaultComponent},
{path:'dasboardadmin',component:DashboardadminComponent},
{path:'dashboardagent',component:DashboardagentComponent},
{path:'myaccount',component:MyaccountComponent},
{path:'agentaccount',component:AgentaccountComponent},
{path:'graph',component:GraphComponent},
{path:'voirhosts',component:VoirallhostComponent},
{path:'chatagent',component:ChatComponent},
{path:'chatadmin',component:ChatadminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
