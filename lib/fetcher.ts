import axios from "axios";

const fetcher = ({
  method,
  id,
  params = [],
}: {
  method: string;
  id: number;
  params?: any[];
}) => {
  return (...args: any) => {
    return axios
      .post(args, { jsonrpc: "2.0", method: method, params: params, id: id })
      .then((res) => {
        return res.data.result;
      });
  };
};

export default fetcher;
