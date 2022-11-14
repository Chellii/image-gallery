import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "../../../../lib/databaseLevel";

export const authenticate = {
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const userDatabase = connectToDatabase();
                // Connect to database
                const { username, password } = credentials;
                // Get User by username
                return userDatabase.get(username)
                    .then((user) => {
                        if (password == user.password){
                            if (user.status == 'Active') {
                                return {
                                    id: user.id,
                                    username: user.username,
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                };
                            } else {
                                userDatabase.close();
                                throw new Error("Ce compte a été bloqué.");
                            }
                        } else {
                            userDatabase.close();
                            throw new Error("Mot de passe incorrect");
                        }
                    })
                    .catch((err) => {
                        userDatabase.close();
                        if (err.notFound)
                            throw new Error("Informations de connexion invalides");
                        else
                            throw new Error(err.message);
                    })
            }
        })
    ]
}

export default NextAuth(authenticate);
