import {AnswerTypesInterface} from "./answer-types-interface";
export interface ResultInterface{
    sections : SectionInterface[]
}
export interface SectionInterface{
    id : number,
    complete: boolean,
    questions : AnswerTypesInterface[]
}