import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import * as React from "react";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true); // 👈 password show/hide

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    router.replace("/(tabs)/profile");
  };

  return (
    <View className="flex-1 bg-white">
      {/* TOP BLACK SECTION */}
      <View className="h-[280px] bg-black items-center justify-center">
        <Ionicons name="person-outline" size={90} color="white" />
      </View>

      {/* FORM SECTION */}
      <View className="flex-1 bg-[#F5F5F5] px-6 pt-8">
        <Text className="text-3xl font-bold text-center pb-8">Login</Text>

        {/* EMAIL */}
        <Text className="text-gray-600 pb-2">E-mail</Text>
        <TextInput
          placeholder="Hello@dream.com"
          value={email}
          onChangeText={setEmail}
          className="bg-white rounded-xl px-4 py-3.5 mb-4"
        />

        {/* PASSWORD */}
        <Text className="text-gray-600 pb-2">Password</Text>

        <View className="bg-white rounded-xl flex-row items-center px-4 py-1.5">
          <TextInput
            placeholder="********"
            secureTextEntry={secure}
            value={password}
            onChangeText={setPassword}
            className="flex-1"
          />

          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Ionicons
              name={secure ? "eye-off-outline" : "eye-outline"}
              size={22}
              color="#6B7280"
            />
          </TouchableOpacity>
        </View>

        {/* FORGOT PASSWORD */}
        <Link href={"/(auth)/forgot"}
        className="pb-5 pt-2">
        <Text className="text-right text-gray-400 text-sm pt-2 pb-6 underline">
          Forget Password?
        </Text>
        </Link>

        {/* LOGIN BUTTON */}
        <TouchableOpacity
          onPress={handleLogin}
          className="bg-black py-4 rounded-xl"
        >
          <Text className="text-white text-center text-lg font-semibold">
            Login
          </Text>
        </TouchableOpacity>

        {/* SIGN UP LINK */}
        <View className="flex-row justify-center pt-6">
          <Text className="text-gray-500">Don’t have any account? </Text>

          <Link href="/(auth)/signup">
            <Text className="font-semibold text-black underline">Sign Up</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
