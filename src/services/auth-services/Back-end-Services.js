import { Client, Account, ID, Databases,Query } from "appwrite";
import config from "../../config/Confg-Variable";
import { login, saveUserData } from "../Slices/Auth-Slices";

export default class BackEndAuthService {
   client = new Client();
   account;
   database;
   constructor(){
      this.client = new Client().setEndpoint(config.BACKEND_URL)
    .setProject(config.BACKEND_PROJECT_ID);
    this.account = new Account(this.client);
    this.database = new Databases(this.client);
   }
   
   async signUp({ email, password, name }) {
    try {
        // Validate required parameters
        if (!email || !password || !name) {
            console.error("Sign-Up Error: Missing required fields");
            return false; // Early exit if parameters are invalid
        }

        // Check if a user with the same email already exists
        const existingUsers = await this.database.listDocuments(
            config.BACKEND_DATABASE_ID,
            config.BACKEND_USER_COLLECTION_ID,
            [
                Query.equal('email', email)
            ]
        );

        if (existingUsers.documents && existingUsers.documents.length > 0) {
            console.error("Sign-Up Error: User with this email already exists:", email);
            return false; // User already exists
        }

        // Create the user document
        const createUser = await this.database.createDocument(
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
            console.log("User successfully signed up with email:", email, "And Id:", localStorage.getItem("userId"));
            return true; // Success
        } else {
            console.error("Failed to create user document for:", email);
            return false;
        }
    } catch (error) {
        console.error("Sign-Up Error:", error.message);
        return false; // Error occurred
    }
}



  
   async login({ email, password }) {
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
               localStorage.setItem("userId",JSON.stringify(userDocument.$id));
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

 async getUser({ UserdocId,dispatch }) {
   try {
       // Fetch the document using the provided document ID
       let userDocument = await this.databases.getDocument(
           config.BACKEND_DATABASE_ID,
           config.BACKEND_USER_COLLECTION_ID,
           UserdocId.toString()
       );

       if (userDocument) {
           console.log("User Document fetched successfully:", userDocument);
           const userDetails = {
            name: userDocument.name.toString(),
            email: userDocument.email.toString(),
            password: userDocument.password.toString(),
        };

       
        dispatch(saveUserData({
         payload: userDetails,
     }));
           return true;
       } else {
           console.log("Failed to fetch document for ID:", UserdocId);
           return false; // Document not found
       }
   } catch (error) {
       console.error("Error fetching user document for ID:", UserdocId, error.message || error.toString());
       return false; // Error occurred
   }
}

    async logoutUser(){
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
return false;
      }
   }
   
}

export const  AuthService = new BackEndAuthService();

