namespace QR {
  interface IQr {
    _id?: number;
    type: string;
    date: string;
    time: string;
    number: string;
  }
  type postBusCheckResponse = IQr[];
  type postBusCheckRequest = IQr;

  type getBusCheckResponse = IQr[];
  type getBusCheckRequest = void;

  type deleteBusCheckResponse = IQr[];
  type deleteBusCheckRequest = number | undefined;
}
