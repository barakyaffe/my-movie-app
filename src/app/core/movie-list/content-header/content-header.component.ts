import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent {

  @Input() totalResults: number;
  @Input() totalResultsPerPage: number;
  @Input() pageNumber: number;
  @Input() totalPages: number;

  @Output() onPageChange = new EventEmitter();
}
