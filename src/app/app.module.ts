import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DefaultComponent } from './main/default/default.component';
import { ChatComponent } from './main/chat/chat.component';
import { AddagentComponent } from './main/admin/addagent/addagent.component';
import { AdminloginComponent } from './main/admin/adminlogin/adminlogin.component';
import { DashboardadminComponent } from './main/admin/dashboardadmin/dashboardadmin.component';
import { DeleteComponent } from './main/admin/delete/delete.component';
import { MyaccountComponent } from './main/admin/myaccount/myaccount.component';
import { SeeallComponent } from './main/admin/seeall/seeall.component';
import { SeeoneComponent } from './main/admin/seeone/seeone.component';
import { UpdateagentComponent } from './main/admin/updateagent/updateagent.component';
import { AgentaccountComponent } from './main/agent/agentaccount/agentaccount.component';
import { AgentloginComponent } from './main/agent/agentlogin/agentlogin.component';
import { DashboardagentComponent } from './main/agent/dashboardagent/dashboardagent.component';
import { GraphComponent } from './main/partie_reseaux/graph/graph.component';
import { VoirallhostComponent } from './main/partie_reseaux/voirallhost/voirallhost.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NotfoundComponent,
    DefaultComponent,
    ChatComponent,
    AddagentComponent,
    AdminloginComponent,
    DashboardadminComponent,
    DeleteComponent,
    MyaccountComponent,
    SeeallComponent,
    SeeoneComponent,
    UpdateagentComponent,
    AgentaccountComponent,
    AgentloginComponent,
    DashboardagentComponent,
    GraphComponent,
    VoirallhostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
