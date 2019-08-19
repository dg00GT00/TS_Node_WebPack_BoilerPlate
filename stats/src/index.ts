import path from "path";
import {SummaryReporter} from "./SummaryReporter";
import {MatchReader} from "./MatchReader";

const fileName = path.resolve(__dirname, '..', 'football.csv');

const matchReader = MatchReader.fromCsv(fileName);
const summaryMan = SummaryReporter.winsAnalysisWithHtmlReport('West Ham');

matchReader.load();
summaryMan.buildAndPrintReport(matchReader.matches);
