import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-class-registration',
  templateUrl: './class-registration.component.html',
  styleUrls: ['./class-registration.component.less'],
})
export class ClassRegistrationComponent implements OnInit {
  firstFormGroup : FormGroup = new FormGroup({});
  secondFormGroup: FormGroup = new FormGroup({});
  selectedClass  : string = '';
  selectedLecture: string = '';

  availableClasses = [
    { value: 'robotics',  viewValue: 'Robotics' },
    { value: 'coding'  ,  viewValue: 'Coding'   },
    { value: 'math'    ,  viewValue: 'Math'     },
    { value: 'science' ,  viewValue: 'Science'  },
    { value: 'english' ,  viewValue: 'English'  },
    { value: 'history' ,  viewValue: 'History'  },
    { value: 'art'     ,  viewValue: 'Art'      }
  ];

  availableLectures: any[] = []; // Initialize the property with an empty array

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [''],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [''],
    });
  }

  setAvailableLectures(classValue: string) {
    this.selectedClass = classValue;
    // if (classValue === 'robotics') {
      this.availableLectures = [
        { value: 'wed-12', viewValue: 'Wednesday 12-2' },
        { value: 'wed-2', viewValue: 'Wednesday 2-4' },
        { value: 'wed-4', viewValue: 'Wednesday 4-6' },
      ];
    // }
    // Add more conditions for other classes if necessary
  }

  getSelectedClassViewValue(): string {
    return (
      this.availableClasses.find((c) => c.value === this.selectedClass)
        ?.viewValue || ''
    );
  }

  getSelectedLectureViewValue(): string {
    return (
      this.availableLectures.find((l) => l.value === this.selectedLecture)
        ?.viewValue || ''
    );
  }

  submit() {
    this.selectedLecture = this.secondFormGroup.get('secondCtrl')?.value;
    console.log('Selected Class:', this.selectedClass);
    console.log('Selected Lecture:', this.selectedLecture);
  }
}
