import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';

import { TabComponent } from './tab.component';

@Component({
    moduleId: module.id,
    selector: 'trm-tabs',
    templateUrl: 'tabs.component.html'
})
export class TabsComponent implements AfterContentInit {
    @ContentChildren(TabComponent)
    tabs: QueryList<TabComponent>

    constructor() { }

    ngAfterContentInit() {
        this.select(this.tabs.first);
    }

    select(tab: TabComponent) {
        this.tabs.forEach(tab => tab.selected = false);
        tab.selected = true;
    }
}