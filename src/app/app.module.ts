import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

import { NgbNavModule, NgbAccordionModule, NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';



import { ToastrModule } from 'ngx-toastr';


import { LmsModule } from './lms/lms.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ErrorInterceptor } from './core/helpers/error.interceptor';
import { JwtInterceptor } from './core/helpers/jwt.interceptor';
import { FakeBackendInterceptor } from './core/helpers/fake-backend';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

import { usersReducer, categoryReducer } from './shared';
import { UserEffects, CategoryEffects } from './shared';
import { EffectsModule } from '@ngrx/effects';

import { AddModule } from '@carbon/icons-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule, AuthGuard } from './core';
import { LmsHomeModule } from './lms-home/lms-home.module';


/*
if (environment.defaultauth === 'firebase') {
  
} else */{
  // tslint:disable-next-line: no-unused-expression
  FakeBackendInterceptor;
}

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
export const reducers: ActionReducerMap<any> = {
  users: usersReducer,
  categories: categoryReducer
};
@NgModule({
  declarations: [
    AppComponent   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    LmsModule,
    AppRoutingModule,
    AddModule,
    CoreModule,
    CarouselModule,
    NgbAccordionModule,
    NgbNavModule,
    NgbTooltipModule,
    LmsHomeModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects, CategoryEffects]),
    ScrollToModule.forRoot(),
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true },
    AuthGuard
    // LoaderService,
    // { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true },
  ],
})
export class AppModule { }
