import { type ApplicationProps } from "@aiszlab/bee";
import Layout from "./layout";
import { ThemeProvider, ConfigProvider } from "musae";

const Application = ({ children }: ApplicationProps) => {
  return (
    <ConfigProvider>
      <ThemeProvider>
        <Layout>{children}</Layout>
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default Application;
