import styled from "@emotion/native";
import { FabButton } from "../components/home";
import { MatrixList } from "../components/projectDetail";

import { RootStackScreenProps } from "../types";
const Container = styled.View({
  marginHorizontal: 20,
  marginTop: 40,
});

export function ProjectDetailScreen({
  route,
  navigation,
}: RootStackScreenProps<"projectDetail">) {
  return (
    <>
      <Container>
        <MatrixList projectKey={route.params.key} />
      </Container>
      <FabButton
        icon="plus-square"
        label="add Task"
        color="white"
        onPress={() =>
          navigation.navigate("taskModal", { key: route.params.key })
        }
      />
    </>
  );
}
