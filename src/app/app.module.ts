import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdToolbarModule,
  MdSidenavModule,
  MdIconModule,
  MdButtonModule,
  MdFormFieldModule,
  MdInputModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdCardModule,
  MdListModule,
  MdTooltipModule,
  MdOptionModule,
  MdSelectModule,
  MdPaginatorModule,
  MdTableModule,
  MdSortModule,
  MdRadioModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { TagService, DataPointService} from '../shared';
import { ChartComponent } from './chart/chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,

    NgxChartsModule,

    MdToolbarModule,
    MdSidenavModule,
    MdIconModule,
    MdButtonModule,
    MdFormFieldModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdCardModule,
    MdListModule,
    MdTooltipModule,
    MdOptionModule,
    MdSelectModule,
    MdPaginatorModule,
    MdTableModule,
    MdSortModule,
    MdRadioModule
  ],
  providers: [TagService, DataPointService],
  bootstrap: [AppComponent]
})
export class AppModule { }
