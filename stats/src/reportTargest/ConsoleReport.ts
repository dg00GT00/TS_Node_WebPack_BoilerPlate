import {IOutputTarget} from "../SummaryReporter";

export class ConsoleReport implements IOutputTarget {
    print(report: string): void {
        console.log(report)
    }
}
