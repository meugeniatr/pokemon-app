import { APIResource } from './APIResource';

export interface NamedAPIResource extends APIResource {
    name: string;
}
