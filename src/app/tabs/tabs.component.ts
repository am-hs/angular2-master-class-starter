import { Component, OnInit } from '@angular/core';

import { TabComponent } from './tab.component';

@Component({
    moduleId: module.id,
    selector: 'trm-tabs',
    templateUrl: 'tabs.component.html'
})
export class TabsComponent implements OnInit {
    tabs: TabComponent[] = []

    constructor() { }

    ngOnInit() {}

    addTab(tab: TabComponent) {
        this.tabs.push(tab);
        if (this.tabs.length == 1) {
            this.select(tab);
        }
    }

    select(tab: TabComponent) {
        this.tabs.forEach(tab => tab.selected = false);
        tab.selected = true;
    }
}