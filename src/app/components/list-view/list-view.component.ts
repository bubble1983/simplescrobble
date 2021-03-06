import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {EntityUtil} from '../../../types/entity-util';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Input() currentResults: Searchable[];
  @Input() image = true;
  @Input() descriptor = true;
  @Output() click = new EventEmitter<Searchable>();

  constructor() { }

  ngOnInit() {
  }

  onClick(result: Searchable) {
    this.click.emit(result);
  }

  img(result: Searchable) {
    return EntityUtil.getImage(result, 'worst') || 'assets/placeholder.jpg';
  }

  getDescriptor(result: Searchable) {
    return this.descriptor ? EntityUtil.getDescriptor(result) : undefined;
  }
}
