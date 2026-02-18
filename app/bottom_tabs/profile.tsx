import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as React from "react";
import { useContext } from "react";
import BottomBar from "@/components/BottomBar";
import { UserContext } from "../../context/UserContext";

export default function App() {
  const router = useRouter();
  const { profileImage } = useContext(UserContext);

  return (
    <View className="flex-1 bg-[#E9E7E3]">

      {/* HEADER */}
      <View className="bg-white">
        <Image
          source={{
            uri: "https://i.pinimg.com/1200x/de/0e/38/de0e388b86c8958bd224f8adee9ccfdc.jpg",
          }}
          className="w-full h-[260px]"
        />

        <View className="items-center px-6 pb-6">
          <Image
            source={{
              uri:
                profileImage ||
                "https://i.pinimg.com/1200x/bb/00/fb/bb00fbabd0a58d0bc918cb8bd5664837.jpg",
            }}
            className="w-24 h-24 rounded-full border-4 border-white -mt-12"
          />

          <Text className="text-xl font-semibold text-gray-800 pt-3">
            John Sharma
          </Text>

          <Text className="text-gray-500 text-center pt-1">
            Work hard in silence, Let your success be the noise.
          </Text>
        </View>
      </View>

      {/* MENU */}
      <View className="flex-1 bg-[#F5F5F5] rounded-t-3xl px-6 pt-6">
        <ScrollView showsVerticalScrollIndicator={false}>

          <View className="pb-4">
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/acinfo")}
              className="bg-white rounded-2xl flex-row items-center justify-between px-5 py-4"
            >
              <View className="flex-row items-center">
                <Feather name="user" size={20} color="#6B7280" />
                <Text className="text-gray-700 text-base pl-4">Account</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
            </TouchableOpacity>
          </View>

          <View className="pb-4">
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/notification")}
              className="bg-white rounded-2xl flex-row items-center justify-between px-5 py-4"
            >
              <View className="flex-row items-center">
                <Feather name="bell" size={20} color="#6B7280" />
                <Text className="text-gray-700 text-base pl-4">Notifications</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
            </TouchableOpacity>
          </View>

          <View className="pb-4">
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/password")}
              className="bg-white rounded-2xl flex-row items-center justify-between px-5 py-4"
            >
              <View className="flex-row items-center">
                <Feather name="lock" size={20} color="#6B7280" />
                <Text className="text-gray-700 text-base pl-4">Password</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
            </TouchableOpacity>
          </View>

          <View className="pb-4">
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/language")}
              className="bg-white rounded-2xl flex-row items-center justify-between px-5 py-4"
            >
              <View className="flex-row items-center">
                <Feather name="globe" size={20} color="#6B7280" />
                <Text className="text-gray-700 text-base pl-4">Language</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
            </TouchableOpacity>
          </View>

          {/* LOGOUT BUTTON */}
          <View className="pb-8">
            <TouchableOpacity
              onPress={() => router.replace("/(auth)/login")}
              className="bg-white rounded-2xl flex-row items-center justify-between px-5 py-4"
            >
              <View className="flex-row items-center">
                <Feather name="log-out" size={20} color="#EF4444" />
                <Text className="text-red-500 text-base pl-4">
                  Logout
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>

      {/* Bottom */}
      <BottomBar />

    </View>
  );
}
