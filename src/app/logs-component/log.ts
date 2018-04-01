export class Log{
    timeStamp: string;
    userID: number;
    sections: [
        {
            id: number,
            complete: boolean,
            questions: [
                {
                    id: number,
                    name: string,
                    value: string,
                    valid: boolean
                }
            ]
        }
    ];
    [key : string] : any;
}
export default Log;