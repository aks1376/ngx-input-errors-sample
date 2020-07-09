import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app.component';
import { UserRegistryComponent } from './components/user-registry/user-registry.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxInputErrorsModule } from 'ngx-input-errors';
import { errorMessages } from './config/config-ngx-input-errors';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

const materials = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatToolbarModule
];

@NgModule({
  declarations: [
    AppComponent,
    UserRegistryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxInputErrorsModule.forRoot({
      defaultLanguage: 'en',
      errorMessages
    }),
    ...materials
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
