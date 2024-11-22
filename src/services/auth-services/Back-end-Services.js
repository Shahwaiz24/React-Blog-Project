import { Client, Account, ID, Databases } from "appwrite";
import config from "../../config/Confg-Variable";

class BackEndAuthService {
   client = new Client();
   account;
   database;
   constructor(){
      this.client = new Client().setEndpoint(config.BACKEND_URL)
    .setProject(config.BACKEND_PROJECT_ID);
    this.account = new Account(this.client);
    this.database = new Databases(this.client);
   }
   
   static async signUp({ email, password, name }) {
      try {

          let response = await this.account.create(ID.unique(), email.toString(), password.toString());
  
          if (response) {

              let createUser = await this.databases.createDocument(
                  config.BACKEND_DATABASE_ID,
                  config.BACKEND_USER_COLLECTION_ID,
                  ID.unique(),
                  {
                      name: name.toString(),
                      email: email.toString(),
                      password: password.toString(),
                  }
              );
  
              if (createUser) {
                  localStorage.setItem("userId", createUser.$id);
                  console.log("User successfully signed up with email:", email);
                  return true; // Success
              } else {
                  console.log("Failed to create user document for:", email);
                  return false; 
              }
          } else {
              console.log("Failed to create Appwrite account for:", email);
              return false; 
          }
      } catch (error) {
          console.error("Sign-Up Error:", error.message || error.toString());
          return false; // Error occurred
      }
  }
  
  static async login({ email, password }) {
   try {
       // Fetch all documents from the user collection
       let documents = await this.databases.listDocuments(
           config.BACKEND_DATABASE_ID,
           config.BACKEND_USER_COLLECTION_ID
       );

       if (documents && documents.total > 0) {
           // Find a document where email and password match
           let userDocument = documents.documents.find(
               (doc) => doc.email === email && doc.password === password
           );

           if (userDocument) {
               // Save document ID in localStorage
               localStorage.setItem("userDocId", userDocument.$id);

               // Create a session using Appwrite
               let session = await this.account.createEmailPasswordSession(
                   email.toString(),
                   password.toString()
               );

               if (session) {
                   console.log("Login successful for:", email);
                   return true; // Login successful
               } else {
                   console.log("Session creation failed for:", email);
                   return false; // Session creation failed
               }
           } else {
               console.log("Invalid email or password for:", email);
               return false; // Email or password does not match
           }
       } else {
           console.log("No users found in the database.");
           return false; // No documents in the user collection
       }
   } catch (error) {
       console.error("Login Error:", error.message || error.toString());
       return false; // Error occurred
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