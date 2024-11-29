import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayers();

  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }
  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await PlayerRepository.findPlayerById(id);

  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }
  return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;
  if (Object.keys(player).length !== 0) {
    await PlayerRepository.insertPlayer(player);
    response = HttpResponse.created();
  } else {
    response = HttpResponse.badRequest();
  }
  return response;
};

export const deletePlayerService = async (id: Number) => {
  let response = null;
  await PlayerRepository.deletetPlayer(id);
  response = HttpResponse.ok({ message: "Player deleted successfully" });
  return response;
};

export const updatePlayerService = async (id: Number, statistics: StatisticsModel) => {
  const data = await PlayerRepository.findAndMofifyPlayer(id, statistics);
  let response = null;
  if (Object.keys(data).length === 0) {
    response = await HttpResponse.badRequest();
  } else {
    response = await HttpResponse.ok(data);
  }
  return response;
};
