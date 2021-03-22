import { Component, OnInit } from "@angular/core";

@Component({
  selector: "view-customer",
  templateUrl: "view-customer.html"
})
export class ViewCustomerComponent implements OnInit {
    constructor() {}
  ngOnInit() {}
  columnDefs = [
    { headerName: "Name", field: 'name', sortable: true, filter: true, checkboxSelection: true, resizable: true, minWidth: 200},
    { headerName: "Account #", field: 'account', sortable: true, filter: true, resizable: true,  minWidth: 200},
    { headerName: "P.Address", field: 'pAddress', sortable: true, filter: true, resizable: true,  minWidth: 200},
    { headerName: "T.Address", field: 'tAddress', sortable: true, filter: true, resizable: true,  minWidth: 200},
    { headerName: "Mobile #", field: 'mobile', sortable: true, filter: true, resizable: true, minWidth: 200},
    { headerName: "Citizenship #", field: 'citizenship', sortable: true, filter: true, resizable: true, minWidth: 200},
    { headerName: "Action", field: 'action', cellRenderer: this.CustomerActionRender, sortable: true, filter: true, resizable: true, minWidth: 200}
];

rowData = [
    { name: 'Manoj Adhikari', account: '13216665321366', pAddress: 'Kathmandu, Nepal', tAddress: 'Kathmandu, Nepal', mobile:'986565633', citizenship: '5654-6566'},
    { name: 'Manoj Adhikari', account: '13216665321366', pAddress: 'Kathmandu, Nepal', tAddress: 'Kathmandu, Nepal', mobile:'986565633', citizenship: '5654-6566'},
    { name: 'Manoj Adhikari', account: '13216665321366', pAddress: 'Kathmandu, Nepal', tAddress: 'Kathmandu, Nepal', mobile:'986565633', citizenship: '5654-6566'},
    { name: 'Manoj Adhikari', account: '13216665321366', pAddress: 'Kathmandu, Nepal', tAddress: 'Kathmandu, Nepal', mobile:'986565633', citizenship: '5654-6566'},
    { name: 'Manoj Adhikari', account: '13216665321366', pAddress: 'Kathmandu, Nepal', tAddress: 'Kathmandu, Nepal', mobile:'986565633', citizenship: '5654-6566'},
    { name: 'Manoj Adhikari', account: '13216665321366', pAddress: 'Kathmandu, Nepal', tAddress: 'Kathmandu, Nepal', mobile:'986565633', citizenship: '5654-6566'},
    { name: 'Manoj Adhikari', account: '13216665321366', pAddress: 'Kathmandu, Nepal', tAddress: 'Kathmandu, Nepal', mobile:'986565633', citizenship: '5654-6566'},
    { name: 'Manoj Adhikari', account: '13216665321366', pAddress: 'Kathmandu, Nepal', tAddress: 'Kathmandu, Nepal', mobile:'986565633', citizenship: '5654-6566'},
    { name: 'Manoj Adhikari', account: '13216665321366', pAddress: 'Kathmandu, Nepal', tAddress: 'Kathmandu, Nepal', mobile:'986565633', citizenship: '5654-6566'},
    { name: 'Manoj Adhikari', account: '13216665321366', pAddress: 'Kathmandu, Nepal', tAddress: 'Kathmandu, Nepal', mobile:'986565633', citizenship: '5654-6566'},
    { name: 'Manoj Adhikari', account: '13216665321366', pAddress: 'Kathmandu, Nepal', tAddress: 'Kathmandu, Nepal', mobile:'986565633', citizenship: '5654-6566'}
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
