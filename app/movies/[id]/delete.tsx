import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { useMovie } from '@/hooks/useMovie';
import { useDeleteMovie } from '@/hooks/useDeleteMovie';

const Delete = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: movie } = useMovie(id);
  const { mutate: deleteMovie } = useDeleteMovie();

  const handleDelete = () => {
    deleteMovie(id);
    router.dismissAll();
  };

  return (
    <View className="flex-1 items-center justify-center bg-[#1a1a2e] px-6">
      {/* Icon */}
      <View className="mb-6 h-20 w-20 items-center justify-center rounded-full bg-red-500/20">
        <Text className="text-4xl">🗑️</Text>
      </View>

      {/* Title */}
      <Text className="mb-2 text-2xl font-bold text-white">Delete Movie</Text>

      {/* Description */}
      <Text className="mb-8 text-center text-base leading-6 text-zinc-400">
        Are you sure you want to delete{' '}
        <Text className="font-semibold text-white">"{movie?.title}"</Text>? This action cannot be
        undone.
      </Text>

      {/* Buttons */}
      <View className="w-full gap-3">
        <TouchableOpacity
          className="h-14 w-full items-center justify-center rounded-2xl bg-red-500"
          activeOpacity={0.8}
          onPress={handleDelete}>
          <Text className="text-base font-bold text-white">Yes, Delete</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="h-14 w-full items-center justify-center rounded-2xl border border-zinc-600"
          activeOpacity={0.8}
          onPress={() => router.back()}>
          <Text className="text-base font-semibold text-zinc-300">Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Delete;
