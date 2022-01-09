import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { UploadFileService } from './upload-file.service';
import { DetailsUploadComponent } from './details-upload/details-upload.component';
import { ListUploadComponent } from './list-upload/list-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    FormUploadComponent,
    DetailsUploadComponent,
    ListUploadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
