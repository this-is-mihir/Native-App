import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, usePathname } from "expo-router";
import React from "react";

export default function BottomBar() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (route: string) => pathname.includes(route);

  return (
    <View className="h-20 bg-white flex-row justify-around items-center border-t">

      <TouchableOpacity
        onPress={() => router.replace("/bottom_tabs/shop")}
        className="items-center"
      >
        <Ionicons
          name="flash"
          size={22}
          color={isActive("shop") ? "#111827" : "#9CA3AF"}
        />
        <Text
          className={`text-xs ${
            isActive("shop")
              ? "text-gray-900 font-semibold"
              : "text-gray-400"
          }`}
        >
          Shop
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.replace("/bottom_tabs/user")}
        className="items-center"
      >
        <Ionicons
          name="people"
          size={22}
          color={isActive("user") ? "#111827" : "#9CA3AF"}
        />
        <Text
          className={`text-xs ${
            isActive("user")
              ? "text-gray-900 font-semibold"
              : "text-gray-400"
          }`}
        >
          Users
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.replace("/bottom_tabs/brands")}
        className="items-center"
      >
        <Ionicons
          name="bookmark"
          size={22}
          color={isActive("brands") ? "#111827" : "#9CA3AF"}
        />
        <Text
          className={`text-xs ${
            isActive("brands")
              ? "text-gray-900 font-semibold"
              : "text-gray-400"
          }`}
        >
          Brands
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.replace("/bottom_tabs/profile")}
        className="items-center"
      >
        <Ionicons
          name="person"
          size={22}
          color={isActive("profile") ? "#111827" : "#9CA3AF"}
        />
        <Text
          className={`text-xs ${
            isActive("profile")
              ? "text-gray-900 font-semibold"
              : "text-gray-400"
          }`}
        >
          Profile
        </Text>
      </TouchableOpacity>

    </View>
  );
}
