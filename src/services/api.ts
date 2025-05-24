import axios from "axios";

export const fetchTranscriptData = async () => {
  const res = await axios.get("http://localhost:5000/api/transcript");
  return res.data;
};

