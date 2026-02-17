import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { useMovies } from '@/hooks/useMovies';
import MovieCard from '@/components/MovieCard';
import { Ionicons } from '@expo/vector-icons';
import { Movie } from '@/types/movie';

const Index = () => {
  const { data: movies } = useMovies();
  const [search, setSearch] = useState('');

  const filtered = movies?.filter((m: Movie) =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View className="flex-1 bg-[#1a1a2e]">
      {/* Başlık */}
      <Text className="mt-4 text-center text-xl font-bold tracking-widest text-white">MOVIES</Text>

      {/* Arama */}
      <View className="mx-5 mt-4 h-12 flex-row items-center rounded-2xl bg-[#e8e8ed] px-4">
        <Ionicons name="search" size={18} color="#8e8e93" />
        <TextInput
          className="ml-2 flex-1 text-base text-[#1c1c1e]"
          placeholder="Film Ara..."
          placeholderTextColor="#8e8e93"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Film Listesi */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MovieCard movie={item} />}
        contentContainerStyle={{ paddingTop: 12, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Floating + Butonu */}
      <TouchableOpacity
        className="absolute bottom-8 right-6 h-16 w-16 items-center justify-center rounded-full bg-purple-700"
        activeOpacity={0.85}
        onPress={() => router.push('/movies/add')}
        style={{
          shadowColor: '#7c3aed',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.5,
          shadowRadius: 10,
          elevation: 8,
        }}>
        <Text className="text-3xl font-light text-white">+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
