import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import * as React from "react";

export default function Signup() {
  const router = useRouter();

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!first || !last || !email || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    router.replace("/(tabs)/profile");
  };

  return (
    <View className="flex-1 bg-white">

      {/* TOP BLACK SECTION */}
      <View className="h-[280px] bg-black items-center justify-center">
        <Ionicons name="person-add-outline" size={90} color="white" />
      </View>

      {/* FORM */}
      <View className="flex-1 bg-[#F5F5F5] px-6 pt-8">
        <Text className="text-black text-3xl text-center font-semibold">
          Sign Up
        </Text>

        <Text className="text-gray-600 pb-2">First Name</Text>
        <TextInput
          placeholder="Rahul"
          value={first}
          onChangeText={setFirst}
          className="bg-white rounded-xl px-4 py-3 mb-4"
        />

        <Text className="text-gray-600 pb-2">Last Name</Text>
        <TextInput
          placeholder="johnson"
          value={last}
          onChangeText={setLast}
          className="bg-white rounded-xl px-4 py-3 mb-4"
        />

        <Text className="text-gray-600 pb-2">E-mail</Text>
        <TextInput
          placeholder="Hello@dream.com"
          value={email}
          onChangeText={setEmail}
          className="bg-white rounded-xl px-4 py-3 mb-4"
        />

        {/* <Text className="text-gray-600 pb-2">Password</Text>
        <TextInput
          placeholder="********"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          className="bg-white rounded-xl px-4 py-3 mb-6"
        /> */}

        <TouchableOpacity
          onPress={handleSignup}
          className="bg-black py-4 rounded-xl"
        >
          <Text className="text-white text-center text-lg font-semibold">
            Sign Up
          </Text>
        </TouchableOpacity>

        <View className="flex-row justify-center pt-6">
          <Text className="text-gray-500">
            Already have a account?{" "}
          </Text>

          <Link href="/(auth)/login">
            <Text className="font-semibold text-black underline">Login</Text>
          </Link>
        </View>

      </View>
    </View>
  );
}
