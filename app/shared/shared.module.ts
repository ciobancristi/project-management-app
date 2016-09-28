import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';

@NgModule({
    imports: [CommonModule, ToasterModule],
    exports: [CommonModule, FormsModule, ToasterModule]
})
export class SharedModule { }