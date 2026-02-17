import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import * as React from "react";

export default function PasswordScreen() {
  const router = useRouter();

  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <View className="flex-1 bg-[#E9E7E3]">

      {/* HEADER */}
      <View className="bg-white px-5 pt-12 pb-6 rounded-b-3xl">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => router.back()} className="mr-4">
            <Ionicons name="arrow-back" size={24} color="#111827" />
          </TouchableOpacity>

          <Text className="text-xl font-semibold text-gray-800">
            Change Password
          </Text>
        </View>
      </View>

      {/* FORM */}
      <View className="flex-1 bg-[#F5F5F5] px-6 pt-8">

        <Text className="text-gray-600 pb-2">Current Password</Text>
        <TextInput
          secureTextEntry
          value={current}
          onChangeText={setCurrent}
          className="bg-white rounded-xl px-4 py-4 mb-5"
        />

        <Text className="text-gray-600 pb-2">New Password</Text>
        <TextInput
          secureTextEntry
          value={newPass}
          onChangeText={setNewPass}
          className="bg-white rounded-xl px-4 py-4 mb-5"
        />

        <Text className="text-gray-600 pb-2">Confirm Password</Text>
        <TextInput
          secureTextEntry
          value={confirm}
          onChangeText={setConfirm}
          className="bg-white rounded-xl px-4 py-4 mb-8"
        />

        <TouchableOpacity
          onPress={() => router.back()}
          className="bg-black py-4 rounded-xl"
        >
          <Text className="text-white text-center text-lg font-semibold">
            Update Password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
