import { Billboard } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const response = await fetch(`${url}/${id}`);
  return response.json();
};

export default getBillboard;
