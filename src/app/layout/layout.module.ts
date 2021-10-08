import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

const exportedComponents = [
    HeaderComponent,
    SideNavComponent
]

const materialComponents = [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
];

@NgModule({
    declarations: [
        [...exportedComponents]
    ],
    imports: [
        [...materialComponents],
        CommonModule,
        FlexLayoutModule,
        RouterModule
    ],
    exports: [
        [...exportedComponents]
    ]
})
export class LayoutModule { }
