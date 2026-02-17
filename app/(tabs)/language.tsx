import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import * as React from "react";

const LANGUAGES = [
  { label: "English", code: "en" },
  { label: "Hindi", code: "hi" },
  { label: "Gujarati", code: "gu" },
  { label: "Spanish", code: "es" },
  { label: "German", code: "de" },
];

export default function LanguageScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState("en");

  return (
    <View className="flex-1 bg-[#E9E7E3]">

      {/* HEADER */}
      <View className="bg-white px-5 pt-12 pb-6 rounded-b-3xl shadow-sm">
        <View className="flex-row items-center">
          <TouchableOpacity
            onPress={() => router.back()}
            className="mr-4"
          >
            <Ionicons name="arrow-back" size={24} color="#111827" />
          </TouchableOpacity>

          <Text className="text-xl font-semibold text-gray-800">
            Select Language
          </Text>
        </View>
      </View>

      {/* LIST */}
      <ScrollView
        className="flex-1 px-6 pt-6"
        showsVerticalScrollIndicator={false}
      >
        {LANGUAGES.map((item) => {
          const isActive = selected === item.code;

          return (
            <TouchableOpacity
              key={item.code}
              onPress={() => setSelected(item.code)}
              className={`mb-4 rounded-2xl px-5 py-5 flex-row items-center justify-between ${
                isActive ? "bg-black" : "bg-white"
              }`}
            >
              <Text
                className={`text-base font-medium ${
                  isActive ? "text-white" : "text-gray-800"
                }`}
              >
                {item.label}
              </Text>

              {isActive && (
                <Ionicons name="checkmark-circle" size={22} color="white" />
              )}
            </TouchableOpacity>
          );
        })}

        {/* Save Button */}
        <TouchableOpacity
          onPress={() => router.back()}
          className="bg-black py-4 rounded-2xl mt-4 mb-10"
        >
          <Text className="text-white text-center text-lg font-semibold">
            Save Language
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
