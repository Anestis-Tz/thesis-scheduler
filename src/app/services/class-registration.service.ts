import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { Class } from '../interfaces/class';

@Injectable({
  providedIn: 'root'
})
export class ClassRegistrationService {
  features = environment.features;

  classes: any = {
    ROBOTICS: {
      value: 'robotics',
      viewValue: 'Robotics',
      lectures: [
        { value: 'wed-12', viewValue: 'Wednesday 12-2' },
        { value: 'wed-2', viewValue: 'Wednesday 2-4' },
        { value: 'wed-4', viewValue: 'Wednesday 4-6' },
      ]
    },
    CODING: {
      value: 'coding',
      viewValue: 'Coding',
      lectures: [
        { value: 'wed-12', viewValue: 'Wednesday 12-2' },
        { value: 'wed-2', viewValue: 'Wednesday 2-4' },
        { value: 'wed-4', viewValue: 'Wednesday 4-6' },
      ]
    },
    MATH: {
      value: 'math',
      viewValue: 'Math',
      lectures: [
        { value: 'wed-12', viewValue: 'Wednesday 12-2' },
        { value: 'wed-2', viewValue: 'Wednesday 2-4' },
        { value: 'wed-4', viewValue: 'Wednesday 4-6' },
      ]
    },
    SCIENCE: {
      value: 'science',
      viewValue: 'Science',
      lectures: [
        { value: 'wed-12', viewValue: 'Wednesday 12-2' },
        { value: 'wed-2', viewValue: 'Wednesday 2-4' },
        { value: 'wed-4', viewValue: 'Wednesday 4-6' },
      ]
    },
    ENGLISH: {
      value: 'english',
      viewValue: 'English',
      lectures: [
        { value: 'wed-12', viewValue: 'Wednesday 12-2' },
        { value: 'wed-2', viewValue: 'Wednesday 2-4' },
        { value: 'wed-4', viewValue: 'Wednesday 4-6' },
      ]
    },
    HISTORY: {
      value: 'history',
      viewValue: 'History',
      lectures: [
        { value: 'wed-12', viewValue: 'Wednesday 12-2' },
        { value: 'wed-2', viewValue: 'Wednesday 2-4' },
        { value: 'wed-4', viewValue: 'Wednesday 4-6' },
      ]
    },
    ART: {
      value: 'art',
      viewValue: 'Art',
      lectures: [
        { value: 'wed-12', viewValue: 'Wednesday 12-2' },
        { value: 'wed-2', viewValue: 'Wednesday 2-4' },
        { value: 'wed-4', viewValue: 'Wednesday 4-6' },
      ]
    }
  }

  constructor() { }

  getClasses(): Class[] {
    return Object.values(this.classes) as Class[];
  }
}