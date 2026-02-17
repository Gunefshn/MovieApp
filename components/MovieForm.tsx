import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { MovieState } from '@/types/movie';
import { Picker } from '@react-native-picker/picker';

type Props = {
  movieState: MovieState;
};

const MovieForm = ({ movieState }: Props) => {
  return (
    <ScrollView
      className="flex-1 bg-[#1a1a2e]"
      contentContainerStyle={{ paddingBottom: 40 }}
      keyboardShouldPersistTaps="handled">
      <View className="gap-3 px-5 pt-4">
        {/* Film Adı */}
        <Text className="ml-1 text-sm text-zinc-400">Movie Name</Text>
        <View className="h-12 justify-center rounded-2xl border border-[#3a3a4e] bg-[#2c2c3e] px-4">
          <TextInput
            className="text-base text-white"
            placeholder="Movie Name"
            placeholderTextColor="#6e6e80"
            value={movieState.title}
            onChangeText={movieState.setTitle}
          />
        </View>

        {/* Yönetmen */}
        <Text className="ml-1 text-sm text-zinc-400">Directors</Text>
        <View className="h-12 justify-center rounded-2xl border border-[#3a3a4e] bg-[#2c2c3e] px-4">
          <TextInput
            className="text-base text-white"
            placeholder="Director(s)"
            placeholderTextColor="#6e6e80"
            value={movieState.director}
            onChangeText={movieState.setDirector}
          />
        </View>

        {/* Oyuncular */}
        <Text className="ml-1 text-sm text-zinc-400">Actors</Text>
        <View className="h-12 justify-center rounded-2xl border border-[#3a3a4e] bg-[#2c2c3e] px-4">
          <TextInput
            className="text-base text-white"
            placeholder="Actors"
            placeholderTextColor="#6e6e80"
            value={movieState.actors}
            onChangeText={movieState.setActors}
          />
        </View>

        {/* Yayın Tarihi */}
        <Text className="ml-1 text-sm text-zinc-400">Release Date</Text>
        <View className="h-12 justify-center rounded-2xl border border-[#3a3a4e] bg-[#2c2c3e] px-4">
          <TextInput
            className="text-base text-white"
            placeholder="Release Date"
            placeholderTextColor="#6e6e80"
            value={movieState.releaseDate}
            onChangeText={movieState.setReleaseDate}
          />
        </View>

        {/* Tür */}
        <Text className="ml-1 text-sm text-zinc-400">Category</Text>
        <View className="justify-center rounded-2xl border border-[#3a3a4e] bg-[#2c2c3e] px-4">
          <Picker
            selectedValue={movieState.category}
            onValueChange={(itemValue) => movieState.setCategory(itemValue)}
            style={{ color: movieState.category ? '#ffffff' : '#6e6e80' }}
            dropdownIconColor="#6e6e80">
            <Picker.Item label="Select Genre..." value="" color="#6e6e80" />
            <Picker.Item label="Action" value="Action" color="#ffffff" />
            <Picker.Item label="Science Fiction" value="Science Fiction" color="#ffffff" />
            <Picker.Item label="Romantic Comedy" value="Romantic Comedy" color="#ffffff" />
            <Picker.Item label="Musical" value="Musical" color="#ffffff" />
            <Picker.Item label="Fantasy" value="Fantasy" color="#ffffff" />
            <Picker.Item label="Adventure" value="Adventure" color="#ffffff" />
            <Picker.Item label="Drama" value="Drama" color="#ffffff" />
            <Picker.Item label="Horror" value="Horror" color="#ffffff" />
            <Picker.Item label="Documentary" value="Documentary" color="#ffffff" />
            <Picker.Item label="Animation" value="Animation" color="#ffffff" />
            <Picker.Item label="Thriller" value="Thriller" color="#ffffff" />
          </Picker>
        </View>

        {/* Poster */}
        <View className="gap-2">
          <Text className="ml-1 text-sm text-zinc-400">Movie Poster</Text>

          <TouchableOpacity
            className="h-12 flex-row items-center justify-center rounded-2xl bg-red-500"
            activeOpacity={0.8}
            onPress={movieState.handleUpload}>
            <Text className="text-sm font-semibold text-white">
              {movieState.imageUrl ? 'Görseli Değiştir' : 'Görsel Seç'}
            </Text>
          </TouchableOpacity>

          {movieState.imageUrl ? (
            <View className="items-center">
              <Image
                source={{ uri: movieState.imageUrl }}
                className="h-48 w-32 rounded-2xl"
                resizeMode="cover"
              />
            </View>
          ) : null}
        </View>
        {/* Kısa Özet */}
        <Text className="ml-1 text-sm text-zinc-400">Description</Text>
        <View className="rounded-2xl border border-[#3a3a4e] bg-[#2c2c3e]">
          <TextInput
            className="px-4 py-3 text-base text-white"
            placeholder="Filmin kısa açıklamasını girin..."
            placeholderTextColor="#6e6e80"
            value={movieState.description}
            onChangeText={movieState.setDescription}
            multiline
            textAlignVertical="top"
            style={{ minHeight: 120 }}
          />
        </View>

        {/* FİLMİ KAYDET */}
        <TouchableOpacity
          className="mt-2 h-14 items-center justify-center rounded-2xl bg-purple-700"
          activeOpacity={0.85}
          onPress={movieState.handleFn}>
          <Text className="text-base font-bold tracking-widest text-white">SAVE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MovieForm;
