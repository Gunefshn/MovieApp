import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useLocalSearchParams, router } from 'expo-router';
import { useMovie } from '@/hooks/useMovie';

const Index = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: movie } = useMovie(id);

  return (
    <View className="flex-1 bg-[#1a1a2e]">
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Poster */}
        <View className="items-center pt-6">
          <Image
            source={{ uri: movie?.imageUrl }}
            className="h-80 w-56 rounded-2xl"
            resizeMode="cover"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.6,
              shadowRadius: 16,
            }}
          />
        </View>

        {/* Bilgiler */}
        <View className="mt-6 gap-1 px-6">
          <Text className="mb-1 text-2xl font-bold text-white">{movie?.title}</Text>

          <Text className="text-sm text-zinc-300">
            <Text className="text-zinc-400">Director: </Text>
            {movie?.director}
          </Text>
          <Text className="text-sm text-zinc-300">
            <Text className="text-zinc-400">Actors: </Text>
            {movie?.actors}
          </Text>
          <Text className="text-sm text-zinc-300">
            <Text className="text-zinc-400">Release Date: </Text>
            {movie?.releaseDate}
          </Text>
          <Text className="text-sm text-zinc-300">
            <Text className="text-zinc-400">Category: </Text>
            {movie?.category}
          </Text>

          <Text className="mt-4 text-sm leading-6 text-zinc-300">{movie?.description}</Text>
        </View>
      </ScrollView>

      {/* Alt Butonlar */}
      <View className="absolute bottom-0 left-0 right-0 flex-row gap-3 bg-[#1a1a2e] px-6 pb-8 pt-4">
        <TouchableOpacity
          className="h-14 flex-1 items-center justify-center rounded-2xl border border-white"
          activeOpacity={0.8}
          onPress={() => router.push(`/movies/${id}/edit`)}>
          <Text className="text-base font-semibold text-white">Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="h-14 flex-1 items-center justify-center rounded-2xl bg-red-500"
          activeOpacity={0.8}
          onPress={() => router.push(`/movies/${id}/delete`)}>
          <Text className="text-base font-semibold text-white">Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;
