import { 
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  QueryConstraint
} from 'firebase/firestore';
import { db } from '../../config/firebase';
import { COLLECTIONS } from '../../firebase/collections';
import type { Collections } from '../../firebase/collections';

export async function getDocument<T extends keyof Collections>(
  collectionName: T,
  id: string
): Promise<Collections[T] | null> {
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? (docSnap.data() as Collections[T]) : null;
  } catch (error) {
    throw error;
  }
}

export async function queryDocuments<T extends keyof Collections>(
  collectionName: T,
  constraints: QueryConstraint[]
): Promise<Collections[T][]> {
  try {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, ...constraints);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Collections[T]);
  } catch (error) {
    throw error;
  }
}

export async function createDocument<T extends keyof Collections>(
  collectionName: T,
  id: string,
  data: Collections[T]
): Promise<void> {
  try {
    const docRef = doc(db, collectionName, id);
    await setDoc(docRef, data);
  } catch (error) {
    throw error;
  }
}

export async function updateDocument<T extends keyof Collections>(
  collectionName: T,
  id: string,
  data: Partial<Collections[T]>
): Promise<void> {
  try {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, data as any);
  } catch (error) {
    throw error;
  }
}

export async function deleteDocument<T extends keyof Collections>(
  collectionName: T,
  id: string
): Promise<void> {
  try {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
  } catch (error) {
    throw error;
  }
}

// Utility function to create query constraints
export const createQueryConstraints = {
  where: where,
  orderBy: orderBy,
  limit: limit,
};