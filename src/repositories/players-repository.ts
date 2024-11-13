import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Smith Doe" },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === 1);
};
