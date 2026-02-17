import { db } from "@/services/firebaseConfig";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteDoc, doc } from "firebase/firestore";

export const useDeleteMovie = () =>{
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const movieRef = doc(db,"movies",id);
      await deleteDoc(movieRef);
    },
    onSuccess:() =>{
      queryClient.invalidateQueries({
        queryKey:["movies"],
      });
    },
  });
};