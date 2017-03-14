import { Component, Input, OnInit } from '@angular/core';

import { TabsComponent } from './tabs.component';

@Component({
    moduleId: module.id,
    selector: 'trm-tab',
    templateUrl: 'tab.component.html'
})
export class TabComponent {
    @Input()
    selected: boolean

    @Input()
    title: string
}