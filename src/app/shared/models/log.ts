export interface Log {
    date:string;
    sessions:[{
        startTime:string,
        endTime:string
    }];
}