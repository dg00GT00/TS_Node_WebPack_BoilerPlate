import path from "path";
import {MatchReader} from "./MatchReader";
import {MatchResult} from "./MatchResult";

const fileName = path.resolve(__dirname, '..', 'football.csv');

const reader = new MatchReader(fileName);
reader.read();

let manUnitedWins = 0;

for (const match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else {
        if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
            manUnitedWins++;
        }
    }
}

console.log(`Man United won ${manUnitedWins} games`);
