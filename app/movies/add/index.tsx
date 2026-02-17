import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import { useAddMovie } from '@/hooks/useAddMovie';
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/services/firebaseConfig';
import { router } from 'expo-router';
import MovieForm from '@/components/MovieForm';

const Index = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [director, setDirector] = useState('');
  const [actors, setActors] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const { mutate: AddMovie } = useAddMovie();

  const handleUpload = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos', 'livePhotos'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.75,
    });
    if (!result.assets) {
      alert('Please choose an image.');
      return;
    }
    const imagePath = result.assets[0].uri;
    const response = await fetch(imagePath);
    const blob = await response.blob();
    const fileName = imagePath.substring(imagePath.lastIndexOf('/') + 1);
    const storageRef = ref(storage, fileName);
    await uploadBytes(storageRef, blob);
    const downloadUrl = await getDownloadURL(storageRef);
    setImageUrl(downloadUrl);
    alert('Upload Successful.');
  };

  const handleAdd = async () => {
    if (!title) {
      alert('Film adı zorunludur.');
      return;
    }
    if (!imageUrl) {
      alert('Lütfen bir görsel seçin.');
      return;
    }
    AddMovie({
      title,
      description,
      category,
      director,
      actors,
      releaseDate,
      imageUrl,
    });
    router.back();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
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
              handleFn: handleAdd,
              handleUpload,
            }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Index;
