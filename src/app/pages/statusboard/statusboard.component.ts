import { Component, OnInit } from "@angular/core";

@Component({
  selector: "statusboard1",
  templateUrl: "statusboard.html"
})
export class StatusBoardComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
  columnDefs = [
    { headerName: "Account", width: 200, field: 'account', sortable: true, filter: true, checkboxSelection: true },
    { headerName: "Card Number", width: 200, field: 'cardnumber', sortable: true, filter: true },
    { headerName: "Status", width: 200, field: 'status', cellRenderer: this.StatusAction, sortable: true, filter: true },
    { headerName: "Date", width: 200, field: 'date', sortable: true, filter: true },
    { headerName: "Action", width: 200, field: 'action', cellRenderer: this.CustomerActionRender, sortable: true, filter: true, }
  ];

  rowData = [
    { account: '13216665321366', cardnumber: '565465465465436', date: 'jan 20, 2020 at 10:00 AM' },
    { account: '13216665321366', cardnumber: '565465465465436', date: 'jan 20, 2020 at 10:00 AM' },
    { account: '13216665321366', cardnumber: '565465465465436', date: 'jan 20, 2020 at 10:00 AM' },
    { account: '13216665321366', cardnumber: '565465465465436', date: 'jan 20, 2020 at 10:00 AM' },
    { account: '13216665321366', cardnumber: '565465465465436', date: 'jan 20, 2020 at 10:00 AM' },
    { account: '13216665321366', cardnumber: '565465465465436', date: 'jan 20, 2020 at 10:00 AM' },
    { account: '13216665321366', cardnumber: '565465465465436', date: 'jan 20, 2020 at 10:00 AM' },
    { account: '13216665321366', cardnumber: '565465465465436', date: 'jan 20, 2020 at 10:00 AM' },
    { account: '13216665321366', cardnumber: '565465465465436', date: 'jan 20, 2020 at 10:00 AM' },
    { account: '13216665321366', cardnumber: '565465465465436', date: 'jan 20, 2020 at 10:00 AM' },
    { account: '13216665321366', cardnumber: '565465465465436', date: 'jan 20, 2020 at 10:00 AM' },

  ];  
  public CustomerActionRender(params) {
    let templateHtml = "";
    templateHtml += `
         <a href="#" class="grid-action">
             <i class="fas fa-eye"></i>
         </a>
         <a href="#" class="grid-action" style="text-decoration: underline;">
            Re-Request
           </a>`;
    return templateHtml;
  }
  public StatusAction(params) {
    let templateHtml1 = "";
    templateHtml1 += `        
        <div class="status">
        <i class="circle"></i> Active
        </div>
       `;
    return templateHtml1;
  }
}