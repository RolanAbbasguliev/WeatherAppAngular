export interface IWeather {
  timelines: [
    {
      timestamp: string;
      endTime: string;
      startTime: string;
      intervals: [
        {
          startTime: string;
          values: {
            tempreture: number;
          };
        }
      ];
    }
  ];
}
