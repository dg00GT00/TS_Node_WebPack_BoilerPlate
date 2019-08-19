import {MatchData} from "./MatchData";
import {WinsAnalysis} from "./analyzers/WinsAnalysis";
import {HtmlReport} from "./reportTargest/HtmlReport";

export interface IAnalyzer {
    run(matches: MatchData[]): string;
}

export interface IOutputTarget {
    print(report: string): void;
}

export class SummaryReporter {
    constructor(public analyzer: IAnalyzer, public outputTarget: IOutputTarget) {

    }
    static winsAnalysisWithHtmlReport(team: string): SummaryReporter{
        return new SummaryReporter(new WinsAnalysis(team), new HtmlReport())
    }

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
