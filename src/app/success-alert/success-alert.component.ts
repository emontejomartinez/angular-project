import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  standalone: true,
  imports: [],
  templateUrl: './success-alert.component.html',
  styleUrl: './success-alert.component.css'
})
export class SuccessAlertComponent {
  successAlert() {
    var successText = "Success!"
    alert(successText)
  }
}
