import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import * as React from "react";

export default function NotificationScreen() {
  const router = useRouter();

  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [offersEnabled, setOffersEnabled] = useState(true);
  const [updatesEnabled, setUpdatesEnabled] = useState(true);

  return (
    <View className="flex-1 bg-[#E9E7E3]">

      {/* HEADER */}
      <View className="bg-white px-5 pt-12 pb-6 rounded-b-3xl">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => router.back()} className="mr-4">
            <Ionicons name="arrow-back" size={24} color="#111827" />
          </TouchableOpacity>

          <Text className="text-xl font-semibold text-gray-800">
            Notifications
          </Text>
        </View>
      </View>

      {/* CONTENT */}
      <View className="flex-1 bg-[#F5F5F5] rounded-t-3xl px-6 pt-6">
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* Push Notifications */}
          <View className="bg-white rounded-2xl px-5 py-4 mb-4 flex-row items-center justify-between">
            <View>
              <Text className="text-gray-800 font-medium text-base">
                Push Notifications
              </Text>
              <Text className="text-gray-400 text-sm pt-1">
                Receive app notifications
              </Text>
            </View>
            <Switch
              value={pushEnabled}
              onValueChange={setPushEnabled}
            />
          </View>

          {/* Email Notifications */}
          <View className="bg-white rounded-2xl px-5 py-4 mb-4 flex-row items-center justify-between">
            <View>
              <Text className="text-gray-800 font-medium text-base">
                Email Notifications
              </Text>
              <Text className="text-gray-400 text-sm pt-1">
                Get updates via email
              </Text>
            </View>
            <Switch
              value={emailEnabled}
              onValueChange={setEmailEnabled}
            />
          </View>

          {/* Offers */}
          <View className="bg-white rounded-2xl px-5 py-4 mb-4 flex-row items-center justify-between">
            <View>
              <Text className="text-gray-800 font-medium text-base">
                Special Offers
              </Text>
              <Text className="text-gray-400 text-sm pt-1">
                Promotions & discounts
              </Text>
            </View>
            <Switch
              value={offersEnabled}
              onValueChange={setOffersEnabled}
            />
          </View>

          {/* App Updates */}
          <View className="bg-white rounded-2xl px-5 py-4 mb-8 flex-row items-center justify-between">
            <View>
              <Text className="text-gray-800 font-medium text-base">
                App Updates
              </Text>
              <Text className="text-gray-400 text-sm pt-1">
                New features & improvements
              </Text>
            </View>
            <Switch
              value={updatesEnabled}
              onValueChange={setUpdatesEnabled}
            />
          </View>

        </ScrollView>
      </View>
    </View>
  );
}
