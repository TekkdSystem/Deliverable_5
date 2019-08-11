import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplyToBeNurseComponent } from './Nurse/apply-to-be-nurse/apply-to-be-nurse.component';
import { BookOrientationComponent } from './Nurse/book-orientation/book-orientation.component';
import { CancelOrientationBookingComponent } from './Nurse/cancel-orientation-booking/cancel-orientation-booking.component';
import { SendNurseCheckInDetailsComponent } from './Nurse/send-nurse-check-in-details/send-nurse-check-in-details.component';
import { ConfirmNurseRequestComponent } from './Nurse/confirm-nurse-request/confirm-nurse-request.component';
import { ApplyToBeHospitalDepartmentComponent } from './Hospital_Department/apply-to-be-hospital-department/apply-to-be-hospital-department.component';
import { RequestNursingServicesComponent } from './Hospital_Department/request-nursing-services/request-nursing-services.component';
import { UpdateNursingSservicesRequestComponent } from './Hospital_Department/update-nursing-sservices-request/update-nursing-sservices-request.component';
import { ConfirmHospitalDepartmentBookingComponent } from './Hospital_Department/confirm-hospital-department-booking/confirm-hospital-department-booking.component';
import { ConfirmHospitalDepartmentDepartmentApplicationComponent } from './Employee/confirm-hospital-department-department-application/confirm-hospital-department-department-application.component';
import { MaintainHospitalDepartmentDetailsComponent } from './Employee/maintain-hospital-department-details/maintain-hospital-department-details.component';
import { SearchHospitalDepartmentDetailsComponent } from './Employee/search-hospital-department-details/search-hospital-department-details.component';
import { ArchiveHospitalDepartmentComponent } from './Employee/archive-hospital-department/archive-hospital-department.component';
import { ConfirmNurseApplicationComponent } from './Employee/confirm-nurse-application/confirm-nurse-application.component';
import { UpdateNurseDetailsComponent } from './Employee/update-nurse-details/update-nurse-details.component';
import { SearchNurseComponent } from './Employee/search-nurse/search-nurse.component';
import { ArchiveNurseComponent } from './Employee/archive-nurse/archive-nurse.component';
import { SearchQualificationComponent } from './Employee/search-qualification/search-qualification.component';
import { UpdateQualificationComponent } from './Employee/update-qualification/update-qualification.component';
import { AddSkillComponent } from './Employee/add-skill/add-skill.component';
import { SearchSkillComponent } from './Employee/search-skill/search-skill.component';
import { UpdateSkillComponent } from './Employee/update-skill/update-skill.component';
import { SendNurseRequestComponent } from './Employee/send-nurse-request/send-nurse-request.component';
import { CancelNurseRequestComponent } from './Employee/cancel-nurse-request/cancel-nurse-request.component';
import { NotifyNurseAvailabilityComponent } from './Employee/notify-nurse-availability/notify-nurse-availability.component';
import { CreateOrientationScheduleComponent } from './Employee/create-orientation-schedule/create-orientation-schedule.component';
import { MaintainOrientationScheduleComponent } from './Employee/maintain-orientation-schedule/maintain-orientation-schedule.component';
import { SearchOrientationDetailsComponent } from './Employee/search-orientation-details/search-orientation-details.component';
import { ViewOrientationScheduleComponent } from './Employee/view-orientation-schedule/view-orientation-schedule.component';
import { RecordOrientatedNursesComponent } from './Employee/record-orientated-nurses/record-orientated-nurses.component';
import { AddRatingComponent } from './Hospital_Department/add-rating/add-rating.component';
import { UpdateRatingComponent } from './Hospital_Department/update-rating/update-rating.component';
import { PublishRatingComponent } from './Employee/publish-rating/publish-rating.component';
import { AddHourlyRateComponent } from './Employee/add-hourly-rate/add-hourly-rate.component';
import { UpdateHourlyRateComponent } from './Employee/update-hourly-rate/update-hourly-rate.component';
import { FileAComplaintComponent } from './Hospital_Department/file-a-complaint/file-a-complaint.component';
import { SearchComplaintComponent } from './Hospital_Department/search-complaint/search-complaint.component';
import { DeleteComplaintComponent } from './Hospital_Department/delete-complaint/delete-complaint.component';
import { SearchUserComponent } from './Manager/search-user/search-user.component';
import { AddUserAccessLevelComponent } from './Manager/add-user-access-level/add-user-access-level.component';
import { SearchUserAccessLevelComponent } from './Manager/search-user-access-level/search-user-access-level.component';
import { MaintainUserAccessLevelComponent } from './Manager/maintain-user-access-level/maintain-user-access-level.component';
import { BackUpComponent } from './Manager/back-up/back-up.component';
import { RestoreComponent } from './Manager/restore/restore.component';
import { GenerateActiveDepartmentReportComponent } from './Manager/generate-active-department-report/generate-active-department-report.component';
import { GenerateCRMReportComponent } from './Manager/generate-crm-report/generate-crm-report.component';
import { GenerateInvoiceReportComponent } from './Manager/generate-invoice-report/generate-invoice-report.component';
import { GenerateOrientationAttendanceReportComponent } from './Manager/generate-orientation-attendance-report/generate-orientation-attendance-report.component';
import { GenerateActiveNursesReportComponent } from './Manager/generate-active-nurses-report/generate-active-nurses-report.component';
import { AddEmployeeComponent } from './Manager/add-employee/add-employee.component';
import { SearchEmployeeComponent } from './Manager/search-employee/search-employee.component';
import { UpdateEmployeeDetailsComponent } from './Manager/update-employee-details/update-employee-details.component';
import { ArchiveEmployeeComponent } from './Manager/archive-employee/archive-employee.component';
import { AddEmployeeTypeComponent } from './Manager/add-employee-type/add-employee-type.component';
import { SearchEmployeeTypeComponent } from './Manager/search-employee-type/search-employee-type.component';
import { MaintainEmployeeTypeComponent } from './Manager/maintain-employee-type/maintain-employee-type.component';
import { DeleteEmployeeTypeComponent } from './Manager/delete-employee-type/delete-employee-type.component';
import { DeleteEmployeeComponent } from './Manager/delete-employee/delete-employee.component';
import { LogInComponent } from './User/log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplyToBeNurseComponent,
    BookOrientationComponent,
    CancelOrientationBookingComponent,
    SendNurseCheckInDetailsComponent,
    ConfirmNurseRequestComponent,
    ApplyToBeHospitalDepartmentComponent,
    RequestNursingServicesComponent,
    UpdateNursingSservicesRequestComponent,
    ConfirmHospitalDepartmentBookingComponent,
    ConfirmHospitalDepartmentDepartmentApplicationComponent,
    MaintainHospitalDepartmentDetailsComponent,
    SearchHospitalDepartmentDetailsComponent,
    ArchiveHospitalDepartmentComponent,
    ConfirmNurseApplicationComponent,
    UpdateNurseDetailsComponent,
    SearchNurseComponent,
    ArchiveNurseComponent,
    SearchQualificationComponent,
    UpdateQualificationComponent,
    AddSkillComponent,
    SearchSkillComponent,
    UpdateSkillComponent,
    SendNurseRequestComponent,
    CancelNurseRequestComponent,
    NotifyNurseAvailabilityComponent,
    CreateOrientationScheduleComponent,
    MaintainOrientationScheduleComponent,
    SearchOrientationDetailsComponent,
    ViewOrientationScheduleComponent,
    RecordOrientatedNursesComponent,
    AddRatingComponent,
    UpdateRatingComponent,
    PublishRatingComponent,
    AddHourlyRateComponent,
    UpdateHourlyRateComponent,
    FileAComplaintComponent,
    SearchComplaintComponent,
    DeleteComplaintComponent,
    SearchUserComponent,
    AddUserAccessLevelComponent,
    SearchUserAccessLevelComponent,
    MaintainUserAccessLevelComponent,
    BackUpComponent,
    RestoreComponent,
    GenerateActiveDepartmentReportComponent,
    GenerateCRMReportComponent,
    GenerateInvoiceReportComponent,
    GenerateOrientationAttendanceReportComponent,
    GenerateActiveNursesReportComponent,
    AddEmployeeComponent,
    SearchEmployeeComponent,
    UpdateEmployeeDetailsComponent,
    ArchiveEmployeeComponent,
    AddEmployeeTypeComponent,
    SearchEmployeeTypeComponent,
    MaintainEmployeeTypeComponent,
    DeleteEmployeeTypeComponent,
    DeleteEmployeeComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
