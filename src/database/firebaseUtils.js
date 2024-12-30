import {
  getDatabase,
  ref,
  onValue,
  push,
  set,
  remove,
} from "firebase/database";
import app from "./firebaseConfig";

export const db = getDatabase(app);

// Read/Get data from databse;
export const getFirebseData = async (tableName) => {
  const starCountRef = ref(db, tableName);

  return new Promise((resolve, reject) => {
    try {
      onValue(starCountRef, (snapshot) => {
        const updateCategoryList = [];

        snapshot.forEach((item) => {
          updateCategoryList.push({
            id: item.key,
            ...item.val(),
          });
        });

        resolve(updateCategoryList);
      });
    } catch (error) {
      reject(error);
    }
  });
};

export const getFirebaseDataFormEdit = async (tableName) => {
  const starCountRef = ref(db, tableName);

  return new Promise((resolve, reject) => {
    try {
      onValue(starCountRef, (snapshot) => {
        resolve(snapshot.val());
      });
    } catch (error) {
      reject(error);
    }
  });
};

// Write/Set/Push data to database;
export const setDataFirebase = (tableName, data) => {
  push(ref(db, tableName), data);
};

// update firebase;
export const updateFirebase = (tableName, data) => {
  set(ref(db, tableName), data);
};

// remove data for firebase;
export const removeFirebase = (tableName) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(remove(ref(db, tableName)));
    } catch (error) {
      reject(error);
    }
  });
};

// ******************************* User Profile *************************** //
export const createUserProfile = async (data) => {
  const { id, name, role, email } = data;
  set(ref(db, "userProfile/" + id), {
    name,
    role,
    email,
  });
};

export const getProfile = async (id) => {
  return new Promise((resolve, reject) => {
    try {
      onValue(ref(db, "userProfile/" + id), (snapshot) => {
        resolve(snapshot.val());
      });
    } catch (error) {
      reject(error);
    }
  });
};

// ******************************* User Profile *************************** /

export const serProductToCart = (data) => {
  const { userId, productId, quantity } = data;
  push(ref(db, "carts/" + userId), {
    productId,
    quantity,
  });
};
