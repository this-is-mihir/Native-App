import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  useWindowDimensions,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as React from "react";

export default function Explore() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  const collections = [
    {
      id: 1,
      title: "Summer Essentials",
      image:
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1000",
    },
    {
      id: 2,
      title: "Luxury Watches",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000",
    },
    {
      id: 3,
      title: "Urban Sneakers",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000",
    },
  ];

  // Proper column system
  const getColumns = () => {
    if (width < 600) return 2;
    if (width < 900) return 3;
    if (width < 1300) return 4;
    return 5;
  };

  const columns = getColumns();
  const cardWidth = `${100 / columns - 2}%`;

  return (
    <View className="flex-1 bg-[#E9E7E3]">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="max-w-[1600px] w-full self-center">

          {/* HEADER */}
          <View className="bg-white px-6 pt-14 pb-6">
            <Text className="text-2xl font-bold text-gray-800">
              Explore
            </Text>

            <View className="mt-4 bg-gray-100 rounded-xl flex-row items-center px-4 py-3">
              <Feather name="search" size={18} color="#6B7280" />
              <TextInput
                placeholder="Search trends..."
                className="ml-3 flex-1 border-0"
              />
            </View>
          </View>

          {/* TRENDING COLLECTIONS */}
          <View className="px-6 mt-8">
            <Text className="text-lg font-semibold text-gray-800 pb-4">
              Trending Collections
            </Text>

            {collections.map((item) => (
              <TouchableOpacity
                key={item.id}
                className="bg-white rounded-2xl mb-6 overflow-hidden"
              >
                <Image
                  source={{ uri: item.image }}
                  className="h-64 w-full"
                  resizeMode="cover"
                />

                <View className="absolute bottom-0 w-full bg-black/50 px-4 py-3">
                  <Text className="text-white text-lg font-semibold">
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* RECOMMENDED SECTION */}
          <View className="px-6 mt-6 pb-12">
            <Text className="text-lg font-semibold text-gray-800 pb-4">
              Recommended For You
            </Text>

            <View className="flex-row flex-wrap gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <View
                  key={item}
                  style={{ width: cardWidth }}
                  className="bg-white rounded-2xl overflow-hidden"
                >
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800",
                    }}
                    className="h-48 w-full"
                    resizeMode="cover"
                  />

                  <View className="p-4">
                    <Text className="text-gray-800 font-semibold">
                      Trending Item
                    </Text>

                    <Text className="text-gray-500 pt-1">
                      Limited Edition
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="h-20 bg-white flex-row justify-around items-center border-t border-gray-200">

        <TouchableOpacity
          onPress={() => router.replace("/bottom_tabs/shop")}
          className="items-center"
        >
          <Ionicons name="flash-outline" size={22} color="#9CA3AF" />
          <Text className="text-xs pt-1 text-gray-400">Shop</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.replace("/bottom_tabs/explore")}
          className="items-center"
        >
          <Ionicons name="eye" size={22} color="#111827" />
          <Text className="text-xs pt-1 text-gray-900 font-semibold">
            Explore
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.replace("/bottom_tabs/brands")}
          className="items-center"
        >
          <Ionicons name="bookmark-outline" size={22} color="#9CA3AF" />
          <Text className="text-xs pt-1 text-gray-400">Brands</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.replace("/(tabs)/profile")}
          className="items-center"
        >
          <Ionicons name="person-outline" size={22} color="#9CA3AF" />
          <Text className="text-xs pt-1 text-gray-400">Profile</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
