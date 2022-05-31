var humanYearsCatYearsDogYears = function(humanYears) { 
let catYear = humanYears < 2 ? 15 : humanYears <3 ? 24 : 24+ (humanYears-2)*4 
let dogYear = humanYears < 2 ? 15 : humanYears <3 ? 24 : 24+ (humanYears-2)*5 
return [humanYears,catYear,dogYear]; 
}