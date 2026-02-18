import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as React from "react";
import BottomBar from "@/components/BottomBar";

export default function Brands() {
  const router = useRouter();

  const brands = [
    {
      id: 1,
      name: "Urban Style",
      followers: "120K Followers",
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1000",
    },
    {
      id: 2,
      name: "Luxury Time",
      followers: "89K Followers",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000",
    },
    {
      id: 3,
      name: "Street Wear Co.",
      followers: "210K Followers",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000",
    },
  ];

  return (
    <View className="flex-1 bg-[#E9E7E3]">
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View className="bg-white px-6 pt-14 pb-6">
          <Text className="text-2xl font-bold text-gray-800">
            Brands
          </Text>
          <Text className="text-gray-500 pt-1">
            Discover top premium brands
          </Text>
        </View>

        {/* POPULAR BRANDS */}
        <View className="px-6 mt-8">
          <Text className="text-lg font-semibold text-gray-800 pb-4">
            Popular Brands
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {brands.map((brand) => (
              <View
                key={brand.id}
                className="bg-white rounded-2xl mr-5 w-40 overflow-hidden"
              >
                <Image
                  source={{ uri: brand.image }}
                  className="h-28 w-full"
                />

                <View className="p-4 items-center">
                  <Text className="text-gray-800 font-semibold text-center">
                    {brand.name}
                  </Text>

                  <Text className="text-gray-500 text-xs pt-1">
                    {brand.followers}
                  </Text>

                  <TouchableOpacity className="bg-black mt-3 px-4 py-2 rounded-full">
                    <Text className="text-white text-xs">
                      Follow
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* FEATURED BRAND SECTION */}
        <View className="px-6 mt-10 pb-10">
          <Text className="text-lg font-semibold text-gray-800 pb-4">
            Featured Brand
          </Text>

          <View className="bg-white rounded-3xl overflow-hidden">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000",
              }}
              className="h-52 w-full"
            />

            <View className="p-6">
              <Text className="text-xl font-semibold text-gray-800">
                Elite Fashion House
              </Text>

              <Text className="text-gray-500 pt-2">
                Premium collections crafted with modern design and timeless elegance.
              </Text>

              <TouchableOpacity className="bg-black mt-5 py-3 rounded-xl flex-row items-center justify-center">
                <Feather name="arrow-right" size={18} color="white" />
                <Text className="text-white text-base pl-2">
                  Visit Brand
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </ScrollView>

      {/* Bottom Navigation */}
     <BottomBar />
 
    </View>
  );
}
