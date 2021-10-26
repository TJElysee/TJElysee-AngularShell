import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

const exportedComponents = [
    HeaderComponent,
    SideNavComponent,
    LoginFormComponent
]

const materialComponents = [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule
];

@NgModule({
    declarations: [
        [...exportedComponents]
    ],
    imports: [
        [...materialComponents],
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        [...exportedComponents]
    ]
})
export class LayoutModule { }
