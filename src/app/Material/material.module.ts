import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatChipsModule} from '@angular/material/chips';

import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { LayoutModule } from '@angular/cdk/layout';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatListModule } from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatChipsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class MaterialModule { }
