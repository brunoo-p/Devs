const CalculateAge = (birthDate ) => {

    let d = birthDate.split('-');
    let birthDay = parseInt(d[2]);
    let birthMonth = parseInt(d[1]);
    let birthYear = parseInt(d[0]);


    let now = new Date();

    let age = now.getFullYear() - birthYear;
    if((now.getMonth() + 1) < birthMonth || (birthMonth === (now.getMonth() + 1) && birthDay < now.getDate())){
        age --;
    }
    
    return age < 0 ? 0 : age;

}

export {CalculateAge};