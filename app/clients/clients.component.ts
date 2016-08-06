import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
    moduleId: module.id,
    selector: 'clients',
    templateUrl: 'clients.component.html',
    providers: [DataService]
})
export class ClientsComponent implements OnInit {
    private data: any;
    private inp: any;
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.initDB();
        this.bindData();
        this.inp = {
            _id:'',field3:'',field2:''
        };
    }

    bindData() {
        this.dataService.getAllData()
            .then(d => {
                this.data = d;
            })
    }
    save() {
        if (this.inp) {
            this.dataService.add(this.inp)
            .then(res => {
                this.bindData();
            }, err=> {
                console.log(err)});
        }
    }
}