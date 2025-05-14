import TabBar from "@/components/tab-bar";
import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/Feather";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="trains"
        options={{
          title: "Search",
          tabBarIcon: (props) => (
            <Icon size={props.size} color={props.color} name="search" />
          ),
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          title: "Bookings",
          tabBarIcon: (props) => (
            <Icon size={props.size} color={props.color} name="search" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: (props) => (
            <Icon size={props.size} color={props.color} name="search" />
          ),
        }}
      />
    </Tabs>
  );
}
