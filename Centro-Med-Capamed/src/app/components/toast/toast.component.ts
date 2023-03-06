import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MsgToast } from 'src/app/models/MsgToast';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit{

  @Input() objMsgToast: MsgToast | undefined;

  constructor(private _messageService: MessageService){

  }

  ngOnInit(): void {
    this.showToast();
  }

  showToast(){
    if(this.objMsgToast !== undefined){
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: this.objMsgToast.typeNotification,
        title: this.objMsgToast.message
      })
    }
  }


}
