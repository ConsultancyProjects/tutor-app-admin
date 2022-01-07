import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LMSRoutingModule } from './lms-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';
import { UIModule } from '../shared/ui/ui.module';
import { SimplebarAngularModule } from 'simplebar-angular';
import { StoreModule } from '@ngrx/store';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { TopbarComponent } from './home/topbar/topbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { RightsidebarComponent } from './home/rightsidebar/rightsidebar.component';
import { HorizontalComponent } from './home/horizontal/horizontal.component';
import { VerticalComponent } from './home/vertical/vertical.component';
import { HorizontaltopbarComponent } from './home/horizontaltopbar/horizontaltopbar.component';
import { LmsNavComponent } from './lms-nav/lms-nav.component';


@NgModule({
  declarations: [
    HomeComponent, SidebarComponent, TopbarComponent, FooterComponent, RightsidebarComponent, HorizontalComponent, VerticalComponent, HorizontaltopbarComponent,
    LmsNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LMSRoutingModule,
    CommonModule,
    TranslateModule,
    RouterModule,
    NgbDropdownModule,
    ClickOutsideModule,
    UIModule,
    SimplebarAngularModule,
    StoreModule
  ],
  exports: [
    HomeComponent, SidebarComponent, TopbarComponent, FooterComponent, RightsidebarComponent, HorizontalComponent, VerticalComponent, HorizontaltopbarComponent,
    LmsNavComponent
  ],
})
export class LmsModule { }
