import { noContent, ok } from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = {
    player: "Ronaldo22",
  };

  let response = null;

  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }
  return response;
};
