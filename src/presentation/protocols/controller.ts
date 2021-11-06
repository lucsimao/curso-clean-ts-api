import { HttpRequest, HttpResponse } from './http';

export interface Controller<T, K> {
  handle(httpRequest: HttpRequest<T>): HttpResponse<K>;
}