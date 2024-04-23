import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClassRegistrationService } from '../../services/class-registration.service';
import { Class, Lecture } from '../../interfaces/class';
@Component({
  selector: 'app-class-registration',
  templateUrl: './class-registration.component.html',
  styleUrls: ['./class-registration.component.less'],
})
export class ClassRegistrationComponent implements OnInit {
  classes: Class[] = [];
  availableLectures: Lecture[] = [];
  classFormGroup: FormGroup;
  lectureFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private classRegistrationService: ClassRegistrationService
  ) {}

  ngOnInit() {
    this.classes = this.classRegistrationService.getClasses();
    this.initForms();
  }

  initForms() {
    this.classFormGroup = this.formBuilder.group({
      classControl: ['']
    });

    this.lectureFormGroup = this.formBuilder.group({
      lectureControl: ['']
    });

    this.classFormGroup.get('classControl')?.valueChanges.subscribe(classValue => {
      this.setAvailableLectures(classValue);
      this.lectureFormGroup.reset();  // Reset lecture form when class changes
    });
  }

  setAvailableLectures(classValue: any) {
    this.availableLectures = (this.classes[classValue] as any)?.lectures || [];
  }

  getSelectedClassViewValue(): string {
    return (this.classes.find((c: any) => c.value === this.classFormGroup.get('classControl')?.value) as any)?.viewValue || '';
  }

  getSelectedLectureViewValue(): string {
    return (this.availableLectures.find((l: any) => l.value === this.lectureFormGroup.get('lectureControl')?.value) as any)?.viewValue || '';
  }

  submit() {
    const selectedClass = this.classFormGroup.get('classControl')?.value;
    const selectedLecture = this.lectureFormGroup.get('lectureControl')?.value;
    console.log('Selected Class:', selectedClass);
    console.log('Selected Lecture:', selectedLecture);
  }
}
