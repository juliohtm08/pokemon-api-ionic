export interface IPokemonDatas {
  id: number;
  name: string;
  sprites: {
    versions: {
      ['generation-v']: {
        ['black-white']: {
          animated: {
            front_default: string;
          };
        };
      };
    };
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}
