//task 1
function searchCandidatesByPhoneNumber(phone) {
    phone += '';

    let phoneInt = phone.replace(/\D/g, '');

    let result = [];

     condidateArr.forEach(item => {
        let number = item.phone.replace(/\D/g, '');
        if (number.includes(phoneInt)) {
            return result.push(item);
        }            
    })

    return result;   
}
console.log(searchCandidatesByPhoneNumber('43'));
console.log(searchCandidatesByPhoneNumber('+1(869) 40'));
console.log(searchCandidatesByPhoneNumber('+1(869)408-39-82'));

//task 2

const getCandidateById = id => {
    
    let condidate = condidateArr.find((element, index, arr) => {
        if (id === element._id) {
            
            return {...arr[index]};
        }
    })

    let registeredYear = condidate['registered'].split('-')[0];
    let registeredMonth = condidate['registered'].split('-')[1];
    let registeredDay = condidate['registered'].split('-')[2].split('T')[0];

    condidate['registered'] = `${registeredDay}/${registeredMonth}/${registeredYear}`
     
    return condidate;
}

// console.log(getCandidateById("5e216bc9205f933d24f7ef2e"));
