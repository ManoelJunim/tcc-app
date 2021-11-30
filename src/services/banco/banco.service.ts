import { db } from '../Firebase';
import { collection, doc, DocumentSnapshot, getDocs } from '@firebase/firestore';
import { DocumentData, getDoc, QuerySnapshot } from 'firebase/firestore';

const BancoServices = {
  getAll: async (): Promise<QuerySnapshot<DocumentData>> => {
    const placeCollectionRef = collection(db, 'tblLocal');
    const data = await getDocs(placeCollectionRef);
    return data;
  },

  getOne: async (id: string): Promise<DocumentSnapshot<DocumentData>> => {
    const placeCollectionRef = doc(db, 'tblLocal', id);
    const data = await getDoc(placeCollectionRef);
    return data;
  },
};

export { BancoServices };
