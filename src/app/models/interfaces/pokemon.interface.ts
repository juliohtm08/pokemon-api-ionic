export interface IPokemonDatas {
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
}
