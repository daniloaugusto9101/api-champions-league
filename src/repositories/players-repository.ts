import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
  {
    id: 1,
    name: "John Doe",
    club: "Madrid",
    nationality: "USA",
    position: "GK",
    statistics: {
      overall: 90,
      pace: 80,
      shooting: 50,
      passing: 70,
      dribbling: 60,
      defending: 40,
      physicality: 80,
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    club: "FC Barcelona",
    nationality: "Spain",
    position: "FW",
    statistics: {
      overall: 85,
      pace: 90,
      shooting: 85,
      passing: 75,
      dribbling: 88,
      defending: 40,
      physicality: 70,
    },
  },
  {
    id: 3,
    name: "Robert Brown",
    club: "Manchester United",
    nationality: "England",
    position: "MF",
    statistics: {
      overall: 82,
      pace: 75,
      shooting: 70,
      passing: 80,
      dribbling: 78,
      defending: 70,
      physicality: 75,
    },
  },
  {
    id: 4,
    name: "Emily White",
    club: "Paris Saint-Germain",
    nationality: "France",
    position: "DF",
    statistics: {
      overall: 88,
      pace: 80,
      shooting: 60,
      passing: 70,
      dribbling: 65,
      defending: 85,
      physicality: 80,
    },
  },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player);
};

export const deletetPlayer = async (id: Number) => {
  const index = database.findIndex((player) => player.id === id);
  if (index !== -1) {
    database.splice(index, 1);
  }
};
