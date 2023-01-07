import { KEY } from "./config";

const fetchData = async () => {
  const data = await fetch(`....${KEY}`).then((res) => res.json);
};
