import { db } from "@/services/firebaseConfig";
import { Movie } from "@/types/movie";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { doc, updateDoc } from "firebase/firestore";


export const useUpdateMovie = () => {
  const queryClient = useQueryClient ();
  return useMutation ({
    mutationFn: async(movie:Movie) => {
      const movieRef = doc(db,"movies",movie.id);
      await updateDoc(movieRef,movie);
    },
    onSuccess:(_data,movie)=>{
      queryClient.invalidateQueries({
        queryKey: ["movies",movie.id]
      });
      queryClient.invalidateQueries({
        queryKey:["movies"],
      });
    },
  });
};