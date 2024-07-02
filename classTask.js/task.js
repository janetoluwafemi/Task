let scores = [45, 60, 90, 20, 100]
let numbers = scores.filter(studentScores)

function studentScores(score){
    return score >= 70
 
}
console.log(numbers)



let results = [85, 92, 78, 88, 95]
let finalResult = results.map(studentResult)

function studentResult(result){
    sum = result + 5
    return sum
}
console.log(finalResult)



let values = [2, 4, 6, 8, 10]
let final = values.map(squareOfNumbers)

function squareOfNumbers(value){
    return value * value
}
console.log(final)



let members = ["Emily", "Jack", "Sophia", "Daniel"]

function booksForMembers(){
    books = ["Love", "Past", "Father's love", "Murder"]
    let count = 0
    for (const member of members){
        console.log(member + "is assigned to this book:" + books[count])
        count++
    }
}

booksForMembers()



function correctTiming(){
    let time = ["9:00 AM", "11:00 AM", "1:00PM", "3:00 PM", "5:00 PM"]
    const timeOfferedInAfternoon = time.filter(correctTime => {
        const timeOffered = correctTime.substring(correctTime.length - 2)
        return timeOffered === "AM"
    })  
    console.log(timeOfferedInAfternoon)  
}
correctTiming()



expenses = ["groceries", "dining out", "transportation", "entertainment"]
function costExpenses(){
    amount = [150, 100, 50, 80]
    let sum = 0
    for (const count in amount){  
        sum += amount[count]
    }
    return sum
}

console.log(costExpenses(expenses))



