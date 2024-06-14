export interface CartInterface {
  itemQunatity:   number;
  itemTotalPrice: number;
  item:           Item;
}

export interface Item {
  id:                     number;
  titulo:                 string;
  precio:                 number;
  nombre:                 string;
  marca:                  string;
  descripcion:            null;
  detalles:               null;
  peso:                   null;
  ancho:                  null;
  alto:                   null;
  largo:                  null;
  imagen:                 string;
  elementos_recomendados: number;
  fecha_registro:         Date;
  sku:                    string;
  activo:                 number;
  convertida:             number;
  unique_id:              string;
  marca_autoparte:        number;
  subsubcategoria:        number;
}
