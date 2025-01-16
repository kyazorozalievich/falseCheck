namespace SHOP {
  interface IQr {
    _id?: number;
    type: string;
    time: date;
    phone: number;
    name: string;
  }
  type postShopCheckResponse = IQr[];
  type postShopCheckRequest = IQr;

  type getShopCheckResponse = IQr[];
  type getShopCheckRequest = void;

  type deleteShopCheckResponse = IQr[];
  type deleteShopCheckRequest = number | undefined;
}
