namespace QR {
  interface IQr {
    _id?: number;
    type: string;
    date: string;
    time: string;
    number: string;
  }
  type postBusCheckResponse = {
    current_page: number;
    per_page: number;
    total_pages: number;
    total_items: number;
    data: IQr[];
  };
  type postBusCheckRequest = IQr;

  type getBusCheckResponse = {
    current_page: number;
    per_page: number;
    total_pages: number;
    total_items: number;
    data: IQr[];
  };
  type getBusCheckRequest = void;

  type deleteBusCheckResponse = {
    current_page: number;
    per_page: number;
    total_pages: number;
    total_items: number;
    data: IQr[];
  };
  type deleteBusCheckRequest = number | undefined;
}
