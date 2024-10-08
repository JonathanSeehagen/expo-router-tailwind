import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function UserPage() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>UserPage - {id}</Text>
    </View>
  );
}
