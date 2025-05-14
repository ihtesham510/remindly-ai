import { ThemedText } from "@/components/ThemedText";
import AnimatedCounter from "rn-number-flow";
import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function IndexPage() {
  return (
    <View
      style={{
        flex: 1,
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/(tabs)/profile">
        <ThemedText type="link">Go to home screen!</ThemedText>
      </Link>
      <View>
        <Text>
          <AnimatedCounter value={`${123}`} />
        </Text>
      </View>
    </View>
  );
}
