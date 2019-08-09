import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplyToBeNurseComponent } from './apply-to-be-nurse/apply-to-be-nurse.component';
import { BookOrientationComponent } from './book-orientation/book-orientation.component';
import { CancelOrientationBookingComponent } from './cancel-orientation-booking/cancel-orientation-booking.component';
import { SendNurseCheckInDetailsComponent } from './send-nurse-check-in-details/send-nurse-check-in-details.component';
import { ConfirmNurseRequestComponent } from './confirm-nurse-request/confirm-nurse-request.component';
import { ApplyToBeHospitalDepartmentComponent } from './Hospital_Department/apply-to-be-hospital-department/apply-to-be-hospital-department.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplyToBeNurseComponent,
    BookOrientationComponent,
    CancelOrientationBookingComponent,
    SendNurseCheckInDetailsComponent,
    ConfirmNurseRequestComponent,
    ApplyToBeHospitalDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
