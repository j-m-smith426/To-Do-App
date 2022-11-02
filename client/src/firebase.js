import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, set, update } from "firebase/database";

const { REACT_APP_DATABASE_URL } = process.env;
const firebaseConfig = {
  databaseURL: REACT_APP_DATABASE_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);
export const todoRef = ref(db, "todo");

export const writeToDo = (name) => {
    push(todoRef, {
        name,
            compleat: false
        
    })
}

export const updateToDo = (todo) => {
    const key = Object.keys(todo)[0];
    console.log("Sending to DB",todo);
    update(ref(db, 'todo/'), {
        ...todo
    })
}