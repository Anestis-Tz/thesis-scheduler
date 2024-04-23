
export interface Lecture {
    value: string;
    viewValue: string;
  }
  
  export interface Class {
    value: string;
    viewValue: string;
    lectures: Lecture[];
  }
  