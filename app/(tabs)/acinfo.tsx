import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import * as React from "react";

export default function AccountInfo() {
  const router = useRouter();

  const [name, setName] = useState("John Sharma");
  const [email, setEmail] = useState("john@gmail.com");
  const [address, setAddress] = useState("Mumbai, India");

  return (
    <View className="flex-1 bg-[#E9E7E3]">

      {/* HEADER */}
      <View className="bg-white px-5 pt-12 pb-6 rounded-b-3xl shadow-sm">

        <View className="flex-row items-center">

          {/* Back Button */}
          <TouchableOpacity
            onPress={() => router.back()}
            className="mr-4"
          >
            <Ionicons name="arrow-back" size={24} color="#111827" />
          </TouchableOpacity>

          <Text className="text-xl font-semibold text-gray-800">
            Account Info
          </Text>

        </View>

        {/* Profile Image */}
        <View className="items-center pt-6">
          <Image
            source={{
              uri: "https://i.pinimg.com/1200x/bb/00/fb/bb00fbabd0a58d0bc918cb8bd5664837.jpg",
            }}
            className="w-28 h-28 rounded-full border-4 border-white"
          />

          <TouchableOpacity className="mt-3 flex-row items-center">
            <Feather name="edit-2" size={16} color="#6B7280" />
            <Text className="text-gray-500 pl-2">Change Profile Photo</Text>
          </TouchableOpacity>
        </View>

      </View>

      {/* FORM */}
      <ScrollView
        className="flex-1 px-6 pt-6"
        showsVerticalScrollIndicator={false}
      >

        {/* Name */}
        <Text className="text-gray-600 pb-2">Full Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          className="bg-white rounded-2xl px-4 py-4 mb-5 shadow-sm"
        />

        {/* Email */}
        <Text className="text-gray-600 pb-2">E-mail</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          className="bg-white rounded-2xl px-4 py-4 mb-5 shadow-sm"
        />

        {/* Address */}
        <Text className="text-gray-600 pb-2">Address</Text>
        <TextInput
          value={address}
          onChangeText={setAddress}
          multiline
          className="bg-white rounded-2xl px-4 py-4 mb-8 shadow-sm"
        />

        {/* Save Button */}
        <TouchableOpacity onPress={() => router.push("/(tabs)/profile")}
          className="bg-black py-4 rounded-2xl mb-10"
        >
          <Text className="text-white text-center text-lg font-semibold">
            Save Changes
          </Text>
        </TouchableOpacity>

      </ScrollView>

    </View>
  );
}
