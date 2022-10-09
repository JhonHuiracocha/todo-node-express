import "dotenv/config";
import app from "./app";

app.listen(app.get("port"), () => {
  console.log(`🚀 Server listen on port ${app.get("port")}`);
});
