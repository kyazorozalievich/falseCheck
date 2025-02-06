namespace SHOP {
  interface IQr {
    _id?: number;
    type: string;
    time: date;
    phone: number;
    name: string;
  }
  type postShopCheckResponse = {
    current_page: number;
    per_page: number;
    total_pages: number;
    total_items: number;
    data: IQr[];
  };
  type postShopCheckRequest = {
    current_page: number;
    per_page: number;
    total_pages: number;
    total_items: number;
    data: IQr;
  };

  type getShopCheckResponse = {
    current_page: number;
    per_page: number;
    total_pages: number;
    total_items: number;
    data: IQr[];
  };
  type getShopCheckRequest = void;

  type deleteShopCheckResponse = {
    current_page: number;
    per_page: number;
    total_pages: number;
    total_items: number;
    data: IQr[];
  };
  type deleteShopCheckRequest = number | undefined;
}
