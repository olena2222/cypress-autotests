import BasePage from "./BasePage"
import ContactsFooter from "../Components/ContactsFooter"
import Header from "../Components/Header"
import Signin from "../Components/Signin"
import Signup from "../Components/Signup"
const url ="/"
export default class extends BasePage{
    constructor(){
        super(url)
        this.contactsFooter=new ContactsFooter();
        this.header=new Header();
        this.signin=new Signin();
        this.signup=new Signup();
    }
    

    

}