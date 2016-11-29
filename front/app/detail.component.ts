import { Component } from '@angular/core';

@Component({
    selector: 'orcl-obj-dtl',
    templateUrl: 'app/detail.component.html',
})

export class OrclObjDtlComponent {

    // template table
    public templateTable: TemplateTable = new TemplateTable();

    abc() {
        alert(this.templateTable.owner)
        alert(this.templateTable.table)
    }
}

export class TemplateTable {
    owner: string = ""
    table: string = ""
}