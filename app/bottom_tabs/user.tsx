import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  useWindowDimensions,
} from "react-native";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState, useMemo } from "react";
import BottomBar from "@/components/BottomBar";

export default function User() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const USERS_PER_PAGE = 8;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users?limit=100");
      const data = await res.json();
      setUsers(data.users);
    } catch (err) {
      console.log("User fetch error");
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      `${user.firstName} ${user.lastName} ${user.email} ${user.username} ${user.company.name}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [users, search]);

  const totalPages = Math.ceil(
    filteredUsers.length / USERS_PER_PAGE
  );

  const paginatedUsers = filteredUsers.slice(
    (page - 1) * USERS_PER_PAGE,
    page * USERS_PER_PAGE
  );

  useEffect(() => {
    setPage(1);
  }, [search]);

  const getCardWidth = () => {
    if (width < 600) return "w-full";
    if (width < 1000) return "w-[48%]";
    if (width < 1400) return "w-[32%]";
    return "w-[24%]";
  };

  const InfoRow = ({ icon, label, value }: any) => (
    <View className="flex-row items-start mb-2">
      <View className="mr-2 mt-1">{icon}</View>
      <View className="flex-1">
        <Text className="text-[11px] text-gray-400 uppercase tracking-wide">
          {label}
        </Text>
        <Text className="text-xs text-gray-700">{value}</Text>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-[#E9E7E3]">
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View className="bg-white px-6 pt-14 pb-6">
          <Text className="text-2xl font-bold text-gray-800">
            Users Directory
          </Text>

          <View className="mt-4 bg-gray-100 rounded-xl flex-row items-center px-4 py-3">
            <Feather name="search" size={18} color="#6B7280" />
            <TextInput
              placeholder="Search users..."
              value={search}
              onChangeText={setSearch}
              className="ml-3 flex-1"
            />
          </View>
        </View>

        {loading && (
          <View className="mt-20">
            <ActivityIndicator size="large" color="black" />
          </View>
        )}

        {/* GRID */}
        <View className="max-w-[1600px] w-full self-center px-4 mt-8">
          <View className="flex-row flex-wrap justify-between">

            {!loading &&
              paginatedUsers.map((user) => (
                <View
                  key={user.id}
                  className={`${getCardWidth()} bg-white rounded-3xl mb-8 shadow-xl overflow-hidden`}
                >
                  {/* PROFILE HEADER */}
                  <View className="bg-black px-5 py-6 items-center">
                    <Image
                      source={{ uri: user.image }}
                      className="w-24 h-24 rounded-full border-4 border-white"
                    />
                    <Text className="text-white text-lg font-bold mt-3">
                      {user.firstName} {user.lastName}
                    </Text>
                    <Text className="text-gray-300 text-xs">
                      @{user.username}
                    </Text>
                    <Text className="text-gray-400 text-xs mt-1">
                      {user.role.toUpperCase()}
                    </Text>
                  </View>

                  {/* BODY */}
                  <View className="p-5">

                    {/* PERSONAL */}
                    <Text className="text-sm font-semibold text-gray-800 mb-3">
                      Personal Info
                    </Text>

                    <InfoRow
                      icon={<Ionicons name="calendar-outline" size={14} color="#6B7280" />}
                      label="Birth Date"
                      value={user.birthDate}
                    />

                    <InfoRow
                      icon={<Ionicons name="water-outline" size={14} color="#6B7280" />}
                      label="Blood Group"
                      value={user.bloodGroup}
                    />

                    <InfoRow
                      icon={<Feather name="eye" size={14} color="#6B7280" />}
                      label="Eyes"
                      value={user.eyeColor}
                    />

                    <InfoRow
                      icon={<MaterialIcons name="height" size={14} color="#6B7280" />}
                      label="Height / Weight"
                      value={`${user.height}cm / ${user.weight}kg`}
                    />

                    {/* CONTACT */}
                    <View className="mt-4 border-t pt-4">
                      <Text className="text-sm font-semibold text-gray-800 mb-3">
                        Contact
                      </Text>

                      <InfoRow
                        icon={<Feather name="mail" size={14} color="#6B7280" />}
                        label="Email"
                        value={user.email}
                      />

                      <InfoRow
                        icon={<Feather name="phone" size={14} color="#6B7280" />}
                        label="Phone"
                        value={user.phone}
                      />

                      <InfoRow
                        icon={<Ionicons name="location-outline" size={14} color="#6B7280" />}
                        label="Address"
                        value={`${user.address.address}, ${user.address.city}`}
                      />
                    </View>

                    {/* PROFESSIONAL */}
                    <View className="mt-4 border-t pt-4">
                      <Text className="text-sm font-semibold text-gray-800 mb-3">
                        Professional
                      </Text>

                      <InfoRow
                        icon={<Feather name="briefcase" size={14} color="#6B7280" />}
                        label="Company"
                        value={user.company.name}
                      />

                      <InfoRow
                        icon={<Feather name="layers" size={14} color="#6B7280" />}
                        label="Department"
                        value={user.company.department}
                      />

                      <InfoRow
                        icon={<Ionicons name="school-outline" size={14} color="#6B7280" />}
                        label="University"
                        value={user.university}
                      />
                    </View>

                    {/* FINANCIAL */}
                    <View className="mt-4 border-t pt-4">
                      <Text className="text-sm font-semibold text-gray-800 mb-3">
                        Financial
                      </Text>

                      <InfoRow
                        icon={<Feather name="credit-card" size={14} color="#6B7280" />}
                        label="Card"
                        value={`****${user.bank.cardNumber.slice(-4)}`}
                      />

                      <InfoRow
                        icon={<Ionicons name="logo-bitcoin" size={14} color="#6B7280" />}
                        label="Crypto"
                        value={`${user.crypto.coin} (${user.crypto.network})`}
                      />
                    </View>

                  </View>
                </View>
              ))}

          </View>
        </View>

        {/* PAGINATION */}
        <View className="flex-row justify-center items-center mt-4 mb-16">
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

      {/* BOTTOM NAV */}
      <BottomBar />

    </View>
  );
}
