import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as React from "react";

export default function Shop() {
  const router = useRouter();

  const products = [
    {
      id: 1,
      name: "Street Jacket",
      price: "$120",
      image:
        "https://i.pinimg.com/1200x/ee/99/6c/ee996c73399e998670c503dee5f726a1.jpg",
    },
    {
      id: 2,
      name: "Classic Watch",
      price: "$250",
      image:
        "https://i.pinimg.com/1200x/b2/8b/54/b28b54ab304698f5007df4ac8f960634.jpg",
    },
    {
      id: 3,
      name: "Premium Shoes",
      price: "$180",
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800",
    },
    {
      id: 4,
      name: "Minimal Hoodie",
      price: "$95",
      image:
        "https://i.pinimg.com/736x/45/7b/21/457b219f61b1271d3b08bf5cba840b63.jpg",
    },
  ];

  return (
    <View className="flex-1 bg-[#E9E7E3]">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View className="bg-white px-6 pt-14 pb-6">
          <Text className="text-2xl font-bold text-gray-800">Shop</Text>

          <View className="mt-4 bg-gray-100 rounded-xl flex-row items-center px-4 py-3">
            <Feather name="search" size={18} color="#6B7280" />
            <TextInput
              placeholder="Search products..."
              className="ml-3 flex-1"
            />
          </View>
        </View>

        {/* CATEGORY SECTION */}
        <View className="px-6 mt-6">
          <Text className="text-lg font-semibold text-gray-800 pb-4">
            Categories
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {["Fashion", "Watches", "Shoes", "Accessories"].map(
              (cat, index) => (
                <View
                  key={index}
                  className="bg-white rounded-xl px-5 py-3 mr-4"
                >
                  <Text className="text-gray-700">{cat}</Text>
                </View>
              )
            )}
          </ScrollView>
        </View>

        {/* PRODUCTS GRID */}
        <View className="px-6 mt-8">
          <Text className="text-lg font-semibold text-gray-800 pb-4">
            Popular Products
          </Text>

          <View className="flex-row flex-wrap justify-between">
            {products.map((item) => (
              <View
                key={item.id}
                className="bg-white rounded-2xl w-[48%] mb-6 overflow-hidden"
              >
                <Image
                  source={{ uri: item.image }}
                  className="h-40 w-full"
                  resizeMode="cover"
                />

                <View className="p-4">
                  <Text className="text-gray-800 font-semibold">
                    {item.name}
                  </Text>

                  <Text className="text-gray-500 pt-1">
                    {item.price}
                  </Text>

                  <TouchableOpacity className="bg-black mt-4 py-2 rounded-lg">
                    <Text className="text-white text-center text-sm">
                      Add to Cart
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="h-20 bg-white flex-row justify-around items-center">
        <TouchableOpacity
          onPress={() => router.replace("/bottom_tabs/shop")}
          className="items-center"
        >
          <Ionicons name="flash" size={22} color="#111827" />
          <Text className="text-xs pt-1 text-gray-900 font-semibold">
            Shop
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.replace("/bottom_tabs/explore")}
          className="items-center"
        >
          <Ionicons name="eye-outline" size={22} color="#9CA3AF" />
          <Text className="text-xs pt-1 text-gray-400">Explore</Text>
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
