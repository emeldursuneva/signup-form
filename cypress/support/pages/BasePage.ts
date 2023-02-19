import {faker} from '@faker-js/faker';
const randomFirstName=faker.name.firstName();
const randomEmail=faker.internet.email();
const randomPassword10=faker.random.alphaNumeric(10);
const randomPassword9=faker.random.alphaNumeric(9);
export class BasePage{

public randomFirstName(){
    return randomFirstName
}
public randomEmail(){
    return randomEmail
}
public randompassword10(){
    return randomPassword10
}
public randomPassword9(){
    return randomPassword9
}
}