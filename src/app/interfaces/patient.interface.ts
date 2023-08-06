export interface Patient {
  id: string;
  name: [{
    given: string[];
    family: string;
  }
  ];
  gender: string;
  birthDate: string;

}
