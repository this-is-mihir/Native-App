import * as React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleReset = () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email");
      return;
    }

    Alert.alert(
      "Reset Link Sent",
      "If this email exists, a reset link has been sent."
    );

    router.back();
  };

  return (
    <View className="flex-1 bg-white">
      {/* TOP BLACK SECTION */}
      <View className="h-[280px] bg-black items-center justify-center">
        <Ionicons name="mail-open-outline" size={90} color="white" />
      </View>

      {/* FORM SECTION */}
      <View className="flex-1 bg-[#F5F5F5] px-6 pt-8">
        <Text className="text-3xl font-bold text-center pb-6">
          Forgot Password
        </Text>

        <Text className="text-gray-600 pb-2">
          Enter your registered email address
        </Text>

        <TextInput
          placeholder="hello@dream.com"
          value={email}
          onChangeText={setEmail}
          className="bg-white rounded-xl px-4 py-3.5 mb-6"
        />

        <TouchableOpacity
          onPress={handleReset}
          className="bg-black py-4 rounded-xl"
        >
          <Text className="text-white text-center text-lg font-semibold">
            Send Reset Link
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.back()}
          className="pt-6 items-center"
        >
          <Text className="text-gray-500 underline">
            Back to Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
