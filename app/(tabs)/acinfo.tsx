import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState, useRef, useContext } from "react";
import * as React from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import { UserContext } from "../../context/UserContext";

export default function AccountInfo() {
  const router = useRouter();
  const cameraRef = useRef<any>(null);

  const { profileImage, setProfileImage } = useContext(UserContext);

  const [name, setName] = useState("John Sharma");
  const [email, setEmail] = useState("john@gmail.com");
  const [address, setAddress] = useState("Mumbai, India");

  const [cameraVisible, setCameraVisible] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  const openCamera = async () => {
    const result = await requestPermission();
    if (result.granted) {
      setCameraVisible(true);
    }
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setProfileImage(photo.uri);
      setCameraVisible(false);
    }
  };

  return (
    <View className="flex-1 bg-[#E9E7E3]">

      {/* HEADER */}
      <View className="bg-white px-5 pt-12 pb-6 rounded-b-3xl shadow-sm">
        <View className="flex-row items-center">

          {/* ✅ BACK BUTTON ADDED */}
          <TouchableOpacity
            onPress={() => router.back()}
            className="mr-4"
          >
            <Ionicons name="arrow-back" size={24} color="#111827" />
          </TouchableOpacity>

          <Text className="text-xl font-semibold text-gray-800">
            Account Info
          </Text>
        </View>

        {/* Profile Image */}
        <View className="items-center pt-6">
          <Image
            source={{
              uri:
                profileImage ||
                "https://i.pinimg.com/1200x/bb/00/fb/bb00fbabd0a58d0bc918cb8bd5664837.jpg",
            }}
            className="w-28 h-28 rounded-full border-4 border-white"
          />

          <TouchableOpacity
            onPress={openCamera}
            className="mt-3 flex-row items-center"
          >
            <Feather name="camera" size={16} color="#6B7280" />
            <Text className="text-gray-500 pl-2">
              Change Profile Photo
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* FORM */}
      <ScrollView
        className="flex-1 px-6 pt-6"
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-gray-600 pb-2">Full Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          className="bg-white rounded-2xl px-4 py-4 mb-5 shadow-sm"
        />

        <Text className="text-gray-600 pb-2">E-mail</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          className="bg-white rounded-2xl px-4 py-4 mb-5 shadow-sm"
        />

        <Text className="text-gray-600 pb-2">Address</Text>
        <TextInput
          value={address}
          onChangeText={setAddress}
          multiline
          className="bg-white rounded-2xl px-4 py-4 mb-8 shadow-sm"
        />

        <TouchableOpacity
          onPress={() => router.push("/bottom_tabs/profile")}
          className="bg-black py-4 rounded-2xl mb-10"
        >
          <Text className="text-white text-center text-lg font-semibold">
            Save Changes
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* CAMERA MODAL */}
      <Modal visible={cameraVisible} animationType="slide">
        <View className="flex-1 bg-black">
          <CameraView
            ref={cameraRef}
            style={{ flex: 1 }}
            facing="back"
          />

          <View className="absolute bottom-10 w-full items-center">
            <TouchableOpacity
              onPress={takePicture}
              className="bg-white w-20 h-20 rounded-full"
            />
          </View>

          <TouchableOpacity
            onPress={() => setCameraVisible(false)}
            className="absolute top-14 left-6"
          >
            <Ionicons name="close" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
