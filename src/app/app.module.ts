import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DefaultComponent } from './main/default/default.component';
import { ChatComponent } from './main/chat/chat.component';
import { AdminloginComponent } from './main/admin/adminlogin/adminlogin.component';
import { DashboardadminComponent } from './main/admin/dashboardadmin/dashboardadmin.component';
import { MyaccountComponent } from './main/admin/myaccount/myaccount.component';
import { AgentaccountComponent } from './main/agent/agentaccount/agentaccount.component';
import { AgentloginComponent } from './main/agent/agentlogin/agentlogin.component';
import { DashboardagentComponent } from './main/agent/dashboardagent/dashboardagent.component';
import { GraphComponent } from './main/partie_reseaux/graph/graph.component';
import { VoirallhostComponent } from './main/partie_reseaux/voirallhost/voirallhost.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Animation } from 'chart.js';
import { AnimationDriver } from '@angular/animations/browser';
import { DiagramModule, SnappingService } from '@syncfusion/ej2-angular-diagrams';
import { ChatadminComponent } from './main/admin/chatadmin/chatadmin.component';
import { ManageagentsComponent } from './main/admin/manageagents/manageagents.component'; 

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NotfoundComponent,
    DefaultComponent,
    ChatComponent,
    AdminloginComponent,
    DashboardadminComponent,
    MyaccountComponent,
    AgentaccountComponent,
    AgentloginComponent,
    DashboardagentComponent,
    GraphComponent,
    VoirallhostComponent,
    ChatadminComponent,
    ManageagentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    OrganizationChartModule,
    ToastModule,
    PanelModule,
    BrowserAnimationsModule,
    DiagramModule,
    
   
  ],
  providers: [SnappingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
