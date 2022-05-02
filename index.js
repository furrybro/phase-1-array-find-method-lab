// code your solution here
// function superbowlWin(records) {
//     for (const record of records) {
//         if (record.result === "W") {
//             return record.year;
//         }
//     }
// }

function superbowlWin(records) {
    const winFinder = (element) => {return element.result === "W"}
    const wins = records.find(winFinder)
    if (wins === undefined) {
        return undefined;
    } 
    return wins.year;
}
