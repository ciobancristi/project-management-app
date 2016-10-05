import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

@NgModule({
    imports: [CommonModule, ToasterModule, Ng2BootstrapModule],
    exports: [CommonModule, FormsModule, ToasterModule, Ng2BootstrapModule]
})
export class SharedModule { }