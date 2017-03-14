import { Component, Input, OnInit } from '@angular/core';

import { TabsComponent } from './tabs.component';

@Component({
    moduleId: module.id,
    selector: 'trm-tab',
    templateUrl: 'tab.component.html'
})
export class TabComponent implements OnInit {
    @Input()
    selected: boolean

    @Input()
    title: string
    
    constructor(
        private tabsComponent: TabsComponent
    ) { }

    ngOnInit() {
        this.tabsComponent.addTab(this);
    }
}