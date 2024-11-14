import { Client, Account, ID } from "appwrite";
import config from "../../config/Confg-Variable";

class BackEndAuthService {
   client = new Client();
   account;
   constructor(){
      this.client = new Client().setEndpoint(config.BACKEND_URL)
    .setProject(config.BACKEND_PROJECT_ID);
    this.account = new Account(this.client);
   }
   static async signUp({email,password}){
      try {
          let response = await this.account.create(ID.unique(), email.toString(),  password.toString());
          if(response){
            console.log("Response User: ",email," ",response.toString());
            return true;
          }else{
            console.log("Response User: ",email," ",response.toString());
            return false;
          }
      } catch (error) {
         console.log("Response User: ",email," ",error.toString());
return null;
         
      }
   }
   static async login ({email,password}){
      try {
         let response = await this.account.createEmailPasswordSession(email.toString(),  password.toString());
         if(response){
            console.log("Response User: ",email," ",response.toString());
            return true;
         }else{
           console.log("Response User: ",email," ",response.toString());
           return false;
         }
      } catch (error) {
         console.log("Response User: ",email," ",error.toString());
return null;
      }
   }
   static async getUser(){
      try {
         
         let response = await this.account.get();
         if(response){
            console.log("Response User: ",response.toString());
            return true;
         }else{
           console.log("Response User: ",response.toString());
           return false;
         }
      } catch (error) {
         console.log("Response User: ",error.toString());
return null;
      }
   }
   static async logoutUser(){
      try {
         
         let response = await this.account.deleteSessions();
         if(response){
            console.log("Response User: ",response.toString());
            return true;
         }else{
           console.log("Response User: ",response.toString());
           return false;
         }
      } catch (error) {
         console.log("Response User: ",error.toString());
return null;
      }
   }
}

const authServices = new BackEndAuthService();