export interface PlayerModel {
  id: number;
  name: string;
  nationality: string;
  club: string;
  position: string;
  statistics: {
    overall: number;
    pace: number;
    shooting: number;
    passing: number;
    dribbling: number;
    defending: number;
    physicality: number;
  };
}
