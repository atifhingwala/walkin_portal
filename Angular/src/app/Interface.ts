export interface dropDown{
    name: string;
    type: dropDownType;
    applicantType?: string;
}

export enum dropDownType{
    educational=1,
    professional=2
}