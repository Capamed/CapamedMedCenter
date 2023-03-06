import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() showMenuOrItems: EventEmitter<EventEmitShowMenuDTO> = new EventEmitter();

  goBackToMenu(){
    let objEventEmitShoMenuDTO: EventEmitShowMenuDTO = {
      showMenu: true,
      showMenuItemsOptions: false
    };
    this.showMenuOrItems.emit(objEventEmitShoMenuDTO);
  }

}

export interface EventEmitShowMenuDTO {
  showMenu: boolean,
  showMenuItemsOptions: boolean
}
