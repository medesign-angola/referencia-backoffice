import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private toastrService: ToastrService) { }

  getToasterErrorAlerts(message: string, classification: string, timeOutDuration: number = 3000, positionClass:string = 'left', progressBarVariable: boolean = false){

    return this.toastrService.error(message, classification, {
      timeOut: timeOutDuration,
      positionClass: positionClass,
      progressBar: progressBarVariable
    });
  
  }

  getToasterSuccessAlerts(message: string, classification: string, timeOutDuration: number = 3000, positionClass:string = 'left', progressBarVariable: boolean = false){

    return this.toastrService.success(message, classification, {
      timeOut: timeOutDuration,
      positionClass: positionClass,
      progressBar: progressBarVariable
    });
  
  }

  getToasterWarningAlerts(message: string, classification: string, timeOutDuration: number = 3000, positionClass:string = 'left', progressBarVariable: boolean = false){

    return this.toastrService.warning(message, classification, {
      timeOut: timeOutDuration,
      positionClass: positionClass,
      progressBar: progressBarVariable
    });
  
  }

}
