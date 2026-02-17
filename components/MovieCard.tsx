import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Movie } from '@/types/movie';
import { router } from 'expo-router';

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => router.push(`/movies/${movie.id}`)}
      activeOpacity={0.8}
      className="mx-4 my-1.5 flex-row items-center overflow-hidden rounded-2xl border border-purple-800/40 bg-zinc-900"
      style={{
        shadowColor: '#6644cc',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.45,
        shadowRadius: 8,
        elevation: 6,
      }}>
      {/* Poster */}
      <Image
        source={{ uri: movie.imageUrl }}
        className="h-24 w-28 rounded-l-2xl"
        resizeMode="cover"
      />

      {/* Info */}
      <View className="flex-1 gap-1 px-4">
        <Text className="text-base font-bold tracking-wide text-white" numberOfLines={1}>
          {movie.title}
        </Text>
        <Text className="text-sm font-normal text-zinc-400" numberOfLines={1}>
          {movie.category}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
