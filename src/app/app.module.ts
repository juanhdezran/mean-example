import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbar } from '@angular/material';

const routes: Routes = [
  {path: 'create', component: CreateComponent},
  {path: 'list', component: ListComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: '', redirectTo:'list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
