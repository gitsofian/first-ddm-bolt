import { 
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  listAll
} from 'firebase/storage';
import { storage } from '../../config/firebase';

export async function uploadFile(path: string, file: File): Promise<string> {
  try {
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  } catch (error) {
    throw error;
  }
}

export async function deleteFile(path: string): Promise<void> {
  try {
    const storageRef = ref(storage, path);
    await deleteObject(storageRef);
  } catch (error) {
    throw error;
  }
}

export async function listFiles(path: string): Promise<string[]> {
  try {
    const storageRef = ref(storage, path);
    const result = await listAll(storageRef);
    return await Promise.all(result.items.map(item => getDownloadURL(item)));
  } catch (error) {
    throw error;
  }
}