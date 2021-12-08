import { useMemo } from "react";
import { client, useConfig, useElementData } from "@sigmacomputing/plugin";

client.config.configureEditorPanel([
  { name: "source", type: "element" },
  { name: "dimension", type: "column", source: "source", allowMultiple: false },
]);

function App() {
  const config = useConfig();
  const sigmaData = useElementData(config.source);
  const img = useMemo(() => {
    const dimensions = config.dimension;
    if (sigmaData?.[dimensions]) {
      return "https://dummyimage.com/100x50&text=" + sigmaData[dimensions][0];
    }
  }, [config, sigmaData]);

  return <img src={img} />;
}

export default App;
