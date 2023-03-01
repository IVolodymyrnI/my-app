import { getDatabase } from 'firebase/database';
import { getDatabase, ref, set } from 'firebase/database';

export function writeUserData(userId, object) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), object);
}
