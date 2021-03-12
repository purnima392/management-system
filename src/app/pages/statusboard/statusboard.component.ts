import { Component, OnInit } from "@angular/core";

@Component({
  selector: "statusboard",
  templateUrl: "statusboard.html"
})
export class StatusBoardComponent implements OnInit {
  constructor() {}
ngOnInit() {}
columnDefs = [
  { headerName: "Name", field: 'name', sortable: true, filter: true, checkboxSelection: true },
  { headerName: "Currency Type", field: 'currencytype', sortable: true, filter: true},
  { headerName: "Insurance Charge", field: 'icharge', sortable: true, filter: true},
  { headerName: "Renewal Charge", field: 'rcharge', sortable: true, filter: true},
  { headerName: "Block Charge", field: 'bcharge', sortable: true, filter: true},
  { headerName: "Un-Block Charge", field: 'ubcharge', sortable: true, filter: true},
  { headerName: "Re-PIN Charge", field: 'recharge', sortable: true, filter: true},
  { headerName: "Description", field: 'description', sortable: true, filter: true},
  { headerName: "Action", field: 'action', cellRenderer: this.CustomerActionRender, sortable: true, filter: true,}
];

rowData = [
  { name: 'Manoj Adhikari', currencytype: 'USD', icharge: '100', rcharge: '100', bcharge:'50', ubcharge: '56', recharge:'60', description: ''},
  { name: 'Manoj Adhikari', currencytype: 'EUR', icharge: '100', rcharge: '100', bcharge:'50', ubcharge: '56', recharge:'60', description: ''},
  { name: 'Manoj Adhikari', currencytype: 'FJD', icharge: '100', rcharge: '100', bcharge:'50', ubcharge: '56', recharge:'60', description: ''},
  { name: 'Manoj Adhikari', currencytype: 'FKP', icharge: '100', rcharge: '100', bcharge:'50', ubcharge: '56', recharge:'60', description: ''},
  { name: 'Manoj Adhikari', currencytype: 'GBP', icharge: '100', rcharge: '100', bcharge:'50', ubcharge: '56', recharge:'60', description: ''},
  { name: 'Manoj Adhikari', currencytype: 'AED', icharge: '100', rcharge: '100', bcharge:'50', ubcharge: '56', recharge:'60', description: ''},
  { name: 'Manoj Adhikari', currencytype: 'CAD', icharge: '100', rcharge: '100', bcharge:'50', ubcharge: '56', recharge:'60', description: ''},
  { name: 'Manoj Adhikari', currencytype: 'CLP', icharge: '100', rcharge: '100', bcharge:'50', ubcharge: '56', recharge:'60', description: ''},
  { name: 'Manoj Adhikari', currencytype: 'INR', icharge: '100', rcharge: '100', bcharge:'50', ubcharge: '56', recharge:'60', description: ''},
  { name: 'Manoj Adhikari', currencytype: 'IQD', icharge: '100', rcharge: '100', bcharge:'50', ubcharge: '56', recharge:'60', description: ''},
  { name: 'Manoj Adhikari', currencytype: 'KGS', icharge: '100', rcharge: '100', bcharge:'50', ubcharge: '56', recharge:'60', description: ''}
];
public CustomerActionRender(params) {
let templateHtml = "";
templateHtml += `<a href="#" class="grid-action">
            <i class="far fa-edit"></i>
         </a>
         <a href="#" class="grid-action">
             <i class="fas fa-eye"></i>
         </a>
         <a href="#" class="grid-action">
                        <i class="far fa-trash-alt"></i>
           </a>`;
return templateHtml;
}
}