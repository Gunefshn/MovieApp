import { View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { useMovie } from '@/hooks/useMovie';
import { useUpdateMovie } from '@/hooks/useUpdateMovie';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import { storage } from '@/services/firebaseConfig';
import MovieForm from '@/components/MovieForm';

const Edit = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: movie } = useMovie(id);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [director, setDirector] = useState('');
  const [actors, setActors] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // Movie yüklenince state'leri doldur
  useEffect(() => {
    if (movie) {
      setTitle(movie.title ?? '');
      setDescription(movie.description ?? '');
      setCategory(movie.category ?? '');
      setDirector(movie.director ?? '');
      setActors(movie.actors ?? '');
      setReleaseDate(movie.releaseDate ?? '');
      setImageUrl(movie.imageUrl ?? '');
    }
  }, [movie]);

  const { mutate: updateMovie } = useUpdateMovie();

  const handleUpload = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.75,
    });

    if (result.canceled || !result.assets || result.assets.length === 0) return;

    try {
      const imagePath = result.assets[0].uri;
      const response = await fetch(imagePath);
      const blob = await response.blob();
      const fileName = imagePath.substring(imagePath.lastIndexOf('/') + 1);
      const storageRef = ref(storage, `posters/${fileName}`);
      await uploadBytes(storageRef, blob);
      const downloadUrl = await getDownloadURL(storageRef);
      setImageUrl(downloadUrl);
      alert('Upload Successful.');
    } catch (error) {
      alert('Görsel yüklenirken hata oluştu.');
    }
  };

  const handleUpdate = async () => {
    updateMovie({ id, title, description, category, director, actors, releaseDate, imageUrl });
    router.back();
  };

  return (
    <View className="flex-1 bg-[#1a1a2e]">
      <MovieForm
        movieState={{
          title,
          description,
          category,
          director,
          actors,
          releaseDate,
          imageUrl,
          setTitle,
          setDescription,
          setCategory,
          setDirector,
          setActors,
          setReleaseDate,
          setImageUrl,
          handleFn: handleUpdate,
          handleUpload,
        }}
      />
    </View>
  );
};

export default Edit;
