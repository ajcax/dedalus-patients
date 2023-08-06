export interface Patient {
  id: string;
  name: [{
    given: string[];
    family: string;
  }
  ];
  gender: string;
  birthDate: string;
  address: [{
    city: string;
    postalCode: string;
    state: string;
    use: string;
  }]
  contact:[{
    name: {
      family: string;
      given: string[];
    };
    given: string[];
    telecom: [{
      value: string
    }]
  }]
}
