export type Movie ={
  id:string,
  title:string,
  description:string,
  category:string,
  director:string, 
  actors:string, 
  releaseDate:string,
  imageUrl:string,
}

export type MovieState ={
 title:string,
  description:string,
  category:string,
  director:string, 
  actors:string, 
  releaseDate:string,
  imageUrl:string,
  setTitle:React.Dispatch<React.SetStateAction<string>>;
  setDescription:React.Dispatch<React.SetStateAction<string>>;
  setCategory:React.Dispatch<React.SetStateAction<string>>;
  setDirector:React.Dispatch<React.SetStateAction<string>>;
  setActors:React.Dispatch<React.SetStateAction<string>>;
  setReleaseDate:React.Dispatch<React.SetStateAction<string>>;
  setImageUrl:React.Dispatch<React.SetStateAction<string>>;
  handleFn: ()=> void;
  handleUpload : ()=> void;
}