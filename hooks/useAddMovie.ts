import { db } from "@/services/firebaseConfig";
import { Movie } from "@/types/movie";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addDoc, collection } from "firebase/firestore";

export const useAddMovie = ()=>{
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn:async (movie : Omit<Movie,"id">)=>{
      const moviesRef = collection(db,"movies");
      await addDoc(moviesRef,movie);
    },
    onSuccess: () =>{
      queryClient.invalidateQueries({
        queryKey:['movies'],
      });
    },
  });
}