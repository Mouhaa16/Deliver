import { Client } from "./index";

export const CreateAxiosPost = (endpointURL: string, params: any) =>
  Client.post(endpointURL, params).catch(({ message }) =>
    Promise.reject({ message })
  );
export const PostManyAxiosPost = (endpointURL: string, params: any) =>
  Client.post(endpointURL, params).catch(({ message }) =>
    Promise.reject({ message })
  );

export const GetUserBy = (endpointURL: string) =>
  Client.get(endpointURL).catch(({ message }) => Promise.reject({ message }));

export const UpdateByIdAxiosPost = (
  endpointURL: string,
  id: string,
  params: any
) =>
  Client.post(endpointURL + "/" + id, params).catch(({ message }) =>
    Promise.reject({ message })
  );

export const GetAllAxiosGet = (endpointURL: string) =>
  Client.get(endpointURL).catch(({ message }) => Promise.reject({ message }));

export const SingleAxiosGetBy = (endpointURL: string, type: any) =>
  Client.get(endpointURL + `/` + type).catch(({ message }) =>
    Promise.reject({ message })
  );

export const SendSingleAxiosPost = (endpointURL: string, param: any) =>
  Client.post(endpointURL, param).catch(({ message }) =>
    Promise.reject({ message })
  );
