import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  useWindowDimensions,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState, useMemo } from "react";
import BottomBar from "@/components/BottomBar";

export default function Shop() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [page, setPage] = useState(1);

  const PRODUCTS_PER_PAGE = 12;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=200");
      const data = await res.json();
      setAllProducts(data.products);
    } catch (err) {
      console.log("Error fetching products");
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    "All",
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "smartphones",
    "womens-dresses",
    "womens-shoes",
    "womens-watches",
  ];

  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (item) => item.category === selectedCategory
      );
    }

    if (search.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filtered;
  }, [allProducts, selectedCategory, search]);

  const totalPages = Math.ceil(
    filteredProducts.length / PRODUCTS_PER_PAGE
  );

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE
  );

  useEffect(() => {
    setPage(1);
  }, [search, selectedCategory]);

  const getCardClass = () => {
    if (width < 600) return "w-[48%]";
    if (width < 1000) return "w-[31%]";
    return "w-[23%]";
  };

  return (
    <View className="flex-1 bg-[#E9E7E3]">

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View className="bg-white px-6 pt-14 pb-6">
          <Text className="text-2xl font-bold text-gray-800">
            Shop
          </Text>

          <View className="mt-4 bg-gray-100 rounded-xl flex-row items-center px-4 py-3">
            <Feather name="search" size={18} color="#6B7280" />
            <TextInput
              placeholder="Search products..."
              value={search}
              onChangeText={setSearch}
              className="ml-3 flex-1 border-0"
            />
          </View>
        </View>

        {/* CATEGORY MENU */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-4 mt-4"
        >
          {categories.map((cat, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedCategory(cat)}
              className={`px-4 py-2 mr-3 rounded-full ${
                selectedCategory === cat
                  ? "bg-black"
                  : "bg-white"
              }`}
            >
              <Text
                className={`text-sm ${
                  selectedCategory === cat
                    ? "text-white"
                    : "text-gray-700"
                }`}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {loading && (
          <View className="mt-20">
            <ActivityIndicator size="large" color="black" />
          </View>
        )}

        {/* PRODUCTS GRID */}
        <View className="max-w-[1400px] w-full self-center px-4 mt-8">
          <View className="flex-row flex-wrap justify-between">
            {!loading &&
              paginatedProducts.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  className={`${getCardClass()} bg-white rounded-2xl mb-6 overflow-hidden shadow-sm`}
                  onPress={() =>
                    router.push(`/bottom_tabs/product/${item.id}`)
                  }
                >
                  <Image
                    source={{ uri: item.thumbnail }}
                    className="h-44 w-full"
                    resizeMode="cover"
                  />

                  <View className="p-4">
                    <Text
                      numberOfLines={1}
                      className="text-gray-800 font-semibold"
                    >
                      {item.title}
                    </Text>

                    <Text
                      numberOfLines={2}
                      className="text-gray-500 text-xs pt-1"
                    >
                      {item.description}
                    </Text>

                    <Text className="text-black font-bold pt-2">
                      ${item.price}
                    </Text>

                    <Text className="text-green-600 text-xs">
                      {item.discountPercentage}% OFF
                    </Text>

                    <Text className="text-yellow-500 text-xs pt-1">
                      ⭐ {item.rating}
                    </Text>

                    <Text className="text-gray-400 text-xs">
                      Stock: {item.stock}
                    </Text>

                    <Text className="text-gray-400 text-xs">
                      Brand: {item.brand}
                    </Text>

                    <TouchableOpacity className="bg-black mt-3 py-2 rounded-lg">
                      <Text className="text-white text-center text-sm">
                        Add to Cart
                      </Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              ))}
          </View>
        </View>

        {/* PAGINATION */}
        <View className="flex-row justify-center items-center mt-4 mb-10">
          <TouchableOpacity
            disabled={page === 1}
            onPress={() => setPage(page - 1)}
            className="bg-white px-6 py-2 rounded-xl mr-4"
          >
            <Text>Prev</Text>
          </TouchableOpacity>

          <Text className="font-semibold">
            {page} / {totalPages}
          </Text>

          <TouchableOpacity
            disabled={page === totalPages}
            onPress={() => setPage(page + 1)}
            className="bg-black px-6 py-2 rounded-xl ml-4"
          >
            <Text className="text-white">Next</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* 🔥 BOTTOM NAVIGATION ADDED */}
     <BottomBar />
              

    </View>
  );
}
