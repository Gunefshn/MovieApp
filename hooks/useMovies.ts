import { db } from "@/services/firebaseConfig"
import { Movie } from "@/types/movie"
import { useQuery } from "@tanstack/react-query"
import { collection, getDoc, getDocs } from "firebase/firestore"

export const useMovies = () =>{
  return useQuery<Movie[]>({
    queryKey: ["movies"],
    queryFn: async ()=>{
      const moviesRef = collection(db,"movies");
      const snapshot = await getDocs(moviesRef);
      const movies = snapshot.docs.map((doc) =>({
        id:doc.id,
        ...doc.data(),
      }))
      return movies as Movie[];
    }
  })
}